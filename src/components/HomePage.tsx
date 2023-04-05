import { OpenIcon } from '@/assets/icons';
import { useEffect, useState } from 'react';
import { getAllArticles } from '../../api/api';

const HomePage = () => {
  const [articles, setArticles] = useState<any>();
  useEffect(() => {
    getAllArticles().then((data) => setArticles(data));
  }, []);
  return (
    <div>
      {articles !== undefined &&
        articles.results.map((result, index) => {
          const datetime = result.published_at;
          const dateWithoutTime = datetime.slice(0, datetime.indexOf('T'));
          return (
            <div
              key={index}
              className="grid h-36 w-full grid-cols-12 grid-rows-1 items-center gap-x-2 bg-darkmode-400 p-4 text-sm font-light text-white"
            >
              <img
                src={result.image_url}
                className="col-span-6 h-full w-full rounded-md object-cover"
              />
              <div className="col-span-6 flex h-full flex-col justify-between">
                <p className="line-clamp-3">{result.title}</p>
                <div className="flex flex-col text-darkmode-200">
                  <p>{result.news_site}</p>
                  <div className="flex justify-between">
                    <p>{dateWithoutTime}</p>
                    <a href={result.url} target="_blank" rel="noreferrer">
                      <OpenIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
