import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "@/components/layouts/header/Header";
import { useRouter } from "next/router";
import { BottomNavigation } from "@/components/layouts/bottomNavigation/BottomNavigation";

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
      <body className="font-kersor relative">
        <Header />
        
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
