import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/shared/header/Header";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KERSOR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <main className="h-full w-full relative text-[14px]">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
