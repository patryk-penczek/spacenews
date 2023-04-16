import { CrossIcon, SearchIcon } from '@/assets/icons';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getAllArticles, getSearchedArticles } from '../../api/api';

const SearchBar = ({ setArticles }: SetArticlesData) => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const inputValue = String(searchRef.current?.value);
    const title = inputValue.split(' ').join('%20');
    getSearchedArticles(title).then((data) => {
      if (data.results < 1) {
        toast.error('Sorry, no results found');
        getAllArticles().then((data) => setArticles(data));
      }
      setArticles(data);
    });
  };

  return (
    <div className="flex w-full max-w-default justify-center bg-grayscale-100 p-4 dark:bg-darkmode-400">
      <Toaster />
      <form className="flex w-full gap-x-4 rounded-md border-1 border-darkmode-400 bg-grayscale-100 p-3 drop-shadow-md dark:bg-darkmode-300 sm:p-4">
        <button onClick={handleSubmit}>
          <SearchIcon className="h-6 w-6 text-grayscale-400 dark:text-darkmode-200" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent text-black outline-none dark:text-white"
          ref={searchRef}
        />
        <button
          type="reset"
          onClick={() => {
            searchRef.current!.value = '';
            getAllArticles().then((data) => setArticles(data));
          }}
        >
          <CrossIcon className="h-6 w-6 text-grayscale-400 dark:text-darkmode-200" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
