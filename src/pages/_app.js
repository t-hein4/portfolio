import "@/styles/globals.css";
import { Layout } from "@/components/layout";
import { Nunito, Quicksand } from "@next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
export default function App({ Component, pageProps }) {
  return (
    <div className={`${quicksand.variable} ${nunito.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
