import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hexagon.svg" type="image/svg+xml" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <NavBar />
            <AnimatePresence mode="wait">
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
