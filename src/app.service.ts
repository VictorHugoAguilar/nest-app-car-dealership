import { Injectable } from '@nestjs/common';
import e from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
