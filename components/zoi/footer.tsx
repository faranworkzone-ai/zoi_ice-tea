"use client"

import Link from "next/link"

const navLinks = [
  { label: "Freeze", sublabel: "Home", href: "#home" },
  { label: "Shake", sublabel: "Products", href: "#products" },
  { label: "Drink", sublabel: "Ingredients", href: "#ingredients" },
]

const socialLinks = [
  { label: "IG", href: "#" },
  { label: "X", href: "#" },
  { label: "SC", href: "#" },
  { label: "TT", href: "#" },
]

export function Footer() {
  return (
    <footer id="about" className="bg-foreground text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Main Footer */}
        <div className="py-16 md:py-24 flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-serif text-4xl font-bold">Zoi</span>
            <p className="text-primary-foreground/60 max-w-xs leading-relaxed">
              The ultimate ice tea experience. Crafted from the finest natural
              ingredients around the globe.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-8 md:gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex flex-col gap-1"
              >
                <span className="text-primary-foreground/40 text-xs uppercase tracking-widest">
                  {link.sublabel}
                </span>
                <span className="font-serif text-2xl font-semibold text-primary-foreground group-hover:text-primary transition-colors duration-300">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span className="text-primary-foreground/40 text-xs uppercase tracking-widest">
              Follow
            </span>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-sm font-semibold text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all duration-300"
                  aria-label={`Follow us on ${social.label}`}
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            {"© 2026 Drinkzoi. All rights reserved."}
          </p>
          <p className="text-primary-foreground/30 text-sm">
            {"Crafted with care"}
          </p>
        </div>
      </div>
    </footer>
  )
}
