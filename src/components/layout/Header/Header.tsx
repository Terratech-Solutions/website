'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import navItems from '../../../data/header.json';

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(true);

  const handleDropdownEnter = () => setOpenDropdown(true);
  const handleDropdownLeave = () => setOpenDropdown(false);
  const toggleMobileDropdown = () => setOpenMobileDropdown((isOpen) => !isOpen);

  const dropdownRef = useRef<HTMLLIElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    };

    const handleClickOutsideMobile = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutsideMobile);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutsideMobile);
    };
  }, []);

  return (
    <header ref={navbarRef} className="fixed inset-x-0 top-0 z-50 px-10 max-md:px-2">
      <div className="flex items-center justify-between mt-4 md:mt-10.5 backdrop-blur-md rounded-md">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900">
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
          <ul className="flex items-center gap-15 max-xl:gap-10 text-base font-medium text-white">
            {navItems.items.map((item) => {
              const hasChildren = item.children && item.children.length > 0;

              if (!hasChildren) {
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-concrete">
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="flex items-center gap-1 transition-colors hover:text-concrete cursor-pointer">
                    {item.label}
                    <span className="text-xs">{openDropdown ? '▴' : '▾'}</span>
                  </button>

                  <div
                    className={`absolute left-0 top-full mt-3 min-w-[240px] rounded-lg bg-[#131313] shadow-lg border border-zinc-800 transition-all duration-300 ${
                      openDropdown
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <ul className="py-3">
                      {item.children?.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-zinc-800"
                            onClick={() => setOpenDropdown(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}

            <li>
              <Link
                href={navItems.contact.href}
                className="inline-flex items-center justify-center rounded-xl bg-true-red w-36.5 h-11.5 transition-colors hover:bg-red-700 text-base font-medium"
              >
                {navItems.contact.label}
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => {
            setOpenMenu((open) => !open);
          }}
        >
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-transform ${
              openMenu ? 'translate-y-[9px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-opacity ${
              openMenu ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-transform ${
              openMenu ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <div className="w-full h-[10px]">
        <div
          className={`
          lg:hidden
          fixed right-12 max-md:right-2 max-md:top-[60px] top-[90px] z-40
          w-[200px] border-t border-[#131313] bg-[#131313] backdrop-blur-md shadow-lg
          transition-[max-height,opacity] duration-400 ease-out
          ${openMenu ? 'block opacity-100' : 'hidden opacity-0 overflow-hidden'}
        `}
        >
          <nav className="px-4 py-6">
            <ul className="flex flex-col text-base font-medium gap-1">
              {navItems.items.map((item) => {
                const hasChildren = Array.isArray(item.children) && item.children.length > 0;

                if (!hasChildren) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block w-full py-2"
                        onClick={() => setOpenMenu(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="flex flex-col">
                    <button
                      type="button"
                      onClick={toggleMobileDropdown}
                      className="flex justify-between w-full py-2 text-left"
                    >
                      {item.label}
                      <span className="text-xs">{openMobileDropdown ? '▴' : '▾'}</span>
                    </button>

                    <ul
                      className={`pl-4 border-l border-zinc-700 overflow-hidden transition-all duration-300 ${
                        openMobileDropdown ? 'block opacity-100' : 'hidden opacity-0'
                      }`}
                    >
                      {item.children?.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-1 text-sm text-white/70"
                            onClick={() => {
                              setOpenMenu(false);
                            }}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}

              <li>
                <Link
                  href={navItems.contact.href}
                  className="block w-full py-2"
                  onClick={() => setOpenMenu(false)}
                >
                  {navItems.contact.label}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
