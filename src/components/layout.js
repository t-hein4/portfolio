import { Footer } from "./footer";
import { Nav } from "./nav";
import { PageTransition } from "./page-transition";

export function Layout({ children }) {
  return (
    <>
      <Nav />
      <PageTransition>
        {children}
        <Footer />
      </PageTransition>
    </>
  );
}
