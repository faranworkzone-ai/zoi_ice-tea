"use client"

import { Snowflake, RotateCcw, HeartPulse } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Snowflake,
    title: "Served Cold",
    description: "Best enjoyed ice-cold for maximum refreshment",
  },
  {
    icon: RotateCcw,
    title: "Shake Well",
    description: "Give it a good shake to unlock all the flavors",
  },
  {
    icon: HeartPulse,
    title: "No Added Sugar",
    description: "Pure natural sweetness from real fruit ingredients",
  },
]

export function FeatureBadges() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section id="experience" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group flex flex-col items-center text-center transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Icon className="h-8 w-8 text-foreground transition-colors duration-500 group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <a
            href="#contact"
            className="inline-flex rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
