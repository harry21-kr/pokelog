import PokemonList from "@/components/PokemonList/PokemonList";
import { Suspense } from "react";
import Loading from "./loading";

const HomePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PokemonList />
    </Suspense>
  );
};

export default HomePage;
