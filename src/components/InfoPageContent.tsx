import { useEffect, useState } from 'react';
import { getAllInfo } from '../../api/api';
import InfoSkeleton from './InfoSkeleton';

const InfoPageContent = () => {
  const [info, setInfo] = useState<any>();
  useEffect(() => {
    getAllInfo().then((data) => setInfo(data));
  }, []);
  const infoMap = info?.news_sites;
  return (
    <section className="flex min-h-[100vh] w-full flex-col items-center bg-grayscale-100 dark:bg-darkmode-400">
      <div className="grid w-full max-w-default grid-cols-12 gap-y-4 p-4 md:gap-x-4 lg:gap-8">
        {Array.isArray(infoMap) && infoMap.length > 0 ? (
          infoMap.map((result, index) => {
            return (
              <a
                key={index}
                href={`https://www.google.com/search?q=${result}`}
                target="_blank"
                rel="noreferrer"
                className="col-span-4 text-xs text-black hover:text-primary hover:duration-300 dark:text-white dark:hover:text-primary md:col-span-2 md:text-sm"
              >
                {result}
              </a>
            );
          })
        ) : (
          <>
            {Array.from({ length: 35 }).map((_, index) => {
              return <InfoSkeleton key={index} />;
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default InfoPageContent;
