"use client";

import { useParams, useRouter } from "next/navigation";

const PokemonDetailNav: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();

  const handleLinkNextPage = () => {
    if (id) {
      router.push(`/${Number(id) + 1}`);
    }
  };

  const handleLinkPrevPage = () => {
    if (!!(Number(id) - 1)) {
      router.push(`/${Number(id) - 1}`);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <nav className="absolute left-0 top-0 w-full flex justify-between px-12 pt-4 md:pt-8">
      <button
        onClick={handleLinkPrevPage}
        className="bg-white text-black px-2 py-1.5 text-sm sm:text-base rounded hover:brightness-75 transition"
      >
        이전 포켓몬
      </button>
      <button
        onClick={handleGoBack}
        className="bg-white text-black px-2 py-1.5 text-sm sm:text-base rounded hover:brightness-75 transition"
      >
        돌아가기
      </button>
      <button
        onClick={handleLinkNextPage}
        className="bg-white text-black px-2 py-1.5 text-sm sm:text-base rounded hover:brightness-75 transition"
      >
        다음 포켓몬
      </button>
    </nav>
  );
};

export default PokemonDetailNav;
