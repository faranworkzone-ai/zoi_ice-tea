"use client"

import { Snowflake, RefreshCw, Droplets } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: Snowflake,
    title: "Served Cold",
    description:
      "Best enjoyed ice-cold. Chill your can for the ultimate refreshing experience that awakens your senses.",
  },
  {
    icon: RefreshCw,
    title: "Shake Well",
    description:
      "Give it a good shake to blend the natural ingredients and unlock the full spectrum of flavors.",
  },
  {
    icon: Droplets,
    title: "No Added Sugar",
    description:
      "Pure, natural taste with absolutely no added sugar. Just real fruit flavors in every sip.",
  },
]

export function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-secondary" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            className={`text-primary text-sm font-semibold uppercase tracking-widest mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            The Experience
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            How to Enjoy
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                  <Icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-base font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
