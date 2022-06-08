import { Injectable } from '@nestjs/common';
import { IPublisherService, Publisher, PublisherFeed } from '@news-app/common';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

@Injectable()
export class News24Service implements IPublisherService {
  static publisherId = 'news24';
  static url = 'https://www.news24bd.tv';

  async getPublisher(): Promise<Publisher> {
    const response = await fetch(News24Service.url);
    const body = await response.text();
    const $ = cheerio.load(body);
    const title = $('title').text();
    const description = $("meta[name='description']").attr('content');

    return {
      slug: News24Service.publisherId,
      name: 'News 24 TV',
      url: News24Service.url,
      logo: 'https://www.news24bd.tv/desktop/img/logo.png',
      title,
      description,
      keywords: [],
    };
  }

  async getFeed(): Promise<PublisherFeed> {
    return {
      publsiher: await this.getPublisher(),
      newsFeed: [],
    };
  }
}
