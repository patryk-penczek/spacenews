declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

type ArticlesData = {
  count: number;
  next: string;
  previous: string;
  results: ArticlesResults[];
};

type ArticlesResults = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: ArticlesLaunches[];
  events: ArticlesEvents[];
};

type ArticlesLaunches = {
  launch_id: string;
  provider: string;
};

type ArticlesEvents = {
  event_id: number;
  provider: string;
};

type SetArticlesData = {
  setArticles: React.Dispatch<SetStateAction<ArticlesData>>;
};

type ReportsData = {
  count: number;
  next: string;
  previous: string;
  results: ReportsResults;
};

type ReportsResults = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
};

type InfoData = {
  version: string;
  news_sites: string[];
};
