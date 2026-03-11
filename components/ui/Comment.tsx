import { IComment } from "@/app/article/[id]/page";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";

export default function Comment({
  name,
  createdAt,
  text,
  comments,
}: {
  name: string;
  createdAt: Date;
  text: string;
  comments?: IComment[];
}) {
  return (
    <div>
      <div className="flex gap-3">
        <div className="h-12 aspect-square rounded-full bg-[#D9D9D9]" />
        <div className="space-y-2">
          <div className="flex gap-3">
            <span className="font-semibold">{name}</span>
            <span className="text-black/50">{formatDate(createdAt, true)}</span>
          </div>
          <div className="border-b pb-3 border-[#999]">{text}</div>
          {comments && (
            <div>
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  name={comment.name}
                  createdAt={comment.createdAt}
                  text={comment.text}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
