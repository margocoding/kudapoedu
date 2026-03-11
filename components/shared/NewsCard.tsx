import { formatDate } from "@/utils/formatDate";
import Category from "../ui/Category";
import Link from "next/link";

interface Props {
  id: number;
  image: string;
  category: string;
  title: string;
  size: "lg" | "sm";
  className?: string;
  date: string;
}

export default function NewsCard({
  id,
  image,
  category,
  size,
  className,
  title,
  date,
}: Props) {
  return (
    <Link
      href={`/article/${id}`}
      style={{
        backgroundImage: `url(${image})`,
        boxShadow: "inset 0 0 14px 1000px rgba(0,0,0,0.5)",
      }}
      className={`bg-gray-200 h-full bg-cover bg-center gap-3 flex flex-col justify-end ${size === "sm" && "aspect-square"} md:p-6 p-3 ${className}`}
    >
      <Category>{category}</Category>
      <div
        className={`font-semibold text-white ${size === "lg" ? "text-2xl line-clamp-2 max-md:text-xl max-sm:text-lg" : "md:text-lg line-clamp-2"}`}
      >
        {title}
      </div>
      <div className="text-[#C9C9C9]">{formatDate(date)}</div>
    </Link>
  );
}
