import { trendNews } from "@/app/page";
import Container from "@/components/shared/Container";
import NewsPost from "@/components/shared/NewsPost";
import RightPanel from "@/components/shared/RightPanel";
import Category from "@/components/ui/Category";
import Comment from "@/components/ui/Comment";
import ParagraphedText from "@/components/ui/ParagraphedText";
import Title from "@/components/ui/Title";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";

const article = {
  id: 1,
  category: "Путешествия",
  title: "Париж вновь занял первое место в рейтинге по количеству туристов",
  createdAt: new Date("2026-03-10"),
  updatedAt: new Date("2026-03-11"),
  views: 5000,
  mainPicture: {
    src: "/images/test-image.jpg",
    description: "Тестовое описание",
  },
  mainText: `
  Париж в очередной раз подтвердил статус самой популярной туристической локации планеты. По данным свежего отчёта Euromonitor International, французская столица возглавила мировой рейтинг по числу международных прибытий в 2025 году — и это уже шестой год подряд, когда город удерживает верхнюю строчку престижного списка.

В 2025 году Париж посетили свыше 85 млн туристов — на 7,5% больше, чем годом ранее. Успех обусловлен целым комплексом факторов.

Развитая инфраструктура города постоянно совершенствуется: модернизируется транспортная сеть, расширяется гостиничный фонд, повышается качество сервиса для путешественников.

Неизменной притягательностью обладают и культурные сокровища Парижа. Знаковые достопримечательности — Эйфелева башня, Лувр, собор Нотр‑Дам — десятилетиями остаются главными магнитами для гостей со всего мира.

Вкупе с богатым календарем событий — такими как Неделя моды и фестиваль света — это создаёт мощный стимул для путешествий.

Укрепила позиции города и репутация гастрономической столицы: мишленовские рестораны, уютные уличные кафе и колоритные рынки неизменно привлекают гурманов.
`,
  paragraphs: [
    {
      title: "Притягательность культурного наследия",
      picture: {
        src: "/images/test-image.jpg",
        description: "Тестовое описание у картинки заголовка",
      },
      text: `
      Париж в очередной раз подтвердил статус самой популярной туристической локации планеты. По данным свежего отчёта Euromonitor International, французская столица возглавила мировой рейтинг по числу международных прибытий в 2025 году — и это уже шестой год подряд, когда город удерживает верхнюю строчку престижного списка.

В 2025 году Париж посетили свыше 85 млн туристов — на 7,5% больше, чем годом ранее.

Успех обусловлен целым комплексом факторов.

Развитая инфраструктура города постоянно совершенствуется: модернизируется транспортная сеть, расширяется гостиничный фонд, повышается качество сервиса для путешественников.
`,
    },
  ],
};

export interface IComment {
  id: number;
  name: string;
  createdAt: Date;
  text: string;
  comments?: IComment[];
}

const comments = [
  {
    id: 1,
    name: "Пользователь",
    createdAt: new Date("2026-03-10"),
    text: "Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. ",
    comments: [
      {
        id: 2,
        name: "Пользователь",
        createdAt: new Date("2026-03-10"),
        text: "Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. ",
      },
    ],
  },
  {
    id: 3,
    name: "Пользователь",
    createdAt: new Date("2026-03-10"),
    text: "Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. ",
    comments: [
      {
        id: 4,
        name: "Пользователь",
        createdAt: new Date("2026-03-10"),
        text: "Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. Длинный комментарий. ",
      },
    ],
  },
];

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return (
    <Container className="flex gap-10 max-[1250px]:flex-col">
      <div className="space-y-5">
        <header className="space-y-3">
          <div className="text-[#A6A6A6] font-semibold text-sm">
            Главное » {article.category} » {article.title}
          </div>

          <Category>{article.category}</Category>

          <h1 className="text-3xl font-semibold">{article.title}</h1>

          <h3 className="text-black/50 flex w-full justify-between">
            <span>
              {formatDate(article.createdAt, true)} — обновлено:{" "}
              {formatDate(article.updatedAt, true)}. 15:24
            </span>

            <span>{article.views.toLocaleString("ru-RU")} просмотров</span>
          </h3>
        </header>

        <main className="space-y-20">
          <div>
            {article.mainPicture && (
              <div className="space-y-3">
                <Image
                  src={article.mainPicture.src}
                  alt={"article main"}
                  width={2000}
                  height={2000}
                />

                <div className="text-center text-black/50 text-sm ">
                  {article.mainPicture.description}
                </div>
              </div>
            )}

            <ParagraphedText>
              {article.mainText.replace(/\u00A0/g, " ")}
            </ParagraphedText>
          </div>

          <div>
            {article.paragraphs.map((paragraph, index) => (
              <div key={index} className="space-y-3">
                <h1 className="text-2xl font-semibold wrap-break-word">
                  {paragraph.title}
                </h1>

                {paragraph.picture && (
                  <div className="space-y-3">
                    <Image
                      src={paragraph.picture.src}
                      alt={"article main"}
                      width={2000}
                      height={2000}
                    />

                    <div className="text-center text-black/50 text-sm ">
                      {paragraph.picture.description}
                    </div>
                  </div>
                )}
                <ParagraphedText>
                  {paragraph.text.replace(/\u00A0/g, " ")}
                </ParagraphedText>
              </div>
            ))}
          </div>
        </main>

        <footer className="space-y-5">
          <div className="flex w-full items-center justify-between border-b border-[#888] pb-3 ">
            <span className="text-lg font-semibold">Поделиться</span>
            <span className="flex gap-3">
              {" "}
              {Array.from({ length: 5 }, (_, index: number) => (
                <button
                  key={index}
                  className="aspect-square rounded-full bg-[#D9D9D9] h-8"
                />
              ))}
            </span>
          </div>

          <div>
            <Title>Похожие посты</Title>

            <div className="grid max-md:grid-cols-2 grid-cols-4 gap-3">
              {trendNews.slice(0, 8).map((item) => (
                <NewsPost
                  size="sm"
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

          <div>
            <Title>{comments.length} комментариев</Title>

            <div className="space-y-3">
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  name={comment.name}
                  createdAt={comment.createdAt}
                  text={comment.text}
                  comments={comment.comments}
                />
              ))}
            </div>
          </div>
        </footer>
      </div>

      <RightPanel />
    </Container>
  );
}
