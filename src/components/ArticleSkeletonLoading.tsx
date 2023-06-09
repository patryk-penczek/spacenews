import { ReactElement } from 'react';

const ArticleSkeleton = (): ReactElement => {
  return (
    <article className="grid h-32 w-full max-w-default animate-pulse grid-cols-12 items-center justify-center gap-x-2 p-4 sm:h-40 sm:gap-x-4 md:h-56 md:gap-x-8 lg:h-72 xl:h-96">
      <div className="col-span-5 h-full w-full rounded-md bg-grayscale-300 dark:bg-darkmode-200" />
      <div className="col-span-7 flex h-full flex-col justify-between gap-y-4">
        <header className="flex flex-col gap-y-2 md:gap-y-4">
          <div className="h-4 w-full rounded-md bg-grayscale-300 dark:bg-darkmode-200 md:h-8" />
          <div className="h-4 w-full rounded-md bg-grayscale-300 dark:bg-darkmode-200" />
          <div className="h-4 w-full rounded-md bg-grayscale-300 dark:bg-darkmode-200" />
        </header>
        <div className="flex flex-col gap-y-1">
          <div className="h-3 w-24 rounded-md bg-grayscale-300 dark:bg-darkmode-200 md:h-4" />
          <div className="flex items-center justify-between">
            <div className="h-3 w-16 rounded-md bg-grayscale-300 dark:bg-darkmode-200 md:h-4" />
            <div className="h-4 w-4 rounded-md bg-grayscale-300 dark:bg-darkmode-200 md:h-7 md:w-7" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleSkeleton;
