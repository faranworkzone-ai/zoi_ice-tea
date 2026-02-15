import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"

import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Zoi Ice Tea - The Ultimate Experience",
  description:
    "Explore our five exquisite tea flavors, each expertly crafted from the finest natural ingredients around the globe. Freeze. Shake. Drink. Repeat!",
}

export const viewport: Viewport = {
  themeColor: "#1a9e78",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
