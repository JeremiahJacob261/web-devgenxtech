import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarIcon, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post: { tags: string[]; [key: string]: any } = await getBlogPost(slug)

  if (!post) {
    return {
      title: "Post Not Found | Devgenxtech",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Devgenxtech Blog`,
    description: post.excerpt,
  }
}

async function getBlogPost(slug: string) {
  try {
    // Use relative URL instead of localhost
    const res = await fetch(process.env.NODE_ENV === "development" ? `http://localhost:3000/api/blog/${slug}` : `https://devgenxtech.vercel.app/api/blog/${slug}`, { next: { revalidate: 3600 } })

    if (!res.ok) {
      return null
    }

    return res.json()
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
    return null
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Format the date
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-70"></div>
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-50/[0.05]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex items-center mb-8">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <div className="font-medium text-foreground">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.role}</div>
              </div>
              <div className="ml-auto flex items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image src={post.featuredImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Social Share Sidebar */}
            <div className="hidden lg:block fixed left-[calc(50%-700px)] top-1/2 transform -translate-y-1/2">
              <div className="flex flex-col items-center space-y-4">
                <span className="text-xs text-muted-foreground">Share</span>
                <button className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                  <Facebook className="h-5 w-5 text-foreground" />
                </button>
                <button className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                  <Twitter className="h-5 w-5 text-foreground" />
                </button>
                <button className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                  <Linkedin className="h-5 w-5 text-foreground" />
                </button>
                <button className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                  <Share2 className="h-5 w-5 text-foreground" />
                </button>
              </div>
            </div>

            {/* Mobile Share Buttons */}
            <div className="flex lg:hidden justify-center space-x-4 mb-8">
              <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                <Facebook className="h-5 w-5 text-foreground" />
              </button>
              <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                <Twitter className="h-5 w-5 text-foreground" />
              </button>
              <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                <Linkedin className="h-5 w-5 text-foreground" />
              </button>
              <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                <Share2 className="h-5 w-5 text-foreground" />
              </button>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-secondary/10 rounded-xl">
              <div className="flex items-center">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">About {post.author.name}</h3>
                  <p className="text-muted-foreground mb-2">{post.author.role} at Devgenxtech</p>
                  <p className="text-muted-foreground">
                    Expert in mobile development and software engineering with over 10 years of experience building
                    solutions for startups and enterprise clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => {
              // In a real app, you would fetch related posts based on tags or category
              const relatedPost = post.id + i <= 5 ? post.id + i : (post.id + i) % 5 || 5
              return (
                <Link
                  key={i}
                  href={`/blog/${["maximizing-admob-revenue", "cross-platform-vs-native", "cloud-database-solutions", "ui-design-principles", "app-launch-checklist"][relatedPost - 1]}`}
                  className="group bg-background rounded-xl overflow-hidden shadow-md hover-lift border border-border/40"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={`/${["/maximizing-admob-revenue.webp", "/cross-platform-vs-native.png", "/cloud-database-solutions.png", "/ui-design-principles.png", "/app-launch-checklist.png"][relatedPost - 1]}`}
                      alt="Related post"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {
                        [
                          "Maximizing AdMob Revenue",
                          "Cross-Platform vs. Native Development",
                          "Cloud Database Solutions",
                          "UI Design Principles",
                          "App Launch Checklist",
                        ][relatedPost - 1]
                      }
                    </h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{["8", "10", "12", "9", "15"][relatedPost - 1]} min read</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
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

