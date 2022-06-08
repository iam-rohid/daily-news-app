import { Module } from '@nestjs/common';
import { ScraperController } from './scraper.controller';
import { ScraperService } from './scraper.service';
import { ProthomaloModule } from './publishers/prothomalo/prothomalo.module';
import { News24Module } from './publishers/news24/news24.module';

@Module({
  controllers: [ScraperController],
  providers: [ScraperService],
  imports: [ProthomaloModule, News24Module],
})
export class ScraperModule {}
