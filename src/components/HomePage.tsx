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
          return (
            <div
              key={index}
              className="flex w-full items-center gap-x-2 bg-darkmode-400 p-4 text-sm font-light text-white"
            >
              <img
                src={result.image_url}
                className="h-20 w-20 bg-cover bg-center"
              />
              <div className="flex flex-col">
                <p>{result.title}</p>
                <p className="text-darkmode-200">{result.news_site}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
