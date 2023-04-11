import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';
import { Link } from 'react-router-dom';

interface PropTypes {
  readonly pageNumber: number;
  readonly totalPages: number;
}

const PagePagination = ({ pageNumber, totalPages }: PropTypes): JSX.Element => {
  const arrowStyle = 'h-12 w-12';
  return (
    <div className="flex text-white">
      {pageNumber > 1 ? (
        <Link to={`/?page=${pageNumber - 1}`}>
          <ArrowLeftIcon className={arrowStyle} />
        </Link>
      ) : (
        <button className="cursor-default opacity-50" disabled>
          <ArrowLeftIcon className={arrowStyle} />
        </button>
      )}
      {pageNumber < totalPages ? (
        <Link to={`/?page=${pageNumber + 1}`}>
          <ArrowRightIcon className={arrowStyle} />
        </Link>
      ) : (
        <button className="cursor-default opacity-50" disabled>
          <ArrowRightIcon className={arrowStyle} />
        </button>
      )}
    </div>
  );
};

export default PagePagination;
