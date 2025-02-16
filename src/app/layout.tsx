import Providers from "@/components/Provider/Providers";
import Header from "@/components/common/Header/Header";
import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";

const IBM = IBM_Plex_Sans_KR({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "포켓위키",
  description: "151종의 포켓몬의 정보를 알아보자",
  creator: "박원빈",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={IBM.className}>
        <Providers>
          <Header />
          <main className="flex flex-col items-center px-8 md:px-12 min-h-screen bg-[#191B1D] text-white">
            <div className="w-full max-w-[1224px]">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
