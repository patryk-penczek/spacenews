import DefaultLayout from 'layouts/DefaultLayout';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const NotFound = (): ReactElement => {
  return (
    <DefaultLayout>
      <div className="flex h-mobile w-full flex-col items-center justify-center gap-y-4 bg-grayscale-100 text-black dark:bg-darkmode-400 dark:text-white md:h-large md:gap-y-8">
        <p className="text-3xl">Page not found...</p>
        <Link to="/">
          <button className="rounded-md bg-primary px-2 py-1 md:px-6 md:py-3">
            Return to home
          </button>
        </Link>
      </div>
    </DefaultLayout>
  );
};

export default NotFound;
