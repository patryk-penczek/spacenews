import Switcher from './Switcher';

const SettingsPageContent = () => {
  return (
    <section className="flex w-full flex-col items-center gap-y-4 bg-darkmode-400 text-white dark:bg-slate-50">
      <div className="flex w-full max-w-default flex-col items-center gap-y-4 py-20">
        <h1 className="text-2xl">Settings</h1>
        <div className="flex w-full justify-between p-4 md:justify-around md:text-lg">
          <Switcher />
        </div>
      </div>

      <div className="text-white">
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

export default SettingsPageContent;
