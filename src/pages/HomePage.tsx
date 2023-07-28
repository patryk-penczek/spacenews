import HomePageContent from '@/components/HomePage';
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
