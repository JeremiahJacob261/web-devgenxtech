import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        The blog post you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/blog" className="apple-button">
        Back to Blog
      </Link>
    </div>
  )
}

