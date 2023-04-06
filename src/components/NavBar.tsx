import mobileOptions from '@/data/mobileOptions';
import NavBarMobile from './NavBarMobile';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center bg-darkmode-400">
      <div className="flex w-full max-w-default justify-between p-4 font-medium text-grayscale-100">
        <p className="flex items-center gap-x-2">
          <strong className="rounded-lg bg-primary p-2 font-semibold">
            Space
          </strong>
          News
        </p>
        <ul className="sr-only flex items-center gap-x-4 sm:not-sr-only">
          {mobileOptions.map((item) => {
            return <li>{item.name}</li>;
          })}
        </ul>
        <div className="sm:sr-only">
          <NavBarMobile />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
