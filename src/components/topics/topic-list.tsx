import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { db } from '@/db';
import paths from '@/paths';

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    const formattedSlug = topic.slug.replace(/%20/g, ' ');
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(formattedSlug)}>
          <Chip color="warning" variant="shadow">
            {formattedSlug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
}
