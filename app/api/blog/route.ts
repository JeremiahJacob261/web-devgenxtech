import { NextResponse } from "next/server"
import { blogPosts } from "./data"

export async function GET() {
  // Simulate a slight delay as would happen with a real database
  await new Promise((resolve) => setTimeout(resolve, 300))

  return NextResponse.json(blogPosts)
}

export async function POST(request: Request) {
  // This would normally validate the request and add a new blog post
  return NextResponse.json({ message: "Post creation endpoint" }, { status: 201 })
}

