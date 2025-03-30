"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { SunIcon, MoonIcon } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we can safely show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="w-10 h-10"></div> // Placeholder to prevent layout shift
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-6 rounded-full bg-primary/10 p-1 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="sr-only">Toggle theme</span>

      {/* Track */}
      <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />

      {/* Thumb/Handle */}
      <motion.div
        className="absolute top-0.5 w-5 h-5 rounded-full bg-background shadow-md flex items-center justify-center z-10"
        animate={{
          left: resolvedTheme === "dark" ? "calc(100% - 1.25rem - 0.125rem)" : "0.125rem",
          rotate: resolvedTheme === "dark" ? 180 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {resolvedTheme === "dark" ? (
          <MoonIcon className="w-3 h-3 text-primary" />
        ) : (
          <SunIcon className="w-3 h-3 text-accent" />
        )}
      </motion.div>

      {/* Icons */}
      <span className="flex w-full justify-between px-1">
        <SunIcon className={`w-3 h-3 ${resolvedTheme === "dark" ? "text-accent/50" : "text-accent"}`} />
        <MoonIcon className={`w-3 h-3 ${resolvedTheme === "dark" ? "text-primary" : "text-primary/50"}`} />
      </span>
    </motion.button>
  )
}

