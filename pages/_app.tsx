import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import React from "react";
import SEO from "seo.config";

import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />

      <main
        className={`${inter.variable} flex items-center justify-center w-full`}
      >
        <div className="font-sans max-w-[78rem]">
          <Component {...pageProps} />
        </div>
      </main>
      <Analytics />
    </>
  );
};

export default App;
