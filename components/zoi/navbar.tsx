"use client"

import { useState, useEffect } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import Link from "next/link"

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 max-w-[1400px] mx-auto">
        <Link href="#" className="flex items-center gap-2">
          <span
            className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Zoi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Products", "Ingredients", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled
                  ? "text-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Shopping bag"
            className={`relative transition-colors duration-300 ${
              isScrolled
                ? "text-foreground"
                : "text-primary-foreground"
            }`}
          >
            <ShoppingBag className="h-5 w-5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            className={`md:hidden transition-colors duration-300 ${
              isScrolled
                ? "text-foreground"
                : "text-primary-foreground"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {["Home", "Products", "Ingredients", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground text-lg font-medium py-3 border-b border-border/50 last:border-b-0 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
