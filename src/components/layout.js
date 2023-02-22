import { Footer } from "./footer";
import { Nav } from "./nav";
import { PageTransition } from "./page-transition";

export function Layout({ children }) {
  return (
    <>
      <Nav />
      <PageTransition>
        <div className="my-16 mx-auto max-w-6xl">{children}</div>
        <Footer />
      </PageTransition>
    </>
  );
}
