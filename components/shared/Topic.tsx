"use client";

import Image from "next/image";
import { Category as ICategory } from "./Header";
import { useState } from "react";
import Category from "./Category";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/classNames";

interface Props {
  title: string;
  href: string;
  categories?: ICategory[];
}

export default function Topic({ title, href, categories }: Props) {
  const [opened, setOpened] = useState<boolean>(false);
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <button
      onMouseEnter={() => setOpened(true)}
      onMouseLeave={() => setOpened(false)}
      className="flex gap-1 items-center text-white relative"
    >
      <Link
        href={href}
        className={cn("font-medium text-xl", isActive && "text-[#A6D7E3]")}
      >
        {title}
      </Link>
      {categories?.length && (
        <span>
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow down"
            width={15}
            height={15}
          />{" "}
        </span>
      )}

      <div className="top-7 shadow-lg absolute bg-white text-black">
        {opened &&
          categories?.map((category) => (
            <Category
              key={category.id}
              title={category.title}
              categoryHref={href + category.href}
              subcategories={category.subcategories}
            />
          ))}
      </div>
    </button>
  );
}
