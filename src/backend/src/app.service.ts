import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getActive(): string {
    return 'Service status active';
  }
}
