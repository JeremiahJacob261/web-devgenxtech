"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
	{
		id: 1,
		title: "Convert Website to Mobile App",
		description:
			"Transform your existing website into a fully functional mobile application, ensuring seamless performance and user experience.",
		imageUrl: "/server1.jpeg?height=600&width=800",
		category: "Mobile App",
	},
	// {
	// 	id: 2,
	// 	title: "E-commerce Platform",
	// 	description:
	// 		"Scalable online shopping solution with advanced analytics, providing seamless user experience and robust backend support.",
	// 	imageUrl: "/server2.jpeg?height=800&width=600",
	// 	category: "Web App",
	// },
	{
		id: 4,
		title: "Modern Shipping Website",
		description:
			"Innovative shipping platform with real-time tracking, user-friendly interface, and advanced analytics for efficient logistics management.",
		imageUrl: "/shipping.png?height=800&width=600",
		category: "Enterprise Software",
		link: "https://railwayshipping.demo.devgenxtech.com/",
	},
	{
		id: 5,
		title: "Investment Website and App",
		description:
			"End-to-end solution for managing investments and optimizing supply chain processes with advanced analytics.",
		imageUrl: "/server5.jpeg?height=400&width=500",
		category: "Enterprise Software",
	},
	{
		id: 6,
		title: "Premium Mobile App",
		description:
			"High-end mobile application designed for luxury brands, offering exclusive features and a premium user experience.",
		imageUrl: "/appspre.jpeg?height=800&width=600",
		category: "Data Analytics",
	},
	{
		id: 7,
		title: "Real Estate Services Platform",
		description:
			"Comprehensive real estate platform providing property listings, market insights, and professional real estate services.",
		imageUrl: "/por4.jpg?height=600&width=800",
		category: "Real Estate",
		link: "https://www.realestateservices.co.za/",
	},
	{
		id: 8,
		title: "Galetti Property Leasing",
		description:
			"Professional property leasing platform offering streamlined rental processes and comprehensive property management solutions.",
		imageUrl: "/por5.jpg?height=800&width=600",
		category: "Real Estate",
		link: "https://galetti.co.za/",
	},
	{
		id: 9,
		title: "Rent and Realty Florida",
		description:
			"Florida-based rental and property management platform connecting tenants with quality rental properties and real estate services.",
		imageUrl: "/por3.jpg?height=600&width=800",
		category: "Real Estate",
		link: "https://www.rentandrealtyfl.com/",
	},
	{
		id: 10,
		title: "Anester Hair Care Shop",
		description:
			"Premium hair care e-commerce platform offering professional hair products and styling services with modern shopping experience.",
		imageUrl: "/por2.jpg?height=800&width=600",
		category: "E-commerce",
		link: "https://anestherhaircare.bumpa.shop/",
	},
	{
		id: 11,
		title: "Protech Furniture Solutions",
		description:
			"Modern furniture retail platform showcasing quality furniture collections with elegant design and seamless shopping experience.",
		imageUrl: "/por.jpg?height=600&width=800",
		category: "E-commerce",
		link: "https://www.protechng.com/",
	},
	{
		id: 12,
		title: "Equita Courier Service",
		description:
			"Comprehensive cargo solutions platform providing reliable courier and shipping services with real-time tracking and logistics management.",
		imageUrl: "/shipping.png?height=600&width=800",
		category: "Enterprise Software",
		link: "https://equitacourierservice.com/",
	},
	{
		id: 3,
		title: "Banking Website",
		description:
			"Modern and secure banking interface designed to enhance user experience and streamline financial operations.",
		imageUrl: "/server3.jpeg?height=600&width=800",
		category: "UI/UX Design",
	},
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
	const [filter, setFilter] = useState("All")
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const [showLeftScroll, setShowLeftScroll] = useState(false)
	const [showRightScroll, setShowRightScroll] = useState(false)

	const filteredProjects =
		filter === "All" ? projects : projects.filter((project) => project.category === filter)

	// Check if scrolling is needed and update scroll button visibility
	const checkScrollButtons = () => {
		if (scrollContainerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
			setShowLeftScroll(scrollLeft > 0)
			setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
		}
	}

	// Initialize scroll button visibility
	useEffect(() => {
		checkScrollButtons()
		window.addEventListener("resize", checkScrollButtons)
		return () => window.removeEventListener("resize", checkScrollButtons)
	}, [])

	// Scroll the categories container left or right
	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = 200 // Adjust as needed
			const newScrollLeft =
				direction === "left"
					? scrollContainerRef.current.scrollLeft - scrollAmount
					: scrollContainerRef.current.scrollLeft + scrollAmount

			scrollContainerRef.current.scrollTo({
				left: newScrollLeft,
				behavior: "smooth",
			})

			// Update scroll button visibility after scrolling
			setTimeout(checkScrollButtons, 300)
		}
	}

	return (
		<section className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Work</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						A showcase of our innovative software solutions and digital experiences.
					</p>
				</motion.div>

				{/* Categories with horizontal scrolling on mobile */}
				<div className="relative mb-8">
					{/* Left scroll button */}
					<button
						onClick={() => scroll("left")}
						className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-1 shadow-md ${
							showLeftScroll ? "opacity-100" : "opacity-0 pointer-events-none"
						} transition-opacity md:hidden`}
						aria-label="Scroll categories left"
					>
						<ChevronLeft className="h-5 w-5 text-foreground" />
					</button>

					{/* Scrollable container */}
					<div
						ref={scrollContainerRef}
						className="flex overflow-x-auto scrollbar-hide py-2 px-6 md:px-0 md:justify-center md:flex-wrap md:space-y-2 space-x-4"
						onScroll={checkScrollButtons}
					>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setFilter(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
									filter === category
										? "bg-primary text-primary-foreground"
										: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
								}`}
							>
								{category}
							</button>
						))}
					</div>

					{/* Right scroll button */}
					<button
						onClick={() => scroll("right")}
						className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-1 shadow-md ${
							showRightScroll ? "opacity-100" : "opacity-0 pointer-events-none"
						} transition-opacity md:hidden`}
						aria-label="Scroll categories right"
					>
						<ChevronRight className="h-5 w-5 text-foreground" />
					</button>
				</div>

				<motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<AnimatePresence>
						{filteredProjects.map((project) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
							>
								<div className="relative h-64 overflow-hidden">
									<Image
										src={project.imageUrl || "/placeholder.svg"}
										alt={project.title}
										layout="fill"
										objectFit="cover"
										className="transition-transform duration-300 ease-in-out group-hover:scale-105"
									/>
									<motion.div
										className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
										whileHover={{ opacity: 1 }}
									>
										<p className="text-white text-center px-4">{project.description}</p>
									</motion.div>
								</div>
								<div className="p-6">
									<div className="text-sm font-medium text-primary mb-1">{project.category}</div>
									<h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
									<a
										href={project?.link}
										target="_blank"
										className="text-primary hover:underline inline-flex items-center"
									>
										View Project
										<svg
											className="w-4 h-4 ml-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M14 5l7 7m0 0l-7 7m7-7H3"
											/>
										</svg>
									</a>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	)
}

