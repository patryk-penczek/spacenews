import { HomeIcon, RocketIcon, SettingsIcon } from '@/assets/icons';

const NavBarMobile = () => {
  return (
    <div className="fixed bottom-0 left-0 flex w-full">
      <HomeIcon className="h-8 w-8 flex-grow" />
      <RocketIcon className="h-8 w-8 flex-grow" />
      <SettingsIcon className="h-8 w-8 flex-grow" />
    </div>
  );
};

export default NavBarMobile;
