import { getPokemonDetailInfoById } from "@/utils/api/api";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const pokemon = await getPokemonDetailInfoById(id);
  return {
    title: `포켓위키 - ${pokemon.korean_name}`,
    description: pokemon.korean_name,
  };
}

const DetailPageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center pt-36 pb-12 md:py-0">
      {children}
    </div>
  );
};

export default DetailPageLayout;
