"use client";
import "./globals.css";
import { Bangers, Bebas_Neue, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import clsx from "clsx";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header2 from "@/components/header/Header2";
import Head from "next/head";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <Head>
        <title>IT'S ME KARTHIK || PRTFOLIO </title>
        <meta charset="UTF-8" />
        <meta name="description" content="Pesonal portfolio of karthik" />
        <meta name="keywords" content="JavaScript,Typescript" />
        <meta name="author" content="KARTHIK K" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={`${clsx(
          bangers.variable,
          bebas.variable,
          poppins.className
        )} text-white bg-default-bg w-full h-full min-h-screen flex  flex-col justify-between lg:px-[100px] `}
      >
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>

        <Header2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
