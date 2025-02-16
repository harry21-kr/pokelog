import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

const chipVariant = cva("text-white px-2.5 py-1 rounded-full text-center", {
  variants: {
    type: {
      normal: "bg-[#A8A77A]",
      fire: "bg-[#EE8130]",
      water: "bg-[#6390F0]",
      electric: "bg-[#F7D02C]",
      grass: "bg-[#7AC74C]",
      ice: "bg-[#96D9D6]",
      fighting: "bg-[#C22E28]",
      poison: "bg-[#A33EA1]",
      ground: "bg-[#E2BF65]",
      flying: "bg-[#A98FF3]",
      psychic: "bg-[#F95587]",
      bug: "bg-[#A6B91A]",
      rock: "bg-[#B6A136]",
      ghost: "bg-[#735797]",
      dragon: "bg-[#6F35FC]",
      dark: "bg-[#705746]",
      steel: "bg-[#B7B7CE]",
      fairy: "bg-[#D685AD]",
    },
  },
  defaultVariants: {
    type: "normal",
  },
});

type ChipProps = {} & VariantProps<typeof chipVariant>;

const Chip: React.FC<PropsWithChildren<ChipProps>> = ({ children, type }) => {
  return <div className={chipVariant({ type })}>{children}</div>;
};

export default Chip;
