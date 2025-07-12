import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, Code, Smartphone, Globe, Database, Server, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | DevgenxTech",
  description:
    "Explore our comprehensive software development services including app development, AdMob integration, and custom solutions.",
}

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-70"></div>
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-50/[0.05]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From mobile app development to AdMob monetization, we deliver cutting-edge software solutions that drive
              business growth and user engagement.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#app-development" className="apple-button">
                App Development
              </Link>
              <Link
                href="#admob-services"
                className="px-6 py-3 rounded-full bg-secondary text-foreground font-semibold transition-all duration-300 hover:bg-secondary/80"
              >
                AdMob Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">Why Choose DevgenxTech</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-xl shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Technical Excellence</h3>
              <p className="text-muted-foreground">
                Our team of expert developers delivers clean, efficient, and maintainable code for every project.
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Rapid Development</h3>
              <p className="text-muted-foreground">
                We employ agile methodologies and modern tools to deliver high-quality solutions on time.
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cross-Platform Expertise</h3>
              <p className="text-muted-foreground">
                We build seamless experiences across iOS, Android, web, and other platforms.
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Scalable Solutions</h3>
              <p className="text-muted-foreground">
                Our applications are built to scale with your business, from startup to enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service: AdMob Integration */}
      <section id="admob-services" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-sm font-semibold text-primary mb-2">Featured Service</span>
                <h2 className="text-3xl font-bold text-foreground mb-4">Google AdMob Integration</h2>
                <p className="text-muted-foreground mb-6">
                  Maximize your app's revenue potential with our expert AdMob integration services. We help you
                  implement and optimize various ad formats while maintaining an excellent user experience.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Strategic ad placement for maximum revenue",
                    "Multiple ad format implementation (banner, interstitial, rewarded)",
                    "User experience optimization",
                    "A/B testing for ad performance",
                    "Revenue analytics and reporting",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link href="/contact" className="apple-button inline-flex items-center">
                    Get Started
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-auto">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="AdMob Integration Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Development Services */}
      <section id="app-development" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">App Development Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "iOS App Development",
                description:
                  "Native iOS applications built with Swift for exceptional performance and user experience on iPhone and iPad.",
                icon: <Smartphone className="h-10 w-10 text-primary" />,
                features: ["Swift & SwiftUI", "Apple Design Guidelines", "App Store Optimization"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Android App Development",
                description:
                  "Powerful Android applications developed with Kotlin or Java for the diverse Android ecosystem.",
                icon: <Smartphone className="h-10 w-10 text-primary" />,
                features: ["Kotlin & Java", "Material Design", "Google Play Store Optimization"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Cross-Platform Development",
                description:
                  "Cost-effective solutions using React Native or Flutter to target both iOS and Android with a single codebase.",
                icon: <Smartphone className="h-10 w-10 text-primary" />,
                features: ["React Native", "Flutter", "Code Reusability"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Web Application Development",
                description: "Responsive web applications built with modern frameworks like React, Angular, or Vue.js.",
                icon: <Globe className="h-10 w-10 text-primary" />,
                features: ["React.js", "Next.js", "Progressive Web Apps"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Backend Development",
                description:
                  "Scalable and secure backend services to power your applications with Node.js, Express, and cloud technologies.",
                icon: <Server className="h-10 w-10 text-primary" />,
                features: ["Node.js", "Express", "Cloud Deployment"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Database Solutions",
                description:
                  "Custom database design and implementation using SQL and NoSQL technologies for optimal data management.",
                icon: <Database className="h-10 w-10 text-primary" />,
                features: ["MongoDB", "PostgreSQL", "Firebase"],
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((service, index) => (
              <div key={index} className="bg-background rounded-xl overflow-hidden shadow-md hover-lift">
                <div className="h-48 relative">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="h-4 w-4 text-primary mr-2 flex-shrink-0">•</div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/contact" className="text-primary hover:underline inline-flex items-center">
                      Learn More
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">Additional Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "UI/UX Design",
                description:
                  "User-centered design that combines aesthetics with functionality for intuitive and engaging digital experiences.",
                features: ["User Research", "Wireframing & Prototyping", "Usability Testing"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "DevOps & Cloud Services",
                description:
                  "Streamlined development operations and cloud infrastructure for reliable, scalable applications.",
                features: ["CI/CD Pipelines", "AWS/Azure/GCP", "Containerization"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Quality Assurance & Testing",
                description:
                  "Comprehensive testing strategies to ensure your software is bug-free and performs optimally.",
                features: ["Automated Testing", "Performance Testing", "Security Testing"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Maintenance & Support",
                description: "Ongoing technical support and maintenance to keep your applications running smoothly.",
                features: ["24/7 Support", "Performance Monitoring", "Regular Updates"],
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-background rounded-xl overflow-hidden shadow-md hover-lift"
              >
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="h-4 w-4 text-primary mr-2 flex-shrink-0">•</div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/contact" className="apple-button text-sm py-2">
                      Request Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "DevgenxTech transformed our business with a custom mobile app that increased customer engagement by 45%. Their AdMob integration strategy also helped us generate significant revenue.",
                name: "Mark Johnson",
                role: "CEO, RetailConnect",
                image: "/profiles/pro1.jpg?height=100&width=100",
              },
              {
                quote:
                  "Working with DevgenxTech was a game-changer for our startup. Their expertise in cross-platform development allowed us to launch on both iOS and Android simultaneously, saving us time and resources.",
                name: "Sarah Williams",
                role: "Founder, HealthTech",
                image: "/profiles/pro2.jpg?height=100&width=100",
              },
              {
                quote:
                  "The team at DevgenxTech delivered a complex enterprise solution that streamlined our operations and reduced costs. Their technical expertise and project management were exceptional.",
                name: "David Chen",
                role: "CTO, LogisticsPro",
                image: "/profiles/pro3.jpg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-md">
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Build Your Next Digital Solution?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            From concept to launch, we'll help you create innovative software that drives your business forward. Let's
            start building together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="apple-button">
              Get a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-secondary text-foreground font-semibold transition-all duration-300 hover:bg-secondary/80"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

