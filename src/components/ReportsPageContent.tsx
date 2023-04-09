import { useEffect, useState } from 'react';
import { getAllReports } from '../../api/api';

const ReportsPageContent = () => {
  const [reports, setReports] = useState<any>();
  useEffect(() => {
    getAllReports().then((data) => setReports(data));
  }, []);
  return (
    <section className="flex w-full flex-col items-center bg-darkmode-400">
      {reports !== undefined &&
        reports.results.map((result, index) => {
          return (
            <article
              key={index}
              className="grid w-full max-w-default grid-cols-12 grid-rows-1 items-center justify-center gap-x-2 p-4 font-light text-white sm:gap-x-4 md:gap-x-8"
            ></article>
          );
        })}
    </section>
  );
};

export default ReportsPageContent;
