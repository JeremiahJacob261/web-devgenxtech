import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "DevgenxTech",
  description: "Bring your ideas to reality with Devgenxtech",
    generator: 'human',
  applicationName: "Devgenxtech",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Devgenxtech",
    "Web Development",
    "Software Development",
    "Admob",
    "Digital Solutions",
    "Web Design",
    "Software Solutions",
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'