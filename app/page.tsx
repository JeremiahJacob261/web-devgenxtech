import Hero from "./components/Hero"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"
import AnimatedBubbles from "./components/AnimatedBubbles"
import SoftwareSolutions from "./components/WearYourStory"
import BlogPreview from "./components/BlogPreview"

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <SoftwareSolutions />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <BlogPreview />
      <ContactForm />
      <NewsletterSubscribe />
    </div>
  )
}

