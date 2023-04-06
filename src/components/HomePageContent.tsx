import { OpenIcon } from '@/assets/icons';
import { useEffect, useState } from 'react';
import { getAllArticles } from '../../api/api';

const HomePageContent = () => {
  const [articles, setArticles] = useState<any>();
  useEffect(() => {
    getAllArticles().then((data) => setArticles(data));
  }, []);
  return (
    <section className="flex w-full flex-col items-center bg-darkmode-400">
      {articles !== undefined &&
        articles.results.map((result, index) => {
          const datetime = result.published_at;
          const dateWithoutTime = datetime.slice(0, datetime.indexOf('T'));
          return (
            <article
              key={index}
              className="grid w-full max-w-default grid-cols-12 grid-rows-1 items-center justify-center gap-x-2 p-4 text-sm font-light text-white sm:gap-x-4 md:gap-x-8"
            >
              <a
                href={result.url}
                target="_blank"
                rel="noreferrer"
                className="col-span-5 flex h-full w-full items-center justify-center overflow-hidden rounded-md"
              >
                <img
                  src={result.image_url}
                  alt="Article image"
                  className="h-full max-h-80 w-full object-cover"
                />
              </a>
              <div className="col-span-7 flex h-full flex-col justify-between gap-y-2 sm:gap-y-0">
                <header className="flex flex-col gap-y-4">
                  <h1 className="line-clamp-3 sm:text-lg md:text-xl lg:text-3xl lg:font-medium">
                    {result.title}
                  </h1>
                  <p className="sr-only md:not-sr-only lg:text-lg">
                    {result.summary}
                  </p>
                </header>
                <div className="flex flex-col text-xs text-darkmode-200 sm:text-sm md:text-base lg:text-lg">
                  <p>{result.news_site}</p>
                  <div className="flex justify-between">
                    <p>{dateWithoutTime}</p>
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noreferrer"
                      className="duration-300 hover:text-primary"
                    >
                      <OpenIcon className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
    </section>
  );
};

export default HomePageContent;
