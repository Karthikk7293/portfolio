"use client";
import Header from "@/components/header/Header";
import "./globals.css";
import { Bangers, Bebas_Neue, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import clsx from "clsx";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: `IT'S ME KARTHIK  || PRTFOLIO `,
  description: "Pesonal portfolio of karthik ",
};
export const bangers = Bangers({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bangers",
});
export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

export default function RootLayout({ children }) {
  //initalising aos animation
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 700,
    });
  }, []);
  return (
    <html lang="en">
      <body
        className={`${clsx(
          bangers.variable,
          bebas.variable,
          poppins.className
        )} text-white bg-default-bg w-full h-full min-h-screen flex  flex-col justify-between px-[100px] `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
