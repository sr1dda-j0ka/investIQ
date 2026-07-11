import { NextRequest, NextResponse } from "next/server";
import { searchStock } from "@/lib/stock";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");

  if (!query) {
    return NextResponse.json([]);
  }

  try {
    const stocks = await searchStock(query);
    return NextResponse.json(stocks);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch stocks" },
      { status: 500 }
    );
  }
}