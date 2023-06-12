import { ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllArticles } from '../../api/api';
import Article from './Article';
import ArticleSkeleton from './ArticleSkeletonLoading';
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
    <section className="flex min-h-large w-full flex-col items-center bg-grayscale-100 dark:bg-darkmode-400">
      <SearchBar setArticles={setArticles} />
      {Array.isArray(articlesMap) && articlesMap.length > 0 ? (
        articlesMap.map((result, index) => {
          return <Article key={index} result={result} />;
        })
      ) : (
        <>
          {[...Array(itemsPerPage / 2).keys()].map((index) => (
            <ArticleSkeleton key={index} />
          ))}
        </>
      )}
      <PagePagination pageNumber={pageNumber} totalPages={totalPages} />
    </section>
  );
};

export default HomePageContent;
