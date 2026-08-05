"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (label: string) => {
    setOpenAccordion((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          {/* Logo in white circle */}
          <Link href="/" className="flex flex-shrink-0 items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
              <Image
                src="/logo-emblem.png"
                alt="Aadikavi Bhanubhakta Campus"
                width={34}
                height={34}
                className="h-8 w-auto"
              />
            </div>
          </Link>

          {/* Desktop nav, centered independent of logo width */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex md:items-center md:gap-7">
            {navigation.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 py-2 text-base font-semibold text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="h-4 w-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full w-56 rounded-md border border-stone/10 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
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

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="absolute right-4 p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-primary transition-all duration-300 ${
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
                    className="p-3 text-white/70"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
    </header>
  );
}