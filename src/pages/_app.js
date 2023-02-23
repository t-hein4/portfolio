import "@/styles/globals.css";
import { Layout } from "@/components/layout";
import { Nunito, Quicksand } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";
import favicon from "../../public/favicon.svg";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href={favicon.src} />
      </Head>
      <div className={`${quicksand.variable} ${nunito.variable}`}>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Layout key={router.asPath}>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </div>
    </>
  );
}
