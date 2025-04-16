"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogTitle, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

// Sample portfolio projects data
const projects = [
  {
    id: 1,
    title: "HealthTrack Mobile App",
    category: "Mobile App Development",
    image: "/placeholder.svg?height=600&width=800",
    client: "HealthTech Inc.",
    technologies: ["React Native", "Firebase", "AdMob"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=800&width=600",
    client: "RetailConnect",
    technologies: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "FinTech Dashboard",
    category: "UI/UX Design & Development",
    image: "/placeholder.svg?height=600&width=800",
    client: "InvestPro",
    technologies: ["React", "D3.js", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "AdMob Revenue Optimizer",
    category: "Mobile Monetization",
    image: "/placeholder.svg?height=800&width=600",
    client: "AppMonetize",
    technologies: ["Flutter", "Google AdMob", "Firebase Analytics"],
  },
  {
    id: 5,
    title: "Logistics Management System",
    category: "Enterprise Software",
    image: "/placeholder.svg?height=600&width=800",
    client: "LogisticsPro",
    technologies: ["Angular", "Node.js", "PostgreSQL"],
  },
  {
    id: 6,
    title: "Social Media Analytics",
    category: "Data Analytics",
    image: "/placeholder.svg?height=800&width=600",
    client: "SocialInsight",
    technologies: ["Python", "Django", "TensorFlow"],
  },
  {
    id: 7,
    title: "Real Estate Marketplace",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    client: "PropertyFind",
    technologies: ["React", "Express", "MongoDB"],
  },
  {
    id: 8,
    title: "Fitness Tracking Wearable App",
    category: "IoT & Mobile Development",
    image: "/placeholder.svg?height=800&width=600",
    client: "FitTech",
    technologies: ["Swift", "Kotlin", "Bluetooth LE"],
  },
  {
    id: 9,
    title: "Educational Learning Platform",
    category: "EdTech",
    image: "/placeholder.svg?height=600&width=800",
    client: "EduLearn",
    technologies: ["Next.js", "GraphQL", "AWS"],
  },
]

export default function PortfolioGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage(image)
    setSelectedTitle(title)
    setOpen(true)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl overflow-hidden shadow-lg hover-lift border border-border/40"
            >
              <Dialog open={open && selectedImage === project.image} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <div
                    className="relative h-64 cursor-pointer"
                    onClick={() => handleImageClick(project.image, project.title)}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium px-3 py-1 bg-primary/80 rounded-full">
                        View Larger
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[80vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none">
                  <div className="relative w-full h-full max-h-[80vh]">
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute top-4 right-4 z-10 bg-black/60 text-white p-2 rounded-full"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <Image
                      src={selectedImage || ""}
                      alt={selectedTitle || "Project image"}
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <div className="p-6">
                <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">Client: {project.client}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
