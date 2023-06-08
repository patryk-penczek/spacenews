import { OpenIcon } from '@/assets/icons';
import { ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllArticles } from '../../api/api';
import ArticleSkeleton from './ArticleSkeleton';
import PagePagination from './Pagination';
import SearchBar from './SearchBar';

const HomePageContent = (): ReactElement => {
  const [articles, setArticles] = useState<ArticlesData>();
  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data);
    });
  }, []);
  const itemsPerPage = 10;
  const articleResults = articles !== undefined && articles?.results;
  const [searchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get('page')) || 1;
  const getArticlesPerPage = (data, pageNumber) => {
    if (data !== undefined && Array.isArray(data)) {
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return data.slice(startIndex, endIndex);
    }
  };
  const articlesMap = getArticlesPerPage(articleResults, pageNumber);
  const totalPages =
    articleResults !== false
      ? Math.ceil(articleResults.length / itemsPerPage)
      : 0;
  return (
    <section className="flex w-full flex-col items-center bg-grayscale-100 dark:bg-darkmode-400">
      <SearchBar setArticles={setArticles} />
      {Array.isArray(articlesMap) && articlesMap.length > 0 ? (
        articlesMap.map((result, index) => {
          return (
            <article
              key={index}
              className="grid w-full max-w-default grid-cols-12 items-center justify-center gap-x-2 p-4 font-light text-grayscale-500 dark:text-white sm:gap-x-4 md:gap-x-8"
            >
              <a
                href={result.url}
                target="_blank"
                rel="noreferrer"
                className="group col-span-5 flex h-full w-full items-center justify-center overflow-hidden rounded-md text-white after:absolute after:text-xs after:opacity-0 hover:after:opacity-100 hover:after:delay-150 hover:after:duration-500 hover:after:content-['Find_out_more'] sm:after:text-base sm:hover:after:content-['Click_to_find_out_more'] md:after:text-xl"
              >
                <img
                  src={result.image_url}
                  alt="Article image"
                  className="aspect-[4/3] h-full max-h-28 w-full object-cover drop-shadow-md hover:delay-150 hover:duration-500 group-hover:blur-sm group-hover:brightness-50 sm:max-h-40 md:max-h-56 xl:max-h-80"
                  sizes="(min-width: 280px) 35vw, (min-width: 450px) 38vw, (min-width: 1024px) 39vw, (min-width: 1536px) 37vw, (min-width: 1920px) 30vw"
                />
              </a>
              <div className="col-span-7 flex h-full flex-col justify-between gap-y-2 sm:gap-y-0">
                <header className="flex flex-col gap-y-4">
                  <h1 className="text-sm font-medium sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    {result.title}
                  </h1>
                  <p className="sr-only text-sm md:not-sr-only md:line-clamp-3 lg:text-base xl:line-clamp-6 xl:text-lg">
                    {result.summary}
                  </p>
                </header>
                <div className="flex flex-col text-xs text-grayscale-400 dark:text-darkmode-200 md:text-sm lg:text-base xl:text-lg">
                  <p>{result.news_site}</p>
                  <div className="flex justify-between">
                    <p>{new Date(result.published_at).toLocaleDateString()}</p>
                    <a
                      href={result.url}
                      aria-label={`Open article: ${result.title}`}
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
        })
      ) : (
        <>
          {Array.from({ length: itemsPerPage / 2 }).map((_, index) => {
            return <ArticleSkeleton key={index} />;
          })}
        </>
      )}
      <PagePagination pageNumber={pageNumber} totalPages={totalPages} />
    </section>
  );
};

export default HomePageContent;
