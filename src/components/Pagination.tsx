import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@/assets/icons';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface PropTypes {
  readonly pageNumber: number;
  readonly totalPages: number;
}

const PagePagination = ({
  pageNumber,
  totalPages,
}: PropTypes): ReactElement => {
  const arrowStyle = 'md:h-7 md:w-7 w-6 h-6';
  const buttonStyle =
    'flex disabled:sr-only items-center hover:text-primary hover:duration-300';
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
    <div className="flex w-full justify-center gap-x-2 pb-20 pt-2 text-black dark:text-white sm:gap-x-8 sm:text-lg md:gap-x-4 md:pb-12 md:pt-8 md:text-xl">
      {generateLinkButton(
        1,
        <>
          <DoubleArrowLeftIcon className={arrowStyle} />
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

      <Link
        to={`/?page=${pageNumber}`}
        className={'{buttonStyle} text-primary'}
      >
        <p className={pageNumberWidth}>{pageNumber}</p>
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
          <DoubleArrowRightIcon className={arrowStyle} />
        </>,
      )}
    </div>
  );
};

export default PagePagination;
