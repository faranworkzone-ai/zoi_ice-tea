"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const words = ["Freeze.", "Shake.", "Drink.", "Repeat!"]

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            The Ultimate Experience
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {words.map((word, i) => (
            <h1
              key={word}
              className={`text-5xl font-bold tracking-tight text-foreground transition-all duration-700 sm:text-7xl lg:text-8xl xl:text-9xl ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {word}
            </h1>
          ))}
        </div>

        <div
          className={`transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Explore our five exquisite tea flavors, each expertly crafted from
            the finest natural ingredients around the globe.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            Explore Flavors
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "1500ms" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  )
}
