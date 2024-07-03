import { getPokemonById } from "@/utils/api/api";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const pokemonData = getPokemonById(id);

    return NextResponse.json(pokemonData);
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};
