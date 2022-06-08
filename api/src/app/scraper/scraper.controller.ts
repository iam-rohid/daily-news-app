import { Controller, Get } from '@nestjs/common';

@Controller('scraper')
export class ScraperController {
  @Get()
  testApi(): string {
    return 'Hello 3';
  }
}
