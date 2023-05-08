import { NewsResponse, NewsArticle } from "@/models/NewsArticles";
async function getData() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const newsResponse: NewsResponse = await res.json();
  return {
    newsArticles: newsResponse.articles,
  };
}

export default async function Page() {
  const { newsArticles } = await getData();

  return (
    <main>
      {newsArticles.map((article: NewsArticle) => (
        <div className="p-2 " key={article.title}>
          <p>{article.title}</p>
          <a className="p-2" href={article.url}>
            {article.url}
          </a>
        </div>
      ))}
    </main>
  );
}
