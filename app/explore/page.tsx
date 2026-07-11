import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

export default function Explore(){
    return(
        <>
        <Navbar/>
        <main className="mx-auto max-w-7xl p-8">
        <h1 className="mb-6 text-3xl font-bold">
            Search Stocks
        </h1>
        <SearchBar/>
        </main>
        </>
    )
}