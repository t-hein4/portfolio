import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { clsx } from "clsx";
import Image from "next/image";
import menuIcon from "../../public/icons/menu.svg";
export function Nav() {
  return (
    <nav className="relative flex justify-end p-4">
      <MobileMenu />
      <DesktopMenu />
    </nav>
  );
}

function DesktopMenu() {
  const router = useRouter();
  return (
    <div className="hidden w-full justify-center gap-8 tracking-wide md:flex">
      <Link
        href="/about-me"
        className={clsx(
          "px-2 py-1 font-primary",
          router.asPath === "/about-me" &&
            "text-sky-700 underline decoration-4 underline-offset-4"
        )}
      >
        About me
      </Link>
      <Link
        href="/"
        className={clsx(
          "px-2 py-1 font-primary",
          router.asPath === "/" &&
            "text-sky-700 underline decoration-4 underline-offset-4"
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
    <div className="absolute top-0 right-2 mt-1 md:hidden">
      <Menu>
        <Menu.Button className="mb-20">
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
