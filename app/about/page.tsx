import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us | DevgenxTech",
  description: "Learn about our story, mission, and the team behind DevgenxTech' innovative software development.",
}

export default function AboutPage() {
  return <AboutPageClient />
}

