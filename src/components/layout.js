import { Footer } from "./footer";
import { Nav } from "./nav";

export function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="my-16 mx-auto max-w-6xl">{children}</div>
      <Footer />
    </>
  );
}
