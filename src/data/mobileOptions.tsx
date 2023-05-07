import { HomeIcon, InfoIcon, ReportIcon } from '@/assets/icons';
import { ReactElement } from 'react';

const iconStyle = 'w-6 h-6 md:sr-only';

interface MobileOption {
  readonly icon: ReactElement;
  readonly name: string;
  readonly link: string;
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
    icon: <InfoIcon className={iconStyle} />,
    name: 'Info',
    link: '/info',
  },
];

export default mobileOptions;
