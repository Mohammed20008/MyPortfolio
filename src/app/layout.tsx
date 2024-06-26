import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import ActiveSectionProvider from "@/components/ActiveSectionProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed | Personal portfolio",
  description: "Software Developer and Logo Designer",
  keywords: "Software Developer, Logo Designer, Mohammed, Portfolio",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" w-screen scroll-smooth">
      <body className={`${inter.className} bg-gray-100`}>
        <ActiveSectionProvider>
          <main className="mx-auto flex min-h-screen w-screen flex-col items-center justify-center md:max-w-2xl">
            <Header />
            <div className="absolute -z-20 h-[500px] rounded-full bg-gradient-to-r from-blue-400 to-red-400 opacity-20 blur-xl" />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </main>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
