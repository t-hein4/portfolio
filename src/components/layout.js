import { Footer } from "./footer";
import { Nav } from "./nav";

export function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
