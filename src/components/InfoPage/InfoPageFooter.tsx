import { ReactElement, useEffect, useState } from 'react';
import { getAllInfo } from '../../../api/api';
import InfoSkeleton from './InfoSkeleton';

const InfoPageFooter = (): ReactElement => {
  const [info, setInfo] = useState<InfoData>();
  const infoMap = info?.news_sites;
  const loadingLength = infoMap !== undefined ? infoMap.length : 35;
  useEffect(() => {
    getAllInfo().then((data) => setInfo(data));
  }, []);

  return (
    <>
      <h3 className="text-xl md:text-2xl">Sources of Space News</h3>
      <div className="grid w-full grid-cols-12 gap-y-4 pb-20 md:gap-x-4 md:pb-12 lg:gap-8">
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
            {Array.from({ length: loadingLength }).map((_, index) => {
              return <InfoSkeleton key={index} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default InfoPageFooter;
