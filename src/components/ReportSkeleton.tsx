const ReportSkeleton = () => {
  return (
    <article className="col-span-12 w-full max-w-default items-center justify-center rounded-md bg-grayscale-200 p-4 dark:bg-darkmode-300 md:col-span-6">
      <div className="flex w-full flex-col items-center justify-center gap-y-2 md:gap-y-6">
        <div className="h-24 w-24 rounded-full bg-grayscale-100 drop-shadow-md dark:bg-darkmode-200" />
        <div className="h-5 w-full rounded-md bg-grayscale-100 text-center dark:bg-darkmode-200" />
        <div className="flex w-full flex-col gap-y-3">
          <div className="h-3 w-full rounded-md bg-grayscale-100 dark:bg-darkmode-200" />
          <div className="h-3 w-full rounded-md bg-grayscale-100 dark:bg-darkmode-200" />
          <div className="h-3 w-full rounded-md bg-grayscale-100 dark:bg-darkmode-200" />
          <div className="h-3 w-full rounded-md bg-grayscale-100 dark:bg-darkmode-200" />
          <div className="h-3 w-full rounded-md bg-grayscale-100 dark:bg-darkmode-200 md:sr-only" />
          <div className="h-3 w-full rounded-md bg-grayscale-100 dark:bg-darkmode-200 md:sr-only" />
        </div>
      </div>
      <div className="flex h-12 w-full items-end justify-between">
        <div className="h-4 w-20 rounded-md bg-grayscale-100 dark:bg-darkmode-200" />
        <div className="h-4 w-4 rounded-md bg-grayscale-100 dark:bg-darkmode-200 md:h-6 md:w-6" />
      </div>
    </article>
  );
};

export default ReportSkeleton;
