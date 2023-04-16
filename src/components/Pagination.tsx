import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';
import { Link } from 'react-router-dom';

interface PropTypes {
  readonly pageNumber: number;
  readonly totalPages: number;
}

const PagePagination = ({ pageNumber, totalPages }: PropTypes): JSX.Element => {
  const arrowStyle = 'md:h-7 md:w-7 w-6 h-6';
  const buttonStyle =
    'flex disabled:cursor-default disabled:cursor-not-allowed disabled:text-grayscale-300 dark:disabled:text-darkmode-200 items-center hover:text-primary hover:duration-300';
  const pageNumberWidth = 'w-8 text-center';

  const generateLinkButton = (page: number, content: JSX.Element) => {
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
    <div className="flex w-full justify-center gap-x-4 pt-2 pb-20 text-black dark:text-white sm:gap-x-8 sm:text-lg md:gap-x-12 md:pt-8 md:pb-12 md:text-xl">
      {generateLinkButton(
        pageNumber - 1,
        <>
          <ArrowLeftIcon className={arrowStyle} />
          <p>Prev</p>
        </>,
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

      {generateLinkButton(
        pageNumber + 1,
        <>
          <p>Next</p>
          <ArrowRightIcon className={arrowStyle} />
        </>,
      )}
    </div>
  );
};

export default PagePagination;
