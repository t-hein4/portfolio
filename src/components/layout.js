import clsx from "clsx";
import { useRouter } from "next/router";
import { Footer } from "./footer";
import { Nav } from "./nav";
import { PageTransition } from "./page-transition";

export function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Nav />
      <PageTransition>
        <div
          className={clsx(
            "my-16 mx-auto",
            router.asPath !== "/studio" && "max-w-6xl"
          )}
        >
          {children}
        </div>
        <Footer />
      </PageTransition>
    </>
  );
}
