import { Navbar } from "@/components/zoi/navbar"
import { Hero } from "@/components/zoi/hero"
import { ProductShowcase } from "@/components/zoi/product-showcase"
import { Experience } from "@/components/zoi/experience"
import { Features } from "@/components/zoi/features"
import { LifestyleBanner } from "@/components/zoi/lifestyle-banner"
import { Footer } from "@/components/zoi/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Experience />
      <Features />
      <LifestyleBanner />
      <Footer />
    </main>
  )
}
