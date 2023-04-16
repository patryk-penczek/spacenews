import Switcher from '@/components/Switcher';
import mobileOptions from '@/data/mobileOptions';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="flex items-center justify-center bg-grayscale-100 dark:bg-darkmode-400">
      <div className="flex w-full max-w-default items-center justify-between gap-x-8 p-4 font-medium text-black dark:text-white">
        <p className="flex items-center gap-x-2">
          <strong className="rounded-lg bg-primary p-2 font-semibold">
            Space
          </strong>
          News
        </p>
        <ul className="fixed bottom-0 left-0 z-10 grid w-full grid-cols-3 grid-rows-1 items-center bg-grayscale-100 text-grayscale-400 dark:bg-darkmode-400 dark:text-darkmode-200 md:static md:flex md:justify-end md:gap-x-6 md:text-lg md:text-black dark:md:text-white">
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
        <Switcher />
      </div>
    </nav>
  );
};

export default NavBar;
