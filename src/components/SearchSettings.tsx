import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getAllInfo, getSearchedNewsSites } from '../../api/api';

type Props = {
  isOpen: boolean;
  setArticles: Dispatch<SetStateAction<ArticlesData>>;
};

const SearchSettings = ({ isOpen, setArticles }: Props): ReactElement => {
  const [info, setInfo] = useState<InfoData>();
  const [loadingLength, setLoadingLength] = useState(0);
  const infoMap = info?.news_sites;
  const selectRef = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    getAllInfo().then((data: InfoData) => setInfo(data));
  }, []);
  useEffect(() => {
    if (infoMap) {
      setLoadingLength(infoMap.length);
    }
  }, [infoMap]);

  const searchByNewsSite = () => {
    const news_site = selectRef.current && selectRef.current.value;
    getSearchedNewsSites(news_site).then((data) => setArticles(data));
  };

  return (
    <div
      className={`${
        isOpen === true ? 'not-sr-only mt-4 duration-300' : 'sr-only'
      }`}
    >
      <div className="flex flex-col md:flex-row">
        <select
          ref={selectRef}
          onChange={searchByNewsSite}
          required
          className="rounded-md bg-grayscale-300 px-2 py-1 text-black hover:cursor-pointer dark:bg-darkmode-300 dark:text-white"
        >
          <option label="Choose a news site" />
          {Array.isArray(infoMap) && infoMap.length > 0 ? (
            infoMap.map((result, index) => {
              return (
                <option
                  key={index}
                  value={result}
                  className="col-span-4 text-xs text-black hover:text-primary hover:duration-300 dark:text-white dark:hover:text-primary md:col-span-2 md:text-sm"
                >
                  {result}
                </option>
              );
            })
          ) : (
            <>
              {Array.from({ length: loadingLength }).map((_, index) => {
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
