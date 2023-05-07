import { ReactElement } from 'react';

const InfoSkeleton = (): ReactElement => {
  return (
    <div className="col-span-4 my-2 h-3 w-20 rounded-md bg-grayscale-300 dark:bg-darkmode-200 sm:my-0 sm:h-4 sm:w-24 md:col-span-2 md:h-5 md:w-28"></div>
  );
};

export default InfoSkeleton;
