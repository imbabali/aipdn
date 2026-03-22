"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, CONTACT, SOCIAL_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="hidden bg-green-800 text-white/90 text-sm md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {CONTACT.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="capitalize hover:text-white transition-colors"
                aria-label={`Follow us on ${platform}`}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-700 text-white font-heading font-bold text-lg">
              A
            </div>
            <div>
              <span className="block text-lg font-heading font-bold text-foreground leading-tight">
                AIPDN
              </span>
              <span className="hidden text-[11px] text-muted-foreground leading-tight sm:block">
                African Inter-Party Dialogue Network
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const hasChildren = "children" in item && item.children;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    hasChildren && setOpenDropdown(item.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-green-700 bg-green-50"
                        : "text-neutral-700 hover:text-green-700 hover:bg-green-50/50"
                    )}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>
                  {hasChildren && openDropdown === item.label && (
                    <div className="absolute left-0 top-full z-50 mt-0 w-56 rounded-xl border border-border bg-background p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                            isActive(child.href)
                              ? "text-green-700 bg-green-50"
                              : "text-neutral-600 hover:text-green-700 hover:bg-green-50/50"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/get-involved/contact"
              className="hidden rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-800 hover:shadow-md sm:block"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-neutral-700 hover:bg-neutral-100 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-background px-6 pb-6 pt-4 lg:hidden">
            <div className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const hasChildren = "children" in item && item.children;
                return (
                  <div key={item.label}>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={() => !hasChildren && setMobileOpen(false)}
                        className={cn(
                          "flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                          isActive(item.href)
                            ? "text-green-700 bg-green-50"
                            : "text-neutral-700 hover:bg-neutral-50"
                        )}
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.label ? null : item.label
                            )
                          }
                          className="rounded-lg p-2 hover:bg-neutral-50"
                          aria-label={`Expand ${item.label} submenu`}
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              openDropdown === item.label && "rotate-180"
                            )}
                          />
                        </button>
                      )}
                    </div>
                    {hasChildren && openDropdown === item.label && (
                      <div className="ml-4 space-y-1 border-l-2 border-green-100 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm transition-colors",
                              isActive(child.href)
                                ? "text-green-700 bg-green-50"
                                : "text-neutral-600 hover:text-green-700 hover:bg-green-50/50"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <Link
                href="/get-involved/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-full bg-green-700 px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
