import NavBarMobile from './NavBarMobile';

const NavBar = () => {
  return (
    <nav className="flex justify-center p-4">
      <div className="flex w-full flex-col justify-between">
        <p className="flex items-center gap-x-2 font-medium">
          <strong className="rounded-lg bg-primary-600 p-2 font-normal text-primary-100">
            Space
          </strong>
          News
        </p>
        <NavBarMobile />
      </div>
    </nav>
  );
};

export default NavBar;
