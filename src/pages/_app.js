import "@/styles/globals.css";
import { Layout } from "@/components/layout";
import { Nunito, Quicksand } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
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
  );
}
