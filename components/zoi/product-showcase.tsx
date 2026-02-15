"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const products = [
  {
    name: "Tanzanian Mango",
    tagline: "Exotic, juicy mangoes from Tanzania",
    image: "/images/mango-can.jpg",
    color: "from-[hsl(42,95%,55%)] to-[hsl(42,95%,45%)]",
    bgColor: "bg-[hsl(42,95%,96%)]",
  },
  {
    name: "South Africa Berry",
    tagline: "Rich vibrant berries from South Africa",
    image: "/images/berry-can.jpg",
    color: "from-[hsl(285,55%,48%)] to-[hsl(285,55%,38%)]",
    bgColor: "bg-[hsl(285,55%,96%)]",
  },
  {
    name: "Californian Peach",
    tagline: "Sweet, sun-ripened peaches from California",
    image: "/images/peach-can.jpg",
    color: "from-[hsl(18,90%,65%)] to-[hsl(18,90%,55%)]",
    bgColor: "bg-[hsl(18,90%,96%)]",
  },
  {
    name: "Tropical Island",
    tagline: "Bright, tropical fruit flavors from exotic islands",
    image: "/images/tropical-can.jpg",
    color: "from-[hsl(178,60%,44%)] to-[hsl(178,60%,34%)]",
    bgColor: "bg-[hsl(178,60%,96%)]",
  },
  {
    name: "Mexican Lime & Mint",
    tagline: "Zesty, cool limes from Mexico",
    image: "/images/lime-can.jpg",
    color: "from-[hsl(142,65%,45%)] to-[hsl(142,65%,35%)]",
    bgColor: "bg-[hsl(142,65%,96%)]",
  },
]

export function ProductShowcase() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="products"
      className="py-24 md:py-32 px-6 md:px-12 bg-background"
      ref={ref}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            className={`text-primary text-sm font-semibold uppercase tracking-widest mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Our Collection
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Five Exquisite Flavors
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div
                className={`${product.bgColor} rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl`}
              >
                {/* Product Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
