"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, CONTACT, SOCIAL_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

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
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.png"
              alt="AIPDN Logo"
              width={44}
              height={44}
              className="h-11 w-auto"
              priority
            />
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
                    onFocus={() =>
                      hasChildren && setOpenDropdown(item.label)
                    }
                    onKeyDown={(e) => {
                      if (!hasChildren) return;
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        );
                      }
                      if (e.key === "Escape") {
                        setOpenDropdown(null);
                      }
                    }}
                    aria-expanded={
                      hasChildren
                        ? openDropdown === item.label
                        : undefined
                    }
                    aria-haspopup={hasChildren ? "true" : undefined}
                    aria-current={isActive(item.href) ? "page" : undefined}
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
                    <div
                      className="absolute left-0 top-full z-50 mt-0 w-56 rounded-xl border border-border bg-background p-2 shadow-lg"
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          setOpenDropdown(null);
                        }
                      }}
                    >
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
                          onKeyDown={(e) => {
                            if (e.key === "Escape") {
                              setOpenDropdown(null);
                            }
                          }}
                          aria-current={isActive(child.href) ? "page" : undefined}
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
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/donate"
              className="rounded-full border border-green-200 bg-green-50 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-green-700 transition-all hover:bg-green-100"
            >
              Donate
            </Link>
            <Link
              href="/get-involved/contact"
              className="hidden rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-800 hover:shadow-md md:block"
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
          <div className="border-t border-border bg-background px-6 pb-6 pt-4 lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
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
                        aria-current={isActive(item.href) ? "page" : undefined}
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
                          className="rounded-lg p-2.5 hover:bg-neutral-50"
                          aria-label={`Expand ${item.label} submenu`}
                          aria-expanded={openDropdown === item.label}
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
                            aria-current={isActive(child.href) ? "page" : undefined}
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
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-center text-sm font-semibold text-green-700"
              >
                Donate
              </Link>
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
