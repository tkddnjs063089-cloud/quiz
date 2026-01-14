<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# quiz

간단한 NestJS 예제 프로젝트입니다.

## 개요

- 프레임워크: NestJS
- 목적: 예제용 REST API 템플릿 및 CI/CD 설정 예시

## 파일 구조(주요)

- `src/` : 애플리케이션 소스
- `Dockerfile`, `docker-compose.yml` : 컨테이너 빌드/실행 파일
- `.github/workflows/cicd.yml` : GitHub Actions CI/CD 워크플로우

## 요구사항

- Node.js 18+ 권장
- npm
- Docker (컨테이너로 실행할 경우)

## 설치 및 개발 실행

1. 종속성 설치

```bash
npm install
```

2. 개발 서버 실행

```bash
npm run start:dev
```

3. 빌드

```bash
npm run build
```

4. 프로덕션 시작

```bash
npm run start:prod
```

## Docker 사용

- 로컬에서 이미지 빌드 후 컨테이너 실행

```bash
docker build -t quiz:latest .
docker run -p 3000:3000 quiz:latest
```

- 또는 `docker-compose.yml` 사용

```bash
docker-compose up --build
```

## 테스트 및 린트

- 린트

```bash
npm run lint
```

- 유닛 테스트

```bash
npm run test
```

- e2e 테스트

```bash
npm run test:e2e
```

## CI/CD (GitHub Actions & Railway)

저장소의 `.github/workflows/cicd.yml` 파일에 따라 다음 순서로 동작합니다:

1. `ci` job: 체크아웃 → 의존성 설치 → 린트 → 테스트
2. `cd` job: `ci` 성공 후 Railway로 배포

배포를 위해 GitHub 저장소에 Railway 토큰을 시크릿으로 추가해야 합니다.

1. Railway에서 토큰 생성
   - https://railway.app 에 로그인 → Account Settings → API Tokens → 토큰 생성
2. GitHub 저장소 설정
   - 저장소 → `Settings` → `Secrets and variables` → `Actions` → `New repository secret`
   - Name: `RAILWAY_TOKEN`
   - Value: Railway에서 복사한 토큰

워크플로우에서는 `${{ secrets.RAILWAY_TOKEN }}`로 참조됩니다.

## 참고

- `package.json`의 주요 스크립트: `start`, `start:dev`, `build`, `lint`, `test`, `test:e2e`.

문서를 더 확장하거나 예시 엔드포인트 문서를 추가하길 원하시면 알려주세요.
