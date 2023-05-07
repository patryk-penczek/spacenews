import InfoPageContent from '@/components/InfoPage/InfoPageContent';
import DefaultLayout from 'layouts/DefaultLayout';
import { ReactElement } from 'react';

const InfoPage = (): ReactElement => {
  return (
    <DefaultLayout>
      <InfoPageContent />
    </DefaultLayout>
  );
};

export default InfoPage;
