import { useEffect, useState } from 'react';
import { getAllReports } from '../../api/api';
import { OpenIcon } from '@/assets/icons';
import SearchBar from './SearchBar';

const ReportsPageContent = () => {
  const [reports, setReports] = useState<any>();
  useEffect(() => {
    getAllReports().then((data) => setReports(data));
  }, []);
  return (
    <section className="flex w-full flex-col items-center bg-darkmode-400">
      <div className="grid w-full max-w-default grid-cols-12 gap-y-4 p-4 md:gap-x-4 lg:gap-8">
        {reports !== undefined &&
          reports.results.map((result, index) => {
            return (
              <article
                key={index}
                className="col-span-12 w-full max-w-default items-center justify-center rounded-md bg-darkmode-300 p-4 font-light text-white md:col-span-6"
              >
                <div className="flex w-full flex-col items-center justify-center gap-y-2 md:gap-y-4">
                  <a href={result.url} target="_blank" rel="noreferrer">
                    <img
                      src={result.image_url}
                      alt="Report image"
                      className="h-12 w-12 rounded-full border-2 border-black object-fill hover:scale-105 hover:border-primary hover:duration-300 md:h-16 md:w-16"
                    />
                  </a>
                  <h1 className="text-center font-medium sm:text-lg md:text-xl lg:text-2xl">
                    {result.title}
                  </h1>
                  <p className="w-full text-justify text-sm line-clamp-4 md:text-base">
                    {result.summary}
                  </p>
                  <div className="flex w-full items-center justify-between text-sm md:text-base">
                    <p className="w-full text-darkmode-200">
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
          })}
      </div>
    </section>
  );
};

export default ReportsPageContent;
