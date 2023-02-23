import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { clsx } from "clsx";
import Image from "next/image";
import menuIcon from "../../public/icons/menu.svg";
import { useScrollListener } from "@/hooks/useScrollListener";
export function Nav() {
  const router = useRouter();
  const { scrollY } = useScrollListener();

  return (
    router.asPath !== "/studio" && (
      <nav
        className={clsx(
          "sticky top-0 z-50 h-14 bg-white/80 p-4 backdrop-blur-xl",
          scrollY > 0 && "shadow-lg ring-1 ring-neutral-200"
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <p className="font-primary font-extrabold tracking-wide text-blue-800 drop-shadow">
            <Link href="/">Thein Hein</Link>
          </p>
          <MobileMenu />
          <DesktopMenu />
        </div>
      </nav>
    )
  );
}

function DesktopMenu() {
  const router = useRouter();
  return (
    <div className="hidden tracking-wide md:flex md:gap-x-6">
      <Link
        href="/about-me"
        className={clsx(
          "font-primary text-sm",
          router.asPath === "/about-me" &&
            "text-blue-800 underline decoration-2 underline-offset-4"
        )}
      >
        About me
      </Link>
      <Link
        href="/"
        className={clsx(
          "font-primary text-sm",
          router.asPath === "/" &&
            "text-blue-800 underline decoration-2 underline-offset-4"
        )}
      >
        My projects
      </Link>
    </div>
  );
}

function MobileMenu() {
  const router = useRouter();
  return (
    <div className="absolute top-0 right-2 mt-4 md:hidden">
      <Menu>
        <Menu.Button className="mb-24">
          <Image src={menuIcon} alt="Menu icon" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 bottom-0 flex w-56 flex-col space-y-1 rounded-md bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              <Link
                href="/about-me"
                className={clsx(
                  "cursor-pointer rounded-md px-2 py-1 text-right text-sm text-neutral-900 transition-all duration-150 ease-out hover:bg-sky-700 hover:text-white",
                  router.asPath === "/about-me" && "bg-sky-700 text-white"
                )}
              >
                About me
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="/"
                className={clsx(
                  "cursor-pointer rounded-md px-2 py-1 text-right text-sm text-neutral-900 transition-all duration-150 ease-out hover:bg-sky-700 hover:text-white",
                  router.asPath === "/" && "bg-sky-700 text-white"
                )}
              >
                My projects
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
