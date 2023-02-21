import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

export function Nav() {
  return (
    <nav className="relative flex justify-end p-4">
      <MobileMenu />
      <DesktopMenu />
    </nav>
  );
}

function DesktopMenu() {
  return (
    <div className="hidden gap-4 text-sm md:flex lg:text-base">
      <div className="rounded-md px-2 py-1 text-right  text-neutral-900 hover:bg-neutral-400 hover:text-white">
        <Link href="/about-me">About me</Link>
      </div>
      <div className="rounded-md px-2 py-1 text-right text-neutral-900 hover:bg-neutral-400 hover:text-white">
        <Link href="/">My projects</Link>
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="absolute top-0 right-2 mt-1 md:hidden">
      <Menu>
        <Menu.Button className="mb-20">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
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
          <Menu.Items className="absolute right-0 bottom-0 w-56 space-y-1 rounded-md bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="rounded-md px-2 py-1 text-right text-sm text-neutral-900 hover:bg-neutral-400 hover:text-white">
              <Menu.Item>
                <Link href="/about-me">About me</Link>
              </Menu.Item>
            </div>
            <div className="rounded-md px-2 py-1 text-right text-sm text-neutral-900 hover:bg-neutral-400 hover:text-white">
              <Menu.Item>
                <Link href="/">My projects</Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
