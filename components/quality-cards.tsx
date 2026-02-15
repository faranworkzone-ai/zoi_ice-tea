"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const qualities = [
  {
    title: "High Quality",
    subtitle: "Natural Ingredients",
    description:
      "Crafted from the finest, all-natural ingredients, ensuring a delightful experience with every sip. With absolutely no added sugar, this invigorating drink bursts with vibrant flavors, providing a crisp and satisfying taste that refreshes and revitalizes.",
    image: "/images/ingredients.jpg",
  },
  {
    title: "Smoothness",
    subtitle: "and Aftertaste",
    description:
      "Our product boasts an exceptionally smooth profile, free from any acidity, which highlights our commitment to sourcing only the finest natural ingredients. Taste a delicate balance of flavors, ensuring a satisfying and refined tasting experience.",
    image: "/images/smoothness.jpg",
  },
  {
    title: "Unique",
    subtitle: "Can Design",
    description:
      "Introducing a can design that combines comfort and functionality, fitting perfectly in your hand for easy enjoyment. The modern look adds style to your drinking experience while highlighting your favorite flavors.",
    image: "/images/can-design.jpg",
  },
]

export function QualityCards() {
  return (
    <section id="ingredients" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <QualityHeader />

        {/* Cards */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {qualities.map((quality, index) => (
            <QualityCard
              key={quality.title}
              quality={quality}
              index={index}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function QualityHeader() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div
      ref={ref}
      className={`mb-20 text-center transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
        What Makes Us Different
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
        Crafted with care
      </h2>
    </div>
  )
}

function QualityCard({
  quality,
  index,
  reversed,
}: {
  quality: (typeof qualities)[0]
  index: number
  reversed: boolean
}) {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-10 lg:gap-16 ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Image */}
      <div
        className={`w-full lg:w-1/2 transition-all duration-800 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : reversed
              ? "translate-x-10 opacity-0"
              : "-translate-x-10 opacity-0"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src={quality.image}
            alt={quality.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </div>

      {/* Text */}
      <div
        className={`w-full lg:w-1/2 transition-all duration-800 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : reversed
              ? "-translate-x-10 opacity-0"
              : "translate-x-10 opacity-0"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        <div className={`${reversed ? "lg:pr-8" : "lg:pl-8"}`}>
          <div className="mb-4 h-1 w-10 rounded-full bg-primary" />
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            {quality.title}
          </h3>
          <p className="mb-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            {quality.subtitle}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            {quality.description}
          </p>
        </div>
      </div>
    </div>
  )
}
