"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const slides = [
  {
    image: "/images/slider/slide-1.jpg",
    title: "West Africa Diplomacy, Negotiation and Mediation Training",
    description:
      "Programme Diplomacy, Negotiation and Mediation Training, 26th to 30th January 2026, Dakar, Senegal",
    link: "/events",
  },
  {
    image: "/images/slider/slide-2.jpg",
    title:
      "Rethinking Inter-Party Dialogue in Africa",
    description:
      "Key insights from the AIPDN Regional Roundtable convened in Nairobi with over 50 delegates from across Africa.",
    link: "/news",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused) return;
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused, prefersReducedMotion]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-green-900 h-[500px] sm:h-[600px] md:h-[700px]" aria-roledescription="carousel" aria-label="Featured content">
      {/* Slide images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            style={{ objectPosition: "center 60%" }}
            sizes="100vw"
            priority={current === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-900/70 to-green-900/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
        <div className="max-w-2xl">
          <motion.div
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } })}
          >
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
              Strengthening Democracy Across Africa
            </span>
          </motion.div>

          <div aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -20 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
            >
              <h1 className="mt-6 font-heading text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>
          </div>

          <motion.div
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 } })}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href={slide.link}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-green-800 shadow-lg transition-all hover:bg-green-50 hover:shadow-xl"
            >
              Read More
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/get-involved/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-24 sm:bottom-28 left-1/2 flex -translate-x-1/2 items-center gap-3 sm:gap-4">
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="rounded-full bg-white/10 p-3.5 text-white backdrop-blur-sm hover:bg-white/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Slide indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all ${
                i === current ? "w-8 bg-white" : "w-3 bg-white/40"
              } p-3 bg-clip-content`}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === current}
              aria-current={i === current ? "true" : undefined}
            />
          ))}
        </div>
        <button
          onClick={() => setPaused(!paused)}
          className="rounded-full bg-white/10 p-3.5 text-white backdrop-blur-sm hover:bg-white/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
        >
          {paused ? <Play className="h-5 w-5" aria-hidden="true" /> : <Pause className="h-5 w-5" aria-hidden="true" />}
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="rounded-full bg-white/10 p-3.5 text-white backdrop-blur-sm hover:bg-white/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Mission bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-green-900/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-5 text-center">
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl mx-auto">
            Facilitating structured, inclusive dialogue among African political parties to strengthen democracy, promote peace, and foster inclusive governance across the continent.
          </p>
        </div>
      </div>
    </section>
  );
}
