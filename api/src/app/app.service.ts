import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  testApi(): string {
    return 'Api is working...';
  }
}
