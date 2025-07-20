// components/DailyLeetCode.tsx
import { difficulty } from '@/configs/difficulty';
import { PostForPostList } from './PostList';

function getDailyIndex(length: number): number {
  const today = new Date();
  const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
  return daysSinceEpoch % length;
}

export default function DailyLeetCode({
  questionList,
}: {
  questionList: PostForPostList[];
}) {
  const targetQuestionList = questionList.filter((question) =>
    question.tags?.includes('leetCode')
  );
  if (targetQuestionList) {
    return (
      <div className="p-4 border rounded shadow max-w-xl mx-auto mt-8">
        <h2 className="text-xl font-bold mb-2">📌 Leetcode 每日一題</h2>
        <p className="text-gray-500">Something Wrong!</p>
      </div>
    );
  }
  const dailyQuestion =
    targetQuestionList[getDailyIndex(targetQuestionList.length)];

  const difficultyInfo =
    difficulty[dailyQuestion.difficulty as keyof typeof difficulty];

  return (
    <div className="p-4 border rounded shadow max-w-xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-2">📌 每日一提</h2>
      <a
        href={dailyQuestion.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        {dailyQuestion.title}
      </a>
      <p className="mt-1">
        難度：
        <span className={`${difficultyInfo.color}`}>
          {difficultyInfo.label}
        </span>
      </p>
    </div>
  );
}
