const API_KEY=process.env.FINNHUB_API_KEY

export async function searchStock(query: string){
    const res=await fetch(
        `https://finnhub.io/api/v1/search?q=${query}&token=${API_KEY}`,
        {
            next: {revalidate: 300}
        }
    );
    
    if(!res.ok){
        throw new Error("failed to search stocks");
    }

    const data=await res.json();
    return data.result;
}
