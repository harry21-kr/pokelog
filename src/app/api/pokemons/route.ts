import { getPokemonList } from "@/utils/api/api";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const allPokemonData = await getPokemonList();
    return NextResponse.json(allPokemonData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};
