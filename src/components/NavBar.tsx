const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-8">
      <p className="flex items-center gap-x-2 font-medium">
        <strong className="rounded-lg bg-primary-600 p-2 font-normal text-primary-100">
          Space
        </strong>
        News
      </p>
    </nav>
  );
};

export default NavBar;
