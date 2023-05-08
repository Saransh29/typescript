import { NewsArticle, NewsResponse } from "@/models/NewsArticles";
import { GetServerSideProps } from "next";

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[];
}

export const getServerSideProps: GetServerSideProps<
  BreakingNewsPageProps
> = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=063706c547ca4db9aad26b4a4cdf2332"
  );
  const newsresponse: NewsResponse = await response.json();
  return {
    props: {
      newsArticles: newsresponse.articles,
    },
  };
};

export default function Home({ newsArticles }: BreakingNewsPageProps) {
  console.log(newsArticles);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Testing</div>
      {/* {newsArticles.map((article) => (
        <div key={article.title}>{article.title}</div>
      ))} */}
    </main>
  );
}
