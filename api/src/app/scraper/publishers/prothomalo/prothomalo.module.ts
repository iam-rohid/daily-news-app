import { Module } from '@nestjs/common';
import { ProthomaloService } from './prothomalo.service';
import { ProthomaloController } from './prothomalo.controller';

@Module({
  providers: [ProthomaloService],
  controllers: [ProthomaloController],
})
export class ProthomaloModule {}
