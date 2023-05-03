import { useEffect, useState } from 'react';
import { getAllInfo } from '../../api/api';

const SearchSettings = ({ isOpen }: { isOpen: boolean }) => {
  const [info, setInfo] = useState<InfoData>();
  useEffect(() => {
    getAllInfo().then((data) => setInfo(data));
  }, []);
  const infoMap = info?.news_sites;
  return (
    <div
      className={`${
        isOpen === true ? 'not-sr-only mt-4 duration-300' : 'sr-only'
      }`}
    >
      <div className="flex flex-col md:flex-row">
        <select className="rounded-md bg-grayscale-300 px-2 py-1 text-black dark:bg-darkmode-300 dark:text-white">
          <option>Choose a news site</option>
          {Array.isArray(infoMap) && infoMap.length > 0 ? (
            infoMap.map((result, index) => {
              return (
                <option
                  key={index}
                  className="col-span-4 text-xs text-black hover:text-primary hover:duration-300 dark:text-white dark:hover:text-primary md:col-span-2 md:text-sm"
                >
                  {result}
                </option>
              );
            })
          ) : (
            <>
              {Array.from({ length: 35 }).map((_, index) => {
                return <option key={index}>Loading</option>;
              })}
            </>
          )}
        </select>
      </div>
    </div>
  );
};

export default SearchSettings;
