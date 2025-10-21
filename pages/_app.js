import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoadingIcon } from "../public/Icons/LoadingIcon";
const ppHatton = localFont({
  // src: "../public/fonts/hatton/PPHatton-Medium.otf",
  src: [
    {
      path: "../public/fonts/hatton/PPHatton-Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/hatton/PPHatton-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pphatton",
  display: "swap",
});
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi/Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  const getPageTitle = () => {
    if (loading) return "Ersa Khorsandi";
    const pathSegments = router.asPath.split("/").filter(Boolean);
    console.log("Path Segments:", pathSegments);

    if (pathSegments.length === 0) return "Ersa Khorsandi";

    const lastSegment = pathSegments[pathSegments.length - 1];

    return `${decodeURIComponent(lastSegment)}`;
  };

  return loading ? (
    <LoadingIcon />
  ) : (
    <>
      <Head>
        <title>{getPageTitle()}</title>
        <link rel="icon" type="image/svg+xml" href="/Logo.svg" />
      </Head>
      <main className={`${ppHatton.variable} ${satoshi.variable}`}>
        {getLayout(<Component {...pageProps} />)} <SpeedInsights />
      </main>
    </>
  );
}
