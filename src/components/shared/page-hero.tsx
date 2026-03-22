import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
  className?: string;
}

export function PageHero({
  title,
  description,
  breadcrumbs,
  backgroundImage,
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden py-20 md:py-28",
        !backgroundImage &&
          "bg-gradient-to-br from-green-800 via-green-700 to-teal-700",
        className
      )}
    >
      {/* Background image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-900/75 to-green-900/50" />
        </>
      )}

      {/* Decorative pattern */}
      {!backgroundImage && (
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-6">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-white/90" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
