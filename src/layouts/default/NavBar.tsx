import mobileOptions from '@/data/mobileOptions';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="flex items-center justify-center bg-darkmode-400">
      <div className="flex w-full max-w-default justify-between p-4 font-medium text-grayscale-100">
        <p className="flex items-center gap-x-2">
          <strong className="rounded-lg bg-primary p-2 font-semibold">
            Space
          </strong>
          News
        </p>
        <ul className="fixed bottom-0 left-0 grid w-full grid-cols-3 grid-rows-1 items-center bg-darkmode-400 text-darkmode-200 md:static md:flex md:justify-end md:gap-x-4 md:text-lg md:text-white">
          {mobileOptions.map(({ icon, name, link }) => {
            const activeItem = location.pathname === link ? 'text-primary' : '';
            return (
              <li
                key={name}
                className={`hover:text-primary hover:duration-300 ${activeItem}`}
              >
                <Link
                  to={link}
                  className="flex flex-col items-center justify-center py-3 md:p-0"
                >
                  {icon}
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="sm:sr-only"></div>
      </div>
    </nav>
  );
};

export default NavBar;
