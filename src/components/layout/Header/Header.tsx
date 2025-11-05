"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/process", label: "The Process" },
    { href: "/services", label: "Services" },
    { href: "/investors", label: "About" },
    { href: "/media", label: "Our Work" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-10 max-md:px-2">
      <div className="flex items-center justify-between mt-4 md:mt-10.5 backdrop-blur-md rounded-md">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-gray-900"
          >
            <Image
              src="/logo.svg"
              alt="Company logo"
              width={230}
              height={51}
              priority
              className="h-auto w-[150px] md:w-[190px] lg:w-[230px]"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-15 text-base font-medium text-white">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-concrete"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-true-red w-36.5 h-11.5 transition-colors hover:bg-red-700 text-base font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-transform ${
              open ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div className="w-full h-[10px]">
        <div
          className={`
          lg:hidden
          w-[150px]
          fixed right-12 max-md:right-2 top-[90px] z-40
          border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-lg
          transition-[max-height,opacity] duration-200 ease-out
          ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
        >
          <nav className="px-4 py-6">
            <ul className="flex flex-col gap-4 text-base font-medium text-gray-900">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block w-full py-2"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="pt-2">
                <Link
                  href="/contact"
                  className="block rounded-md bg-gray-900 px-4 py-3 text-center text-white"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
