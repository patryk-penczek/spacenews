const InfoPageContent = () => {
  return (
    <section className="flex w-full flex-col items-center gap-y-4 bg-grayscale-100 dark:bg-darkmode-400">
      <div className="text-black dark:text-white">
        Created by{' '}
        <a
          href="https://patrykpenczek.pl"
          target="_blank"
          className="text-primary hover:opacity-80"
          rel="noreferrer"
        >
          Patryk Penczek
        </a>
      </div>
    </section>
  );
};

export default InfoPageContent;
