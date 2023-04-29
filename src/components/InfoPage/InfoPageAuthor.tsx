import AuthorPhoto from '@/assets/author-photo.webp';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '@/assets/icons';

const InfoPageAuthor = () => {
  const iconStyle = 'w-8 h-8';
  return (
    <div className="flex w-full flex-col gap-y-4 bg-grayscale-100 dark:bg-darkmode-400">
      <h2 className="text-xl md:text-2xl">About the Author of Space News</h2>
      <div className="flex flex-col items-center gap-x-20 gap-y-4 md:flex-row">
        <div className="flex flex-col items-center justify-center">
          <a
            href="https://patrykpenczek.pl"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 hover:duration-300"
          >
            <img
              src={AuthorPhoto}
              alt="Author photo"
              className="h-36 w-36 rounded-full drop-shadow-md"
            />
          </a>
          <p className="py-2 md:text-lg">Patryk Penczek</p>
          <div className="flex w-full justify-around text-sm md:text-base">
            <a
              href="https://github.com/patryk-penczek"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary hover:duration-300"
            >
              <GithubIcon className={iconStyle} />
            </a>
            <a
              href="https://twitter.com/patryk_penczek"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary hover:duration-300"
            >
              <TwitterIcon className={iconStyle} />
            </a>
            <a
              href="https://www.linkedin.com/in/patryk-penczek"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary hover:duration-300"
            >
              <LinkedInIcon className={iconStyle} />
            </a>
          </div>
        </div>
        <p className="max-w-article text-justify">
          Patryk is a 20-year-old student of computer science with a passion for
          space exploration. As an aspiring programmer, he finds the
          intersection of technology and space to be a fascinating field that
          offers endless possibilities for exploration and discovery. Patryk
          created "Space News" to share his love of space with others and
          provide a platform for the latest news and reports on space
          exploration. Through his website, he hopes to inspire others to learn
          about the mysteries of our galaxy and the advancements we have made in
          the field of space science.
        </p>
      </div>
    </div>
  );
};

export default InfoPageAuthor;
