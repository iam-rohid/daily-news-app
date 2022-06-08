export type News = {
  slug?: string;
  title?: string;
  excerpt?: string;
  publisher?: Publisher;
  originalUrl?: string;
  time?: string;
  image?: Image;
};

export type Image = {
  width?: number;
  height?: number;
  altText?: string;
  url?: string;
};

export type FeedSection = {
  type: '';
  title?: string;
  description?: string;
  news?: News[];
};

export type MainFeed = {
  topNews?: News[];
  todayNews?: News[];
  bangladeshNews?: News[];
  internationalNews?: News[];
  sportsNews?: News[];
  businessNews?: News[];
  technologyNews?: News[];
  entertainmentNews?: News[];
  healthNews?: News[];
  scienceNews?: News[];
  lifestyleNews?: News[];
};

export type Publisher = {
  slug: string;
  name: string;
  url: string;
  logo: string;
  title: string;
  description: string;
  keywords: string[];
};

export type FeedItem = {
  type: string;
  name?: string;
  description?: string;
  items?: News[];
};

export type PublisherFeed = {
  publsiher: Publisher;
  newsFeed: FeedItem[];
};

export interface IPublisherService {
  getPublisher(): Promise<Publisher>;
  getFeed(): Promise<PublisherFeed>;
}

export interface IPublisherController {
  getPublisher(): Promise<Publisher>;
  getFeed(): Promise<PublisherFeed>;
}
