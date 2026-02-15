import { Instagram, Twitter } from "lucide-react"

const navLinks = [
  { label: "Home", sublabel: "Freeze", href: "#" },
  { label: "Products", sublabel: "Shake", href: "#products" },
  { label: "Ingredients", sublabel: "Drink", href: "#ingredients" },
]

const socialLinks = [
  { label: "IG", icon: Instagram, href: "#" },
  { label: "X", icon: Twitter, href: "#" },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold tracking-tighter text-foreground">
                Zoi
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Ice Tea
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              The ultimate ice tea experience. Crafted with care from the finest
              natural ingredients around the globe.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-10 lg:gap-16">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex flex-col"
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                  {link.label}
                </span>
                <span className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {link.sublabel}
                </span>
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Follow
            </span>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Drinkzoi. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            The Ultimate Experience
          </p>
        </div>
      </div>
    </footer>
  )
}
