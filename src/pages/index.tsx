import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { allPostsNewToOld, Post } from '@/lib/contentLayerAdapter';
// import styles from "@/styles/Home.module.css";

export function getStaticProps() {
  const posts = allPostsNewToOld;
  return { props: { posts } };
}

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return posts.map((post) => (
    <a key={post.slug} href={post.path}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </a>
  ));
};

export default Home;
