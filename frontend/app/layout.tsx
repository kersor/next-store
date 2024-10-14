import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/shared/Header";

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
        <main className="h-full relative">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
