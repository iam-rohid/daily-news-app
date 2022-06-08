import { Injectable } from '@nestjs/common';
import type {
  FeedItem,
  IPublisherService,
  News,
  Publisher,
  PublisherFeed,
} from '@news-app/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class ProthomaloService implements IPublisherService {
  static publisherId = 'prothomalo';
  static url = 'https://www.prothomalo.com/';
  blockedCollection = ['photo', 'video'];
  collectionNameReplacements: {
    [key: string]: string;
  } = {
    'haal.fashion': 'ফ্যাশন',
    'Home Featured': 'তাজা খবর',
  };

  async getFeed(): Promise<PublisherFeed> {
    try {
      const { data } = await axios.get(ProthomaloService.url, {});
      return {
        publsiher: await this.getPublisher(data),
        newsFeed: await this.getNewsFeed(data),
      };
    } catch (e) {
      console.log(e);
    }
  }

  async getPublisher(body?: string): Promise<Publisher> {
    try {
      if (!body) {
        const { data } = await axios.get(ProthomaloService.url);
        body = data;
      }
      const $ = cheerio.load(body);
      const title = $('title').text();
      const description = $("meta[name='description']").attr('content');
      const keywords = $("meta[name='keywords']")
        .attr('content')
        .split(',')
        .map((item) => !!item && item.trim());

      return {
        slug: ProthomaloService.publisherId,
        name: 'Prothom Alo',
        url: ProthomaloService.url,
        logo: 'https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg',
        title,
        description,
        keywords,
      };
    } catch (e) {
      console.log(e);
    }
  }

  private async getNewsFeed(body?: string): Promise<FeedItem[]> {
    if (!body) {
      try {
        const { data } = await axios.get(ProthomaloService.url);
        body = data;
      } catch (e) {
        console.log(e);
      }
    }
    const $ = cheerio.load(body);
    const jsonData = $('#static-page').text();

    return JSON.parse(jsonData)
      .qt.data.collection.items.filter(
        (col) =>
          col.type === 'collection' &&
          this.blockedCollection.indexOf(
            col['associated-metadata']['navigate_to'],
          ) === -1 &&
          col['associated-metadata'].layout !== 'WidgetOrAdvertisement' &&
          col.items.filter((item) => item.type === 'story').length > 0,
      )
      .map((collection) => {
        let name =
          collection['associated-metadata']['navigate_to_title'] ||
          collection['associated-metadata']['most_commented_title'] ||
          collection.name;
        name = this.collectionNameReplacements[name] || name;

        const items: News[] = collection.items
          .filter((item) => item.type === 'story')
          .map(({ story }) => ({
            title: story.headline.trim(),
            excerpt: story.metadata.excerpt?.trim() || undefined,
            originalUrl: story.url,
            slug: story.slug,
            time: story['last-published-at'],
            image: {
              width:
                story.alternative?.home?.default['hero-image'][
                  'hero-image-metadata'
                ]?.width,
              height:
                story.alternative?.home?.default['hero-image'][
                  'hero-image-metadata'
                ]?.height,
              url: story.alternative?.home?.default['hero-image'][
                'hero-image-url'
              ],
              altText:
                story.alternative?.home?.default['hero-image'][
                  'hero-image-caption'
                ]?.trim() || undefined,
            },
          }));

        return {
          type: collection.type,
          name,
          items: items,
        };
      });
  }
}
