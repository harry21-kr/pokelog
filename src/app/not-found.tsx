import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-w-screen min-h-screen">
      <Image
        src="/oh.webp"
        width={300}
        height={300}
        alt=""
        className="brightness-75"
      />
      <h2>페이지를 찾을수가 없구나!</h2>
      <Link
        href="/"
        className="bg-white text-black px-2 py-1.5 rounded hover:brightness-75 transition"
      >
        홈페이지로 돌아가렴!
      </Link>
    </div>
  );
};

export default NotFound;
