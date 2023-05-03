import InfoPageAuthor from './InfoPageAuthor';
import InfoPageFooter from './InfoPageFooter';
import InfoPageHero from './InfoPageHero';

const InfoPageContent = () => {
  return (
    <section className="flex w-full flex-col items-center bg-grayscale-100 dark:bg-darkmode-400">
      <div className="flex w-full max-w-default flex-col gap-y-8 p-4 text-black dark:text-white">
        <InfoPageHero />
        <InfoPageAuthor />
        <InfoPageFooter />
      </div>
    </section>
  );
};

export default InfoPageContent;
