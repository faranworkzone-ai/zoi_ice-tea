"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const products = [
  {
    name: "Tanzanian Mango",
    tagline: "Exotic, juicy mangoes from Tanzania",
    image: "/images/can-mango.jpg",
    color: "bg-mango",
    textColor: "text-mango",
  },
  {
    name: "South Africa Berry",
    tagline: "Rich vibrant berries from South Africa",
    image: "/images/can-berry.jpg",
    color: "bg-berry",
    textColor: "text-berry",
  },
  {
    name: "Californian Peach",
    tagline: "Sweet, sun-ripened peaches from California",
    image: "/images/can-peach.jpg",
    color: "bg-peach",
    textColor: "text-peach",
  },
  {
    name: "Tropical Island",
    tagline: "Bright, tropical flavors from exotic islands",
    image: "/images/can-tropical.jpg",
    color: "bg-tropical",
    textColor: "text-tropical",
  },
  {
    name: "Mexican Lime & Mint",
    tagline: "Zesty, cool limes from Mexico",
    image: "/images/can-lime.jpg",
    color: "bg-lime",
    textColor: "text-lime",
  },
]

export function ProductShowcase() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="products" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Our Collection
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Five exquisite tea flavors
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Each expertly crafted from the finest natural ingredients around the
            globe.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-black/30">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative px-4 pb-5 pt-2 -mt-10">
                  <div
                    className={`mb-2 h-0.5 w-8 rounded-full ${product.color} transition-all duration-500 group-hover:w-12`}
                  />
                  <h3 className="text-lg font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {product.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
