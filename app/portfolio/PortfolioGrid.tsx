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
		image: "/appspre.jpeg",
		client: "HealthTech Inc.",
		technologies: ["React Native", "Firebase", "AdMob"],
	},
	{
		id: 2,
		title: "E-commerce Platform",
		category: "Web Development",
		image: "/server2.jpeg",
		client: "RetailConnect",
		technologies: ["Next.js", "Node.js", "MongoDB"],
	},
	{
		id: 3,
		title: "FinTech Dashboard",
		category: "UI/UX Design & Development",
		image: "/server5.jpeg",
		client: "InvestPro",
		technologies: ["React", "TypeScript", "Tailwind CSS"],
	},
	{
		id: 4,
		title: "Logistics Management System",
		category: "Enterprise Software",
		image: "/shipping.png",
		client: "LogiCorp",
		technologies: ["React", "Express", "PostgreSQL"],
	},
	{
		id: 5,
		title: "Banking Portal",
		category: "Web Development",
		image: "/server3.jpeg",
		client: "SecureBank",
		technologies: ["Vue.js", "Laravel", "MySQL"],
	},
	{
		id: 6,
		title: "Data Analytics Dashboard",
		category: "Data Analytics",
		image: "/server1.jpeg",
		client: "DataViz Pro",
		technologies: ["React", "D3.js", "Tailwind CSS"],
	},
	{
		id: 7,
		title: "Real Shipping Management System",
		category: "Web Development",
		image: "/shipping.png",
		client: "RLS Transport",
		technologies: ["React", "Express", "MongoDB"],
	},
	{
		id: 8,
		title: "Fitness Tracking Wearable App",
		category: "IoT & Mobile Development",
		image: "/appspre.jpeg",
		client: "FitTech",
		technologies: ["Swift", "Kotlin", "Bluetooth LE"],
	},
	{
		id: 9,
		title: "Real Estate Services Platform",
		category: "Real Estate Development",
		image: "/por.jpg",
		client: "Real Estate Services SA",
		technologies: ["Next.js", "Tailwind CSS", "Prisma"],
	},
	{
		id: 10,
		title: "Galetti Property Leasing",
		category: "Real Estate Development",
		image: "/por2.jpg",
		client: "Galetti Properties",
		technologies: ["React", "Node.js", "PostgreSQL"],
	},
	{
		id: 11,
		title: "Rent and Realty Florida",
		category: "Real Estate Development",
		image: "/por3.jpg",
		client: "Rent & Realty FL",
		technologies: ["WordPress", "PHP", "MySQL"],
	},
	{
		id: 12,
		title: "Anester Hair Care Shop",
		category: "E-commerce Development",
		image: "/por4.jpg",
		client: "Anester Hair Care",
		technologies: ["Shopify", "JavaScript", "CSS"],
	},
	{
		id: 13,
		title: "Protech Furniture Solutions",
		category: "E-commerce Development",
		image: "/por5.jpg",
		client: "Protech Nigeria",
		technologies: ["WooCommerce", "WordPress", "PHP"],
	},
	{
		id: 14,
		title: "Equita Courier Service",
		category: "Enterprise Software",
		image: "/shipping.png",
		client: "Equita Courier",
		technologies: ["React", "Node.js", "Express", "MongoDB"],
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
