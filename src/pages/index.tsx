import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ArticleJsonLd } from 'next-seo';

import PostList, { PostForPostList } from '@/components/PostList';
import DailyLeetCode from '@/components/DailyLeetCode';
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

      <div className="prose my-12 space-y-2 transition-colors dark:prose-dark md:prose-lg md:space-y-5">
        <h1 className="text-center sm:text-left">嗨 I'm Wilson</h1>
        <p>
          雜食性工程師，擁有三年的前端開發經驗，兩年的工作經驗。
        </p>

        <p>在網站前後端連滾帶爬，喜歡弄髒雙手來解決問題，問題不分前後，問題 就是 問題。</p>

        <p>因為喜歡分享，所以選擇企管系。因為喜歡技術，所以當了工程師。</p>

        <p>歡迎你到這裡，看看最近的我在學些什麼</p>
      </div>

      <div className="my-4 divide-y divide-gray-200 transition-colors dark:divide-gray-700">
        <div className="prose prose-lg my-8 dark:prose-dark">
          <h2>最新文章</h2>
        </div>

        <PostList posts={posts} />
      </div>
    </>
  );
};

export default Home;
