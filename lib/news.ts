const API_KEY=process.env.ALPHA_VANTAGE_API_KEY

export async function getLatestNews(){
    const res=await fetch(
        `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`,
        {
            next: {revalidate: 300}
        }
    );
    
    if(!res.ok){
        throw new Error("failed to fetch news");
    }

    const data=await res.json();
    return data.feed.slice(0,8)
}
