import Image from "next/image";
import Title from "../ui/Title";
import NewsPost from "./NewsPost";

const trendNews = [
  {
    id: 7,
    title: "Содержание новости о путешествиях: Лучшие маршруты весной 2026",
    date: "2026-03-10T08:00:00Z",
    image: "/images/test-image.jpg",
    views: 4123,
    description:
      "Откройте для себя самые живописные места для весенних путешествий.",
  },
  {
    id: 8,
    title: "Как подготовиться к длительному путешествию: советы экспертов",
    date: "2026-02-25T12:30:00Z",
    image: "/images/test-image.jpg",
    views: 3875,
    description:
      "Узнайте, что взять с собой, чтобы поездка прошла без проблем.",
  },
  {
    id: 9,
    title: "Необычные места для отдыха в Европе, которые стоит посетить",
    date: "2026-02-15T09:20:00Z",
    image: "/images/test-image.jpg",
    views: 2987,
    description: "Забытые уголки Европы, которые удивят даже бывалых туристов.",
  },
  {
    id: 10,
    title: "Лучшие пляжи Азии: куда поехать этим летом",
    date: "2026-01-30T14:00:00Z",
    image: "/images/test-image.jpg",
    views: 5124,
    description: "Топовые пляжные направления для незабываемого отпуска.",
  },
  {
    id: 11,
    title: "Как путешествовать бюджетно и комфортно: лайфхаки",
    date: "2026-01-20T11:45:00Z",
    image: "/images/test-image.jpg",
    views: 2745,
    description:
      "Полезные советы для тех, кто хочет экономить, не теряя качества.",
  },
  {
    id: 12,
    title: "Лучшие горные маршруты для любителей активного отдыха",
    date: "2026-01-10T16:10:00Z",
    image: "/images/test-image.jpg",
    views: 1987,
    description: "Маршруты разной сложности для всех уровней подготовки.",
  },
  {
    id: 13,
    title: "Самые красивые города мира для романтического путешествия",
    date: "2025-12-28T10:00:00Z",
    image: "/images/test-image.jpg",
    views: 3210,
    description: "Идеальные места для пар, чтобы провести незабываемое время.",
  },
  {
    id: 14,
    title: "Путешествие в Арктику: подготовка и особенности маршрута",
    date: "2025-12-15T09:00:00Z",
    image: "/images/test-image.jpg",
    views: 1450,
    description:
      "Экстремальное путешествие для настоящих искателей приключений.",
  },
];

export default function RightPanel() {
  return (
    <div className="min-[1250px]:max-w-90 w-full space-y-5">
      <Image
        className="w-full"
        src="/images/test-right-top-banner.png"
        alt="right-top advertisement banner"
        height={200}
        width={200}
      />

      <Title>В тренде</Title>
      <div>
        {trendNews.map((item) => (
          <NewsPost
            key={item.id}
            id={item.id}
            description={item.description}
            image={item.image}
            title={item.title}
            date={item.date}
            views={item.views}
            type="row"
          />
        ))}
      </div>

      <Title>Обзоры</Title>
      <div>
        {trendNews.map((item) => (
          <NewsPost
            key={item.id}
            id={item.id}
            description={item.description}
            image={item.image}
            title={item.title}
            date={item.date}
            views={item.views}
            type="row"
          />
        ))}
      </div>

      <Title>Оставайтесь на связи</Title>
      <div className="grid grid-cols-2 gap-1">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="bg-[#D9D9D9] rounded-sm h-9.25" />
        ))}
      </div>

      <Image
        className="w-full rounded-xl"
        src="/images/test-right-bottom-banner.png"
        alt="right-bottom advertisement banner"
        height={600}
        width={200}
      />
    </div>
  );
}
