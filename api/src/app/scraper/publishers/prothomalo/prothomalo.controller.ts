import { Controller, Get } from '@nestjs/common';
import { IPublisherController } from '@news-app/common';
import { ProthomaloService } from './prothomalo.service';

@Controller(`publishers/${ProthomaloService.publisherId}`)
export class ProthomaloController implements IPublisherController {
  constructor(private readonly prothomaloService: ProthomaloService) {}

  @Get('info')
  async getPublisher() {
    return this.prothomaloService.getPublisher();
  }

  @Get()
  getFeed() {
    return this.prothomaloService.getFeed();
  }
}
