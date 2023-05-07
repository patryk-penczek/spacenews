import { NasaIcon, OpenIcon } from '@/assets/icons';
import { ReactElement, useEffect, useState } from 'react';
import { getAllReports } from '../../api/api';
import ReportSkeleton from './ReportSkeleton';

const ReportsPageContent = (): ReactElement => {
  const [reports, setReports] = useState<ReportsData>();
  useEffect(() => {
    getAllReports().then((data) => setReports(data));
  }, []);
  const reportsMap = reports !== undefined && reports?.results;
  return (
    <section className="flex w-full flex-col items-center bg-grayscale-100 dark:bg-darkmode-400">
      <div className="grid w-full max-w-default grid-cols-12 gap-y-4 p-4 pb-20 md:gap-x-4 md:pb-12 lg:gap-8">
        {Array.isArray(reportsMap) && reportsMap.length > 0 ? (
          reportsMap.map((result, index) => {
            return (
              <article
                key={index}
                className="col-span-12 w-full max-w-default items-center justify-center rounded-md bg-grayscale-200 p-4 font-light text-black dark:bg-darkmode-300 dark:text-white md:col-span-6"
              >
                <div className="flex w-full flex-col items-center justify-center gap-y-2 md:gap-y-4">
                  <a href={result.url} target="_blank" rel="noreferrer">
                    <NasaIcon className="drop-shadow-md hover:scale-105 hover:duration-300" />
                  </a>
                  <h1 className="text-center font-medium sm:text-lg md:text-xl lg:text-2xl">
                    {result.title}
                  </h1>
                  <p className="line-clamp-6 w-full text-justify text-sm md:line-clamp-4 md:text-base">
                    {result.summary}
                  </p>
                  <div className="flex w-full items-center justify-between text-sm text-grayscale-400 dark:text-darkmode-200 md:text-base">
                    <p>
                      {result.news_site}
                      {' - '}
                      {new Date(result.published_at).toLocaleDateString()}
                    </p>
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noreferrer"
                      className="duration-300 hover:text-primary"
                    >
                      <OpenIcon className="h-4 w-4 md:h-6 md:w-6" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <>
            {Array.from({ length: 6 }).map((_, index) => {
              return <ReportSkeleton key={index} />;
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default ReportsPageContent;
