import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Devgenxtech",
  description: "Insights, tutorials, and news about mobile app development, AdMob integration, and software solutions.",
}

type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  featuredImage: string
  category: string
  publishedAt: string
  readTime: string
  tags: string[]
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Use relative URL instead of localhost
    const res = await fetch(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/blog"
        : "https://devgenxtech.vercel.app/api/blog",
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) {
      throw new Error("Failed to fetch blog posts")
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return [] // Return empty array instead of throwing
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-70"></div>
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-50/[0.05]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Insights, tutorials, and expert advice on mobile app development, AdMob monetization, and software
              engineering best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-background rounded-xl overflow-hidden shadow-md hover-lift border border-border/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-muted-foreground mb-2 space-x-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest articles, tutorials, and updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button type="submit" className="apple-button whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

