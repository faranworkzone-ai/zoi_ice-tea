"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const words = ["Freeze.", "Shake.", "Drink.", "Repeat!"]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Fresh tropical fruits and ice tea ingredients"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Animated Words */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6">
            {words.map((word, index) => (
              <h1
                key={word}
                className={`font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                {word}
              </h1>
            ))}
          </div>

          {/* Subtitle */}
          <p
            className={`text-primary-foreground/80 text-lg md:text-xl max-w-xl leading-relaxed transition-all duration-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            Explore our five exquisite tea flavors, each expertly crafted from
            the finest natural ingredients around the globe.
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Explore Flavors
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1400ms" }}
      >
        <a
          href="#products"
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Scroll to products"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
