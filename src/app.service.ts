import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHellodocker(): string {
    return 'Hello Docker!';
  }
  getHelloCicd(): string {
    return 'Hello CI/CD!';
  }
}
