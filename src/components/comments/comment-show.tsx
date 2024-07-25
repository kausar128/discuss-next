import Image from 'next/image';
import CommentCreateForm from '@/components/comments/comment-create-form';
import { fetchCommentsByPostId } from '@/db/queries/comments';
import { auth } from "@/auth";
import { EditIcon, DeleteIcon } from '@nextui-org/shared-icons';


interface CommentShowProps {
  commentId: string;
  postId: string;
}

export default async function CommentShow({
  commentId,
  postId,
}: CommentShowProps) {
  const session = await auth();
  const comments = await fetchCommentsByPostId(postId);
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return <CommentShow key={child.id} commentId={child.id} postId={postId} />;
  });

  return (
    <div className="p-4 border mt-2 mb-1">
      <div className="flex gap-3">
        <Image
          src={comment.user.image || ''}
          alt="user image"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 space-y-3">
          <div className='flex justify-between'>
            <p className="text-sm font-medium text-gray-500">
              {comment.user.name}
            </p>
            {comment.user.id === session?.user?.id && (
              <div className='flex'>
                <CommentCreateForm postId={comment.postId} parentId={comment.id} />
                <EditIcon className='mx-2' />
                <DeleteIcon className='mx-2' />
              </div>
            )}
          </div>
          <div className="text-gray-900">
            <span>{comment.content}</span>
          </div>

        </div>
      </div>
      <div className="pl-4">{renderedChildren}</div>
    </div>
  );
}
