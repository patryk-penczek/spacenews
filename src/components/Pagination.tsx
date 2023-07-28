import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@/assets/icons';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  pageNumber: number;
  totalPages: number;
}

const PagePagination = ({
  pageNumber,
  totalPages,
}: Readonly<Props>): ReactElement => {
  const arrowStyle = 'md:h-7 md:w-7 w-6 h-6';
  const buttonStyle =
    'flex disabled:sr-only p-1 md:p-2 rounded-md dark:bg-darkmode-300 dark:text-darkmode-200 md:dark:hover:text-primary text-grayscale-200 bg-white items-center md:hover:text-primary hover:duration-300';
  const pageNumberWidth = 'w-8 text-center';

  const generateLinkButton = (page: number, content: ReactElement) => {
    return page >= 1 && page <= totalPages ? (
      <Link
        to={`/?page=${page}`}
        className={buttonStyle}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {content}
      </Link>
    ) : (
      <button className={buttonStyle} disabled>
        {content}
      </button>
    );
  };

  return (
    <div className="flex w-full justify-center gap-x-2 pb-20 pt-2 text-black dark:text-white sm:gap-x-3 sm:text-lg md:gap-x-4 md:pb-12 md:pt-8 md:text-xl">
      {generateLinkButton(
        1,
        <>
          <DoubleArrowLeftIcon aria-label="First page" className={arrowStyle} />
        </>,
      )}

      {pageNumber === totalPages &&
        generateLinkButton(
          pageNumber - 2,
          <p className={pageNumberWidth}>{pageNumber - 2}</p>,
        )}

      {generateLinkButton(
        pageNumber - 1,
        <p className={pageNumberWidth}>{pageNumber - 1}</p>,
      )}

      <Link to={`/?page=${pageNumber}`} className={buttonStyle}>
        <p className={`${pageNumberWidth} text-primary`}>{pageNumber}</p>
      </Link>

      {generateLinkButton(
        pageNumber + 1,
        <p className={pageNumberWidth}>{pageNumber + 1}</p>,
      )}

      {pageNumber === 1 &&
        generateLinkButton(
          pageNumber + 2,
          <p className={pageNumberWidth}>{pageNumber + 2}</p>,
        )}

      {generateLinkButton(
        totalPages,
        <>
          <DoubleArrowRightIcon aria-label="Last page" className={arrowStyle} />
        </>,
      )}
    </div>
  );
};

export default PagePagination;
