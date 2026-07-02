import Link from "next/link";
import { Search, UserCircle2, BarChart3 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/home" className="flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-blue-600" />
          <span className="text-xl font-bold tracking-tight text-gray-900">
            MarketMind AI
          </span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link
            href="/explore"
            className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600"
          >
            <Search size={20} />
            <span className="font-medium">Explore</span>
          </Link>

          <Link
            href="/profile"
            className="text-gray-600 transition-colors hover:text-blue-600"
          >
            <UserCircle2 size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;