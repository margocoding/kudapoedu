import { cn } from "@/utils/classNames";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
  size?: "md" | "sm";
  views?: number;
  type?: "column" | "row";
  className?: string;
}

export default function NewsPost({
  id,
  image,
  title,
  date,
  description,
  size = "md",
  type = "column",
  views,
  className,
}: Props) {
  return (
    <Link
      href={`/article/${id}`}
      className={cn(
        `space-y-3 ${type === "row" && "flex w-full gap-2"}`,
        className,
      )}
    >
      <Image
        src={image}
        alt="news-post"
        className={type === "row" ? "max-w-[40%] object-contain" : "w-full"}
        height={300}
        width={300}
      />

      <div
        className={cn(
          "space-y-3",
          type === "row" && "flex flex-col justify-between h-full",
        )}
      >
        <h2
          className={`${size === "md" ? "text-lg line-clamp-2" : "text-xs line-clamp-3"} ${type === "column" && size === "sm" ? "h-7.5" : "h-12.5"} font-semibold line-clamp-1`}
        >
          {title}
        </h2>

        <div
          className={`flex w-full ${size === "md" ? "text-sm" : "text-xs"} gap-3 justify-between text-[#777777]`}
        >
          <div>{formatDate(date)} </div>
          <div className="text-end">{views}</div>
        </div>
      </div>

      <div
        className={`line-clamp-2 ${type === "row" && "hidden"} ${size === "sm" && "text-xs"}`}
      >
        {description}
      </div>
    </Link>
  );
}
