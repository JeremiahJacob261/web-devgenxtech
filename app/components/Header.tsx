"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { MoonIcon, SunIcon, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  const isActive = (path: string) => {
    return pathname === path
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">DevgenxTech</span>
            <img
              className="h-8 w-auto"
              src="/logolong.svg"
              alt="DevGenxtech Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-12">

        <Link
            href="/"
            className={`text-sm font-semibold leading-6 transition-colors ${
              isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-semibold leading-6 transition-colors ${
              isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
            }`}
          >
            About
          </Link>

          <Link
            href="/blog"
            className={`text-sm font-semibold leading-6 transition-colors ${
              isActive("/blog") ? "text-primary" : "text-foreground hover:text-primary"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/portfolio"
            className={`text-sm font-semibold leading-6 transition-colors ${
              isActive("/portfolio") ? "text-primary" : "text-foreground hover:text-primary"
            }`}
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-semibold leading-6 transition-colors ${
              isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/academy"
            className={`text-sm font-semibold leading-6 transition-colors ${
              isActive("/academy") ? "text-primary" : "text-foreground hover:text-primary"
            }`}
          >
            Services
          </Link>
        </div>

        <div className="flex items-center gap-4 md:flex-1 md:justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-foreground hover:bg-secondary/80"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-4 pb-4 pt-2 bg-background/95 backdrop-blur-md border-t border-border">
            <Link
                href="/"
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive("/")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                Home
              </Link>
            
              <Link
                href="/about"
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive("/about")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                About
              </Link>

              <Link
                href="/blog"
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive("/blog")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/portfolio"
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive("/blog")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive("/contact")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                Contact
              </Link>
              <Link
                href="/academy"
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive("/academy")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                Services
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

