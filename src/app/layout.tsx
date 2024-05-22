import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import ActiveSectionProvider from "@/components/ActiveSectionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed | Personal portfolio",
  description: "Software Developer and Logo Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={`${inter.className} bg-gray-100`}>
        <main className=" mx-auto flex min-h-screen w-full max-w-80 flex-col items-center sm:max-w-4xl md:max-w-2xl">
          <div className=" absolute -z-20 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-400 to-red-400 opacity-20 blur-xl" />
          <ActiveSectionProvider>
            <Header />

            {children}
            <Toaster position="top-right" />
          </ActiveSectionProvider>
        </main>
      </body>
    </html>
  );
}
