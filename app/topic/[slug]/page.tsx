import { mainNews, trendNews } from "@/app/page";
import Container from "@/components/shared/Container";
import { topics } from "@/components/shared/Header";
import NewsCard from "@/components/shared/NewsCard";
import NewsPost from "@/components/shared/NewsPost";
import RightPanel from "@/components/shared/RightPanel";
import TopicTitle from "@/components/ui/TopicTitle";

export default async function TopicPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { slug } = await params;

  const foundTopic = topics.find((topic) => topic.slug === slug);

  const currentMainNews = mainNews
    .filter((item) => item.category === foundTopic?.title)
    .slice(0, 3);

  const currentTrendNews = trendNews;

  if (!currentMainNews?.length) return <div>Loading...</div>;

  return (
    <Container>
      <header className="text-[#A6A6A6] font-medium text-sm">
        Главное » {foundTopic?.title}
      </header>

      <main>
        <div className="grid md:grid-cols-[2.5fr_1fr] max-md:grid-rows-[2fr_1fr] gap-3">
          {currentMainNews.map((item, index: number) => (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              date={item.date}
              image={item.image}
              size={index === 0 ? "lg" : "sm"}
              className={index === 0 ? "md:row-span-2 max-md:col-span-2" : ""}
            />
          ))}
        </div>
      </main>

      <main className="flex gap-10 max-[1250px]:flex-col">
        <div>
          <header>
            <TopicTitle>{foundTopic?.title}</TopicTitle>
          </header>

          <main className="grid md:grid-cols-2 gap-3">
            {currentTrendNews.map((item) => (
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
          </main>
        </div>

        <RightPanel />
      </main>
    </Container>
  );
}
