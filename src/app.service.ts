import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(mongoose.connection.readyState);
    return 'Hello World!';
  }
}
