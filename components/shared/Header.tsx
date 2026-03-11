import Image from "next/image";
import Topic from "./Topic";
import Container from "./Container";

export interface Category {
  id: number;
  title: string;
  href: string;
  subcategories: { id: number; title: string; href: string }[];
}

export const topics = [
  {
    id: 1,
    title: "Главное",
    href: "/",
  },
  {
    id: 2,
    title: "Новинки",
    href: "/topic/latest",
  },
  {
    id: 3,
    title: "Путешествия",
    slug: "travels",
    href: "/topic/travels",
    categories: [
      {
        id: 1,
        title: "Европа",
        href: "/europe",
        subcategories: [
          { id: 1, title: "Италия", href: "/italy" },
          { id: 2, title: "Испания", href: "/spain" },
          { id: 3, title: "Франция", href: "/france" },
          { id: 4, title: "Германия", href: "/germany" },
          { id: 5, title: "Великобритания", href: "/uk" },
        ],
      },
      {
        id: 2,
        title: "Азия",
        href: "/asia",
        subcategories: [
          { id: 6, title: "Япония", href: "/japan" },
          { id: 7, title: "Индия", href: "/india" },
          { id: 8, title: "Вьетнам", href: "/vietnam" },
          { id: 9, title: "Южная Корея", href: "/south-korea" },
        ],
      },
      {
        id: 3,
        title: "Северная Америка",
        href: "/north-america",
        subcategories: [
          { id: 10, title: "США", href: "/usa" },
          { id: 11, title: "Канада", href: "/canada" },
          { id: 12, title: "Мексика", href: "/mexico" },
        ],
      },
      {
        id: 4,
        title: "Россия",
        href: "/russia",
        subcategories: [
          { id: 13, title: "Золотое кольцо", href: "/golden-ring" },
          { id: 14, title: "Байкал", href: "/baikal" },
          { id: 15, title: "Камчатка", href: "/kamchatka" },
          { id: 16, title: "Кавказ", href: "/caucasus" },
        ],
      },
      {
        id: 5,
        title: "Африка",
        href: "/africa",
        subcategories: [
          { id: 17, title: "Египет", href: "/egypt" },
          { id: 18, title: "Кения", href: "/kenya" },
          { id: 19, title: "ЮАР", href: "/south-africa" },
          { id: 20, title: "Марокко", href: "/morocco" },
        ],
      },
      {
        id: 6,
        title: "Австралия и Океания",
        href: "/australia-oceania",
        subcategories: [
          { id: 21, title: "Австралия", href: "/australia" },
          { id: 22, title: "Новая Зеландия", href: "/new-zealand" },
          { id: 23, title: "Фиджи", href: "/fiji" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Маршруты",
    href: "/topic/routes",
  },
];

export default function Header() {
  return (
    <header className={"bg-linear-to-b from-[#163E91] to-[#116C86]"}>
      <Container>
        <div className={"flex items-center w-full justify-between"}>
          <span className="text-4xl font-bold text-white">КудаПоеду</span>
          <Image
            className="max-md:hidden"
            src="/images/test-header-banner.png"
            alt="header advertisement banner"
            height={200}
            width={500}
          />
        </div>

        <div className={"flex w-full justify-between"}>
          <div className={"flex gap-5"}>
            {topics.map((topic) => (
              <Topic
                key={topic.id}
                title={topic.title}
                href={topic.href}
                categories={topic.categories}
              />
            ))}
          </div>

          <button>
            <Image
              src={"/icons/search.svg"}
              width={25}
              height={25}
              alt={"search"}
            />
          </button>
        </div>
      </Container>
    </header>
  );
}
