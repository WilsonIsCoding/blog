import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ArticleJsonLd } from 'next-seo';

import PostList, { PostForPostList } from '@/components/PostList';
import { footerConfigs } from '@/configs/footerConfigs';
import { siteConfigs } from '@/configs/siteConfigs';
import { allPostsNewToOld } from '@/lib/contentLayerAdapter';

type PostForIndexPage = PostForPostList;

type Props = {
  posts: PostForIndexPage[];
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = allPostsNewToOld.map((post) => ({
    slug: post.slug,
    date: post.date,
    title: post.title,
    description: post.description,
    path: post.path,
    tags: post.tags || [],
    url: post.url || '',
    difficulty: post.difficulty || '',
  }));
  return { props: { posts } };
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <ArticleJsonLd
        type="Blog"
        url={siteConfigs.fqdn}
        title={siteConfigs.title}
        images={[siteConfigs.bannerUrl]}
        datePublished={siteConfigs.datePublished}
        authorName={siteConfigs.author}
        description={siteConfigs.description}
      />

      <div className="hero-gradient my-16 md:my-20">
        <div className="relative">
          <div className="mb-2 text-sm font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400">
            Welcome to my blog
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 transition-colors dark:text-gray-100 sm:text-5xl md:text-6xl">
            嗨 I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-500">
              Wilson
            </span>
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-gray-600 transition-colors dark:text-gray-400 md:text-lg">
            <p>
              雜食性工程師，擁有三年的前端開發經驗，兩年的工作經驗。
            </p>
            <p>在網站前後端連滾帶爬，喜歡弄髒雙手來解決問題。</p>
            <p>因為喜歡分享，所以選擇企管系。因為喜歡技術，所以當了工程師。</p>
            <p className="text-gray-500 dark:text-gray-500">
              歡迎你到這裡，看看最近的我在學些什麼
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            {Object.entries(footerConfigs.socialLinks).map(([key, href]) => (
              <a
                key={key}
                href={key === 'email' ? `mailto:${href}` : href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:text-gray-700 hover:shadow dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300"
              >
                {key === 'email' ? 'Email' : key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="my-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-5 w-1 rounded-full bg-primary-500" />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 transition-colors dark:text-gray-100">
              最新文章
            </h2>
          </div>
          <span className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800" />
          <span className="text-xs font-medium text-gray-400 dark:text-gray-600">
            {posts.length} 篇文章
          </span>
        </div>

        <PostList posts={posts} />
      </div>
    </>
  );
};

export default Home;
