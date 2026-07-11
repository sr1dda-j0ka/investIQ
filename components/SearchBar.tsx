"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { SearchStock } from "@/types/stock";
import SearchResults from "./SearchResults";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchStock[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);

      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();

      setResults(data);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative">
        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search stocks, ETFs, or tickers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-blue-200 bg-white py-4 pl-14 pr-5 text-lg shadow-md outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>
      {loading && <p className="mt-4 text-gray-500">Searching...</p>}

      <SearchResults results={results} />
    </div>
  );
}
