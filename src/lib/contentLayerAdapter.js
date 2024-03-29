import { allPosts, Post } from 'contentlayer/generated';
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import { compareDesc } from 'date-fns';

export const allPostsNewToOld =
  allPosts?.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  }) || [];

export { allPosts, defineDocumentType, defineNestedType, makeSource, Post };
