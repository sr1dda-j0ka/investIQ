const API_KEY=process.env.FINNHUB_API_KEY

export async function getLatestNews(){
    const res=await fetch(
        `https://finnhub.io/api/v1/news?category=biz&token=${API_KEY}`,
        {
            next: {revalidate: 300}
        }
    );
    
    if(!res.ok){
        throw new Error("failed to fetch news");
    }

    const data=await res.json();
    return data.slice(0,8);
}
