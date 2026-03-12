import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  title: string;
  subcategories: { id: number; title: string; href: string }[];
  categoryHref: string;
  topicHref: string;
  onCloseCategories: () => void;
}

export default function Category({
  title,
  topicHref,
  categoryHref,
  subcategories,
  onCloseCategories,
}: Props) {
  const [openedSubcategories, setOpenedSubcategories] =
    useState<boolean>(false);

  return (
    <div
      className="p-3 flex gap-3 items-center"
      onMouseEnter={() => setOpenedSubcategories(true)}
      onMouseLeave={() => setOpenedSubcategories(false)}
    >
      <Link
        onClick={onCloseCategories}
        href={`${topicHref}?category=${categoryHref}`}
        className="w-full"
      >
        {title}
      </Link>
      {subcategories?.length && (
        <div className="relative">
          <Image
            src="/icons/arrow-right.svg"
            width={20}
            height={20}
            alt="arrow-right"
          />

          {openedSubcategories && (
            <div className="absolute top-0 left-full ml-3 bg-white w-50 flex flex-col shadow-lg">
              {subcategories.map((subcategory) => (
                <Link
                  onClick={() => setOpenedSubcategories(false)}
                  href={`${topicHref}?category=${categoryHref}&subcategory=${subcategory.href}`}
                  className="p-3 hover:text-orange-500 hover:bg-gray-100"
                  key={subcategory.id}
                >
                  {subcategory.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
