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
  isTrending?: boolean;
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
  isTrending = false,
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
          className={`${size === "md" ? "text-lg line-clamp-2" : type === "column" ? "text-md line-clamp-2" : "text-xs line-clamp-3"}  font-semibold line-clamp-1`}
        >
          {title}
        </h2>

        <div
          className={`flex w-full ${size === "md" && type === "row" ? "text-md gap-3" : "text-sm gap-1"} justify-between text-[#777777]`}
        >
          <div>{formatDate(date)} </div>
          <div className="text-end flex gap-1">
            {views?.toLocaleString("ru-RU")}{" "}
            {type === "column" && size === "md" && <span>просмотров</span>}
            {isTrending ? (
              <Image
                src="/icons/fire.svg"
                height={15}
                width={15}
                alt="trend fire"
              />
            ) : (
              <Image src="/icons/eye.svg" height={15} width={15} alt="views" />
            )}
          </div>
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
