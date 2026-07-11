import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import { NewsArticle } from "@/types/news";
import { getLatestNews } from "@/lib/news";

export default async function Home(){

    const news=await getLatestNews();

    return(
        <>
        <Navbar/>

        <main className="mx-auto max-w-7xl p-8">
            <h1 className="mb-6 text-3xl font-bold">
            Latest Market News
            </h1>
            <div className="grid gap-6">
            {news.map((article: NewsArticle) => (
                <NewsCard
                key={article.url}
                title={article.headline}
                description={article.summary}
                image={article.image}
                source={article.source}
                publishedAt={article.datetime}
                url={article.url}
                />
            ))}
            </div>
        </main>
        </>
    )   
}
