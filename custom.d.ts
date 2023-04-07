declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

interface ArticlesData {
  count: number;
  next: string;
  previous: string;
  results: ArticlesResults[];
}

interface ArticlesResults {
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
}

interface ArticlesLaunches {
  launch_id: string;
  provider: string;
}

interface ArticlesEvents {
  event_id: number;
  provider: string;
}
