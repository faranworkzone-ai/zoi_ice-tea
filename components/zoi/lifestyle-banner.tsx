"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function LifestyleBanner() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative">
      {/* Parallax Background */}
      <div
        className="parallax-banner min-h-[60vh] md:min-h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: "url(/images/lifestyle-banner.jpg)" }}
      >
        <div className="absolute inset-0 bg-foreground/50" />

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance leading-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Live the Zoi Experience
          </h2>
          <p
            className={`text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            More than a drink. A lifestyle of vibrant flavors, natural
            ingredients, and unforgettable moments shared with friends.
          </p>
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-full text-base font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Discover Our Flavors
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
