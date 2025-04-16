import type { Metadata } from "next"
import PortfolioGrid from "./PortfolioGrid"

export const metadata: Metadata = {
  title: "Portfolio | TechSolutions",
  description: "Explore our portfolio of mobile apps, web applications, and software solutions.",
}

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-70"></div>
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-50/[0.05]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore our collection of innovative software solutions, mobile applications, and digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <PortfolioGrid />
    </div>
  )
}
