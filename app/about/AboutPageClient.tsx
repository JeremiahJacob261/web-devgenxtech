"use client"

import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

export default function AboutPageClient() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-70"></div>
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-50/[0.05]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Our <span className="text-gradient">Story</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover the innovation and expertise that drives DevgenxTech, and meet the team behind our cutting-edge
              software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At DevgenxTech, we believe in the transformative power of technology. Our mission is to create
                innovative software solutions that empower businesses to thrive in the digital landscape.
              </p>
              <p className="text-muted-foreground mb-6">
                We specialize in mobile app development, Google AdMob integration, web applications, and custom software
                solutions that are both powerful and user-friendly. Our approach is rooted in technical excellence,
                innovation, and a deep understanding of our clients' business needs.
              </p>
              <p className="text-muted-foreground">
                Every project we undertake is an opportunity to solve complex problems with elegant solutions that drive
                real business results for our clients.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/handgear.jpg?height=400&width=600"
                alt="Our development team at work"
                objectFit="cover"
                width={
                  600
                }
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl shadow-md hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries and explore new technologies to deliver cutting-edge solutions for our
                clients.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl shadow-md hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to technical excellence and best practices in every line of code we write.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl shadow-md hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Partnership</h3>
              <p className="text-muted-foreground">
                We believe in building long-term relationships with our clients, becoming trusted technology partners
                rather than just vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              // {
              //   name: "Alex Johnson",
              //   role: "Founder & CEO",
              //   bio: "With over 15 years of experience in software development, Alex brings strategic vision and technical leadership to every project.",
              //   image: "/placeholder.svg?height=400&width=400",
              // },
              {
                name: "Sarah Chen",
                role: "CTO",
                bio: "Sarah's expertise in mobile development and cloud architecture has been instrumental in our most innovative solutions.",
                image: "/profiles/Sarah_Chen.jpg?height=400&width=400",
              },
              {
                name: "Michael Rodriguez",
                role: "Mobile Development Lead",
                bio: "Michael specializes in native and cross-platform mobile development with deep expertise in AdMob integration.",
                image: "/profiles/Michael_Rodriguez.jpg?height=400&width=400",
              },
              {
                name: "Jessica Kim",
                role: "UI/UX Director",
                bio: "Jessica ensures our applications are not just functional but deliver exceptional user experiences across all platforms.",
                image: "/profiles/Jessica_Kim.jpg?height=400&width=400",
              },
              {
                name: "David Patel",
                role: "Backend Development Lead",
                bio: "David's expertise in scalable architecture and cloud solutions forms the backbone of our enterprise applications.",
                image: "/profiles/David_Patel.jpg?height=400&width=400",
              },
              {
                name: "Emma Wilson",
                role: "Project Management Director",
                bio: "Emma's methodical approach to project management ensures our solutions are delivered on time and within budget.",
                image: "/profiles/Emma_Wilson.jpg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="bg-background rounded-xl overflow-hidden shadow-md hover-lift">
                <div className="h-64 relative bg-gradient-to-br from-primary/10 to-secondary/20">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's build something amazing together. Reach out to discuss your project and how our software solutions can
            drive your business forward.
          </p>
          <Link href="/contact" className="inline-flex items-center apple-button">
            Get in Touch
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

