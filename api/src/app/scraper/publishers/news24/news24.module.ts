import { Module } from '@nestjs/common';
import { News24Service } from './news24.service';
import { News24Controller } from './news24.controller';

@Module({
  providers: [News24Service],
  controllers: [News24Controller],
})
export class News24Module {}
