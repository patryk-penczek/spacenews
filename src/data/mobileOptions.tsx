import { AstronautIcon, HomeIcon, SettingsIcon } from '@/assets/icons';

const iconStyle = 'w-6 h-6';

interface MobileOption {
  icon: JSX.Element;
  name: string;
}

const mobileOptions: MobileOption[] = [
  {
    icon: <HomeIcon className={iconStyle} />,
    name: 'Home',
  },
  {
    icon: <AstronautIcon className={iconStyle} />,
    name: 'Astronauts',
  },
  {
    icon: <SettingsIcon className={iconStyle} />,
    name: 'Settings',
  },
];

export default mobileOptions;
