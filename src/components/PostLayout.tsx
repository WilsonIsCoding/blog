import { useRouter } from 'next/router';

import CustomLink from '@/components/CustomLink';
import PageTitle from '@/components/PageTitle';
import PostBody from '@/components/PostBody';
import formatDate from '@/lib/formatData';

export interface PostForPostLayout {
  date: string;
  title: string;
}

export type RelatedPostForPostLayout = {
  title: string;
  path: string;
} | null;

type Props = {
  post: PostForPostLayout;
  nextPost: RelatedPostForPostLayout;
  prevPost: RelatedPostForPostLayout;
  children: React.ReactNode;
};

export default function PostLayout({
  post,
  nextPost,
  prevPost,
  children,
}: Props) {
  const { date, title } = post;

  const { locale } = useRouter();
  return (
    <article>
      <div>
        <header className="hero-gradient py-12 md:py-16">
          <div className="relative space-y-4 text-center">
            <div className="mb-3">
              <PageTitle>{title}</PageTitle>
            </div>

            <dl>
              <div>
                <dt className="sr-only">發佈時間</dt>
                <dd className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-500 transition-colors dark:bg-gray-800 dark:text-gray-400">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <time dateTime={date}>{formatDate(date, locale)}</time>
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="border-t border-gray-200/80 pt-10 pb-8 transition-colors dark:border-gray-800/80">
          <PostBody>{children}</PostBody>
        </div>

        <div className="border-t border-gray-200/80 pb-8 transition-colors dark:border-gray-800/80">
          <footer>
            <div className="flex flex-col gap-4 pt-6 text-base font-medium sm:flex-row sm:justify-between xl:gap-8 xl:pt-8">
              {prevPost ? (
                <div className="group/nav basis-6/12">
                  <h2 className="mb-1.5 text-xs font-medium uppercase tracking-wider text-gray-400 transition-colors dark:text-gray-500">
                    上一篇
                  </h2>
                  <CustomLink
                    href={prevPost.path}
                    className="text-primary-500 transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span className="mr-1 inline-block transition-transform duration-200 group-hover/nav:-translate-x-1">
                      ←
                    </span>
                    {prevPost.title}
                  </CustomLink>
                </div>
              ) : (
                <div />
              )}
              {nextPost && (
                <div className="group/nav basis-6/12">
                  <h2 className="mb-1.5 text-left text-xs font-medium uppercase tracking-wider text-gray-400 transition-colors dark:text-gray-500 sm:text-right">
                    下一篇
                  </h2>
                  <CustomLink
                    href={nextPost.path}
                    className="block text-primary-500 transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400 sm:text-right"
                  >
                    {nextPost.title}
                    <span className="ml-1 inline-block transition-transform duration-200 group-hover/nav:translate-x-1">
                      →
                    </span>
                  </CustomLink>
                </div>
              )}
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
