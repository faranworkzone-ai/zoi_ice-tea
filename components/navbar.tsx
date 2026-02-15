"use client"

import { useState, useEffect } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-foreground">
            Zoi
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Ice Tea
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#products"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Experience
          </a>
          <a
            href="#ingredients"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Ingredients
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Shopping cart"
            className="relative rounded-full p-2 text-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
          <button
            className="md:hidden rounded-full p-2 text-foreground transition-colors hover:bg-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            <a
              href="#products"
              className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#experience"
              className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#ingredients"
              className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Ingredients
            </a>
            <a
              href="#contact"
              className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
