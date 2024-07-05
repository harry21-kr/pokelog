import { getPokemonDetailInfoById } from "@/utils/api/api";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const pokemonDetailInfo = await getPokemonDetailInfoById(id);
    return NextResponse.json(pokemonDetailInfo);
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};
