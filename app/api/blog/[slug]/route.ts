import { NextResponse } from "next/server"

// Import the dummy blog posts data
import { blogPosts } from "../data" // No longer importing, using the local one

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  // Simulate a slight delay as would happen with a real database
  await new Promise((resolve) => setTimeout(resolve, 300))

  const slug = params.slug

  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
  }

  return NextResponse.json(post)
}

