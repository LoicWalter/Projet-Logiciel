import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'database';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({});
  }

  cleanDb() {
    //return this.$transaction([this.user.deleteMany()]);
  }
}
