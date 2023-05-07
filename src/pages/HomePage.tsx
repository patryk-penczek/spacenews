import HomePageContent from '@/components/HomePageContent';
import DefaultLayout from 'layouts/DefaultLayout';
import { ReactElement } from 'react';

const HomePage = (): ReactElement => {
  return (
    <DefaultLayout>
      <HomePageContent />
    </DefaultLayout>
  );
};

export default HomePage;
