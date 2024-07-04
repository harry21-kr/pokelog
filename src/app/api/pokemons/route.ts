import { getPokemonInfoList } from "@/utils/api/api";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";
    const offset = ((Number(page) - 1) * 24).toString();
    const pokemonInfoList = await getPokemonInfoList(offset);
    return NextResponse.json(pokemonInfoList);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};
