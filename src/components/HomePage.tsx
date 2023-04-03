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
            <div key={index}>
              <p>{result.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
