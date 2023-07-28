import ReportsPageContent from '@/components/ReportsPageContent';
import DefaultLayout from 'layouts/DefaultLayout';
import { ReactElement } from 'react';

const ReportsPage = (): ReactElement => {
  return (
    <DefaultLayout>
      <ReportsPageContent />
    </DefaultLayout>
  );
};

export default ReportsPage;
