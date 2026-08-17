"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";

const LOGO_HEIGHT = 88;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      setPinned(window.scrollY > LOGO_HEIGHT);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toggleAccordion = (label: string) => {
    setOpenAccordion((prev) => (prev === label ? null : label));
  };

  const navLinks = (
    <nav className="hidden md:flex md:items-center md:gap-7">
      {navigation.map((item) => (
        <div key={item.label} className="group relative">
          <Link
            href={item.href}
            className="flex items-center gap-1 py-2 text-base font-semibold text-white/90 transition-colors hover:text-white"
          >
            {item.label}
            {item.children && (
              <svg
                className="h-4 w-4 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Link>

          {item.children && (
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 rounded-md border border-stone/10 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-stone hover:bg-primary/5 hover:text-primary"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );

  return (
    <header>
      {/* Logo section — scrolls away normally */}
      <div className="bg-white py-3">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Image
              src="/logo-full.png"
              alt="Aadikavi Bhanubhakta Campus"
              width={280}
              height={90}
              priority
              className="h-16 w-auto sm:h-20"
            />
          </Link>
        </div>
      </div>

      {/* Nav strip — in normal flow */}
      <div className="relative z-40 w-full bg-primary shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-14 items-center justify-center">
            {navLinks}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="absolute right-0 cursor-pointer p-2 text-white md:hidden"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`overflow-hidden bg-primary transition-all duration-300 md:hidden ${
            mobileOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="border-t border-white/10 px-4 py-2">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-white/10 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 py-3 text-sm font-medium text-white"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleAccordion(item.label)}
                      className="cursor-pointer p-3 text-white/70"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          openAccordion === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {item.children && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.label ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 pl-4 text-sm text-white/80"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Pinned copy — always fixed, slides down when scrolled */}
      <div
        aria-hidden={!pinned}
        className={`fixed left-0 top-0 z-50 hidden w-full bg-primary shadow-md transition-transform duration-300 ease-out will-change-transform md:block ${
          pinned ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-center">{navLinks}</div>
        </div>
      </div>
    </header>
  );
}