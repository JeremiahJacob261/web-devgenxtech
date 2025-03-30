"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { Code, Smartphone, Database, Server, LineChart } from "lucide-react"

const features = [
  {
    title: "Mobile App Development",
    description: "Native and cross-platform apps for iOS and Android with seamless user experiences.",
    icon: <Smartphone className="w-12 h-12 mb-4 text-primary" />,
  },
  {
    title: "AdMob Integration",
    description: "Maximize your app revenue with strategic ad placement and optimization.",
    icon: <LineChart className="w-12 h-12 mb-4 text-green-500" />,
  },
  {
    title: "Web Applications",
    description: "Responsive, feature-rich web applications built with modern frameworks.",
    icon: <Code className="w-12 h-12 mb-4 text-yellow-500" />,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services for reliable performance.",
    icon: <Server className="w-12 h-12 mb-4 text-purple-500" />,
  },
  {
    title: "Database Design",
    description: "Optimized data architecture for efficient storage and retrieval.",
    icon: <Database className="w-12 h-12 mb-4 text-blue-500" />,
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [isMobile])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Services</h2>

        {/* Mobile indicator for scrolling */}
        {isMobile && (
          <p className="text-center text-sm text-muted-foreground mb-4">
            <span className="inline-block animate-pulse">← Swipe to explore →</span>
          </p>
        )}

        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag={isMobile ? "x" : false}
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[400px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div>
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="mt-4">
                  <Link href="/academy" className="text-primary hover:underline">
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Add Link component to avoid errors
function Link({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

