import Image from "next/image";
import Header from "@/components/shared/Header";
import Category from "@/components/ui/Category";
import NewsCard from "@/components/shared/NewsCard";
import Title from "@/components/ui/Title";
import NewsPost from "@/components/shared/NewsPost";
import RightPanel from "@/components/shared/RightPanel";
import Container from "@/components/shared/Container";

export const mainNews = [
  {
    id: 1,
    title:
      "В Японии открыли новый скоростной поезд для туристических маршрутов",
    category: "Путешествия",
    date: "2026-03-10T09:15:00Z",
    image: "/images/test-image.jpg",
  },
  {
    id: 2,
    title:
      "Исландия стала самым популярным направлением для зимних путешествий",
    category: "Путешествия",
    date: "2026-03-09T14:30:00Z",
    image: "/images/test-image.jpg",
  },
  {
    id: 3,
    title:
      "В Италии запустили новый туристический маршрут по старинным деревням Тосканы",
    category: "Путешествия",
    date: "2026-03-08T11:45:00Z",
    image: "/images/test-image.jpg",
  },
  {
    id: 4,
    title: "Таиланд упростил визовые правила для путешественников из Европы",
    category: "Путешествия",
    date: "2026-03-07T18:20:00Z",
    image: "/images/test-image.jpg",
  },
  {
    id: 5,
    title:
      "В Норвегии открылся панорамный маршрут для наблюдения за северным сиянием",
    category: "Путешествия",
    date: "2026-03-06T20:10:00Z",
    image: "/images/test-image.jpg",
  },
  {
    id: 6,
    title: "В Перу увеличилось число туристов, посещающих Мачу-Пикчу",
    category: "Путешествия",
    date: "2026-03-05T13:05:00Z",
    image: "/images/test-image.jpg",
  },
];

export const trendNews = [
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

export default function Home() {
  const leftNews = mainNews.slice(0, 3);
  const rightNews = mainNews.slice(3, 6);

  return (
    <Container>
      <div className="grid grid-cols-2 max-[1250px]:grid-cols-1 gap-4">
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          {leftNews.map((item, index) => {
            return (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                date={item.date}
                image={item.image}
                size={index === 0 ? "lg" : "sm"}
                className={index === 0 ? "col-span-2" : ""}
              />
            );
          })}
        </div>
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          {rightNews.map((item, index) => {
            return (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                date={item.date}
                image={item.image}
                size={index === 2 ? "lg" : "sm"}
                className={index === 2 ? "col-span-2" : ""}
              />
            );
          })}
        </div>
      </div>
      <div className="flex gap-10 max-[1250px]:flex-col">
        <div className="space-y-10">
          <Title>В тренде</Title>

          <div className="grid md:grid-cols-2 gap-3">
            <NewsPost
              key={trendNews[0].id}
              id={trendNews[0].id}
              description={trendNews[0].description}
              image={trendNews[0].image}
              title={trendNews[0].title}
              date={trendNews[0].date}
              views={trendNews[0].views}
            />

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-3">
                {trendNews.slice(0, 2).map((item) => (
                  <NewsPost
                    key={item.id}
                    id={item.id}
                    description={item.description}
                    image={item.image}
                    title={item.title}
                    date={item.date}
                    views={item.views}
                  />
                ))}
              </div>

              <NewsPost
                type="row"
                key={trendNews[3].id}
                id={trendNews[3].id}
                description={trendNews[3].description}
                image={trendNews[3].image}
                title={trendNews[3].title}
                date={trendNews[3].date}
                views={trendNews[3].views}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-3 grid-rows-3">
              {trendNews.slice(0, 3).map((item) => (
                <NewsPost
                  type="row"
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  views={item.views}
                />
              ))}
            </div>

            <NewsPost
              key={trendNews[0].id}
              id={trendNews[0].id}
              description={trendNews[0].description}
              image={trendNews[0].image}
              title={trendNews[0].title}
              date={trendNews[0].date}
              views={trendNews[0].views}
            />
          </div>

          <Title>Последние публикации</Title>

          <div className="grid grid-cols-2 gap-3">
            {trendNews.map((item) => (
              <NewsPost
                key={item.id}
                id={item.id}
                description={item.description}
                image={item.image}
                title={item.title}
                date={item.date}
                views={item.views}
              />
            ))}
          </div>
        </div>

        <RightPanel />
      </div>
    </Container>
  );
}
