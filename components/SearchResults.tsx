import SearchResult from "./SearchResult";
import { SearchStock } from "@/types/stock";

type SearchResultsProps = {
  results: SearchStock[];
};

export default function SearchResults({
  results,
}: SearchResultsProps) {
  if (results.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 space-y-3">
      {results.map((stock) => (
        <SearchResult
          key={`${stock.symbol}-${stock.description}`}
          stock={stock}
        />
      ))}
    </div>
  );
}