import { trendNews } from "@/app/page";
import Title from "../ui/Title";
import NewsPost from "./NewsPost";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Link from "next/link";
import Container from "./Container";

const categories = [
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
    title: "Маршруты",
    href: "/topic/ways",
  },
  {
    id: 4,
    title: "Контакты",
    href: "/contacts",
  },
];

export default function Footer() {
  const popular = trendNews.slice(0, 3);
  const choice = trendNews.slice(3, 6);

  return (
    <footer className="text-white">
      <header className="bg-[#222]">
        <Container className="grid min-[1100px]:grid-cols-[1.25fr_1.25fr_1fr] items-center gap-10  text-white">
          <div>
            <Title>Популярное</Title>

            {popular.map((item) => (
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
          <div>
            <Title>Выбор редакции</Title>

            {choice.map((item) => (
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

          <div className="bg-[#111] border-[#888] border space-y-3 text-center rounded-sm p-5">
            <h1 className="font-semibold text-xl">Подпишитесь на новости</h1>
            <h3 className="text-[#999] text-sm">
              Получайте новейшие новости о путешествиях, новых маршрутах и
              горящих турах
            </h3>

            <Input placeholder="Адрес электронной почты" />

            <Button>Подписаться</Button>
          </div>
        </Container>
      </header>

      <main className="py-16 flex gap-5 items-center bg-[#111] flex-col justify-center">
        <h1 className="text-5xl font-semibold">КудаПоеду</h1>

        <div className="flex gap-3">
          {Array.from({ length: 5 }, (_, index: number) => (
            <button
              key={index}
              className="aspect-square rounded-full bg-white h-8"
            />
          ))}
        </div>

        <div className="flex gap-3 text-white/85 font-medium text-lg">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              {category.title}
            </Link>
          ))}
        </div>

        <div className="text-white/50 text-sm">
          © 2026 ThemeSphere. Все права защищены
        </div>
      </main>
    </footer>
  );
}
