import { CrossIcon, SearchIcon } from '@/assets/icons';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getAllArticles, getSearchedArticles } from '../../api/api';

const SearchBar = ({ setArticles }) => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let inputValue = String(searchRef.current?.value);
    let title = inputValue.split(' ').join('%20');
    getSearchedArticles(title).then((data) => {
      if (data.results < 1) {
        toast.error('Sorry, no results found');
        getAllArticles().then((data) => setArticles(data));
      }
      setArticles(data);
    });
  };

  return (
    <div className="flex w-full max-w-default justify-center bg-darkmode-400 p-4">
      <Toaster />
      <form className="flex w-full gap-x-4 rounded-md bg-darkmode-300 p-3 sm:p-4">
        <button onClick={handleSubmit}>
          <SearchIcon className="h-6 w-6 text-darkmode-200" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent text-white outline-none"
          ref={searchRef}
        />
        <button type="reset">
          <CrossIcon className="h-6 w-6 text-darkmode-200" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;