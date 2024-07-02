import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-w-screen min-h-screen">
      <Image src="/loading.webp" alt="" width={200} height={200} />
    </div>
  );
};

export default Loading;
