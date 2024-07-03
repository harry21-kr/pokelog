import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 h-24 border-b-[#f0f0f0] border-b w-screen text-white bg-[#EE1515] flex justify-center z-[999]">
      <div className="max-w-[1224px] w-full flex items-center px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/poketball.png"
            width={40}
            height={40}
            alt=""
            className="animate-bounce"
          />
          <h1 className="font-bold text-2xl hover:text-[#F7D02C] transition">
            포켓위키
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
