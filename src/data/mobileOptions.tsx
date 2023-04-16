import { HomeIcon, ReportIcon, SettingsIcon } from '@/assets/icons';

const iconStyle = 'w-6 h-6 md:sr-only';

interface MobileOption {
  icon: JSX.Element;
  name: string;
  link: string;
}

const mobileOptions: MobileOption[] = [
  {
    icon: <HomeIcon className={iconStyle} />,
    name: 'Home',
    link: '/',
  },
  {
    icon: <ReportIcon className={iconStyle} />,
    name: 'Reports',
    link: '/reports',
  },
  {
    icon: <SettingsIcon className={iconStyle} />,
    name: 'Info',
    link: '/info',
  },
];

export default mobileOptions;
