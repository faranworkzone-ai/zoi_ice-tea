"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function LifestyleBanner() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" ref={ref}>
      {/* Background image with parallax effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/lifestyle.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Live the Experience
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-6xl text-balance">
            More than just a drink.
            <br />
            {"It's"} a lifestyle.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Join the community of those who choose to refresh differently.
            Experience the taste that brings people together.
          </p>
          <a
            href="#products"
            className="inline-flex rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:scale-105 hover:shadow-lg"
          >
            Discover Our Flavors
          </a>
        </div>
      </div>
    </section>
  )
}
