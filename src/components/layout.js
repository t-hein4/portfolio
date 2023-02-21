import { Nav } from "./nav";

export function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
