import Link from "next/link";
import { SearchStock } from "@/types/stock";

type SearchResultProps = {
  stock: SearchStock;
};

export default function SearchResult({ stock }: SearchResultProps) {
  return (
    <Link
      href={`/stock/${stock.symbol}`}
      className="block rounded-xl border border-gray-200 bg-white p-4 transition hover:bg-gray-50 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-gray-900">
            {stock.description}
          </h2>

          <p className="text-sm text-gray-500">
            {stock.symbol}
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {stock.type}
        </span>
      </div>
    </Link>
  );
}