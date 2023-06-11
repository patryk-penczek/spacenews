import { OpenIcon } from '@/assets/icons';
import { ReactElement } from 'react';

type Props = {
  readonly result: Result;
};

type Result = {
  readonly url: string;
  readonly image_url: string;
  readonly title: string;
  readonly summary: string;
  readonly news_site: string;
  readonly published_at: string;
};

const Article = ({ result }: Props): ReactElement => {
  return (
    <article className="grid h-32 w-full max-w-default grid-cols-12 items-center justify-center gap-x-2 p-4 font-light text-grayscale-500 dark:text-white sm:h-40 sm:gap-x-4 md:h-56 md:gap-x-8 lg:h-72 xl:h-96">
      <a
        href={result.url}
        target="_blank"
        rel="noreferrer"
        className="group col-span-5 flex h-full w-full items-center justify-center overflow-hidden rounded-md text-white after:absolute after:text-xs after:opacity-0 hover:after:opacity-100 hover:after:delay-150 hover:after:duration-500 hover:after:content-['Find_out_more'] sm:after:text-base sm:hover:after:content-['Click_to_find_out_more'] md:after:text-xl"
      >
        <img
          src={result.image_url}
          alt="Article image"
          className="aspect-[4/3] w-full object-cover drop-shadow-md hover:delay-150 hover:duration-500 group-hover:blur-sm group-hover:brightness-50"
          sizes="(min-width: 280px) 35vw, (min-width: 450px) 38vw, (min-width: 1024px) 39vw, (min-width: 1536px) 37vw, (min-width: 1920px) 30vw"
        />
      </a>
      <div className="col-span-7 flex h-full flex-col justify-between gap-y-2 sm:gap-y-0">
        <header className="flex flex-col gap-y-4">
          <h1 className="line-clamp-3 text-xs font-medium sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {result.title}
          </h1>
          <p className="sr-only text-sm md:not-sr-only md:line-clamp-3 lg:line-clamp-5 lg:text-base xl:line-clamp-6 xl:text-lg">
            {result.summary}
          </p>
        </header>
        <div className="flex items-end justify-between text-xs text-grayscale-400 dark:text-darkmode-200 md:text-sm lg:text-base xl:text-lg">
          <div>
            <p>{result.news_site}</p>
            <p>{new Date(result.published_at).toLocaleDateString()}</p>
          </div>
          <a
            href={result.url}
            aria-label={`Open article: ${result.title}`}
            target="_blank"
            rel="noreferrer"
            className="duration-300 hover:text-primary"
          >
            <OpenIcon className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Article;
