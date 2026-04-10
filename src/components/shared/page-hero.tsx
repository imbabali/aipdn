import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
  imagePosition?: string;
  className?: string;
}

export function PageHero({
  title,
  description,
  breadcrumbs,
  backgroundImage,
  imagePosition = "center 40%",
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden py-16 sm:py-20 md:py-28",
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
            style={{ objectPosition: imagePosition }}
            sizes="100vw"
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
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
        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
