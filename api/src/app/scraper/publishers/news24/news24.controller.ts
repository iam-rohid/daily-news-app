import { Controller, Get } from '@nestjs/common';
import { IPublisherController, PublisherFeed } from '@news-app/common';
import { News24Service } from './news24.service';

@Controller(`publishers/${News24Service.publisherId}`)
export class News24Controller implements IPublisherController {
  constructor(private readonly news24Service: News24Service) {}

  @Get('info')
  async getPublisher() {
    return this.news24Service.getPublisher();
  }

  @Get()
  async getFeed(): Promise<PublisherFeed> {
    return this.news24Service.getFeed();
  }
}
