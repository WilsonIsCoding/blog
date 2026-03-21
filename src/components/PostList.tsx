import { useRouter } from 'next/router';

import CustomLink from '@/components/CustomLink';
import formatDate from '@/lib/formatData';

export interface PostForPostList {
  slug: string;
  date: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
  url: string;
  difficulty: string;
}

type Props = {
  posts: PostForPostList[];
};

export default function PostList({ posts }: Props) {
  const { locale } = useRouter();
  return (
    <ul className="space-y-3">
      {!posts.length && (
        <li className="py-12 text-center text-gray-400 dark:text-gray-600">
          No posts found.
        </li>
      )}
      {posts.map((post) => {
        const { slug, date, title, description, path, tags } = post;
        return (
          <li key={slug} className="group">
            <CustomLink href={path}>
              <article className="rounded-xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-primary-200 group-hover:shadow-md dark:border-gray-800/60 dark:bg-gray-900/50 dark:group-hover:border-primary-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:gap-4">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-sm font-medium text-gray-400 transition-colors dark:text-gray-500">
                    <time dateTime={date}>{formatDate(date, locale)}</time>
                  </dd>
                </dl>
                <div className="mt-2 space-y-2 xl:col-span-3 xl:mt-0">
                  <h3 className="text-lg font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary-600 dark:text-gray-100 dark:group-hover:text-primary-400 sm:text-xl">
                    {title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-gray-500 transition-colors dark:text-gray-400">
                    {description}
                  </p>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500 transition-colors dark:bg-gray-800 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </CustomLink>
          </li>
        );
      })}
    </ul>
  );
}
