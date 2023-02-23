import { useRouter } from "next/router";
export function Footer() {
  const router = useRouter();

  return (
    router.asPath !== "/studio" && (
      <footer className="min-h-[450px] py-32 px-4 shadow-md ring-1 ring-neutral-200/60"></footer>
    )
  );
}

function FooterLink({ src, children }) {
  return src ? (
    <a
      className="col-span-11 justify-self-end font-primary tracking-wide text-sky-800 hover:text-sky-500 hover:underline"
      href={src}
    >
      {children}
    </a>
  ) : (
    <p className="col-span-11 justify-self-end font-primary tracking-wide">
      {children}
    </p>
  );
}
