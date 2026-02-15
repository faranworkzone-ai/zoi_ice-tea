"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    title: "High Quality",
    subtitle: "Natural Ingredients",
    description:
      "Crafted from the finest, all-natural ingredients, ensuring a delightful experience with every sip. With absolutely no added sugar, this invigorating drink bursts with vibrant flavors, providing a crisp and satisfying taste that refreshes and revitalizes.",
    image: "/images/ingredients.jpg",
    imageAlt: "Premium natural ingredients on marble surface",
    reversed: false,
  },
  {
    title: "Smoothness",
    subtitle: "and Aftertaste",
    description:
      "Our product boasts an exceptionally smooth profile, free from any acidity, which highlights our commitment to sourcing only the finest natural ingredients. Taste a delicate balance of flavors, ensuring a satisfying and refined tasting experience.",
    image: "/images/smoothness.jpg",
    imageAlt: "Smooth iced tea being poured",
    reversed: true,
  },
  {
    title: "Unique",
    subtitle: "Can Design",
    description:
      "Introducing a can design that combines comfort and functionality, fitting perfectly in your hand for easy enjoyment. The modern look adds style to your drinking experience while highlighting your favorite flavors.",
    image: "/images/can-design.jpg",
    imageAlt: "Five colorful Zoi beverage cans",
    reversed: false,
  },
]

function FeatureBlock({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        feature.reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-10 lg:gap-16`}
    >
      {/* Image */}
      <div
        className={`w-full lg:w-1/2 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${feature.reversed ? "translate-x-12" : "-translate-x-12"}`
        }`}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-foreground/5">
          <Image
            src={feature.image}
            alt={feature.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`w-full lg:w-1/2 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${feature.reversed ? "-translate-x-12" : "translate-x-12"}`
        }`}
        style={{ transitionDelay: `${index * 50 + 200}ms` }}
      >
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
          {feature.title}
        </p>
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
          {feature.title}
          <br />
          <span className="text-muted-foreground">{feature.subtitle}</span>
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section
      id="ingredients"
      className="py-24 md:py-32 px-6 md:px-12 bg-background"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-24 md:gap-32">
        {features.map((feature, index) => (
          <FeatureBlock key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}
