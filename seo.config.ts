import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Juan Almanza",
  titleTemplate: "%s | Juan Almanza",
  themeColor: "#ffffff",
  description: "The Juan Almanza's home page",
  canonical: "https://www.scidroid.co/",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.scidroid.co/",
    title: "Juan Almanza",
    description: "The Juan Almanza's home page",
    site_name: "Juan Almanza",
    defaultImageHeight: 1200,
    defaultImageWidth: 1200,
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 600,
        alt: "Juan Almanza",
      },
    ],
  },
  twitter: {
    handle: "@scidroid",
    site: "@scidroid",
    cardType: "summary_large_image",
  },
};

export default config;
