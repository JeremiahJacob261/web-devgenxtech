import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "../components/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us | DevgenxTech",
  description:
    "Get in touch with our team for inquiries about app development, AdMob integration, or to discuss your project.",
}

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-70"></div>
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-50/[0.05]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We'd love to hear from you. Whether you have a question about our services, need a quote for your project,
              or want to discuss how we can help your business grow, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-xl shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground">
                123 Tech Avenue
                <br />
                San Francisco, CA 94105
                <br />
                United States
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">
                +1 (555) 123-4567
                <br />
                Monday to Friday
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground">
                info@DevgenxTech.dev
                <br />
                support@DevgenxTech.dev
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Working Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9am - 6pm
                <br />
                Saturday: 10am - 2pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-xl overflow-hidden shadow-lg">
            <div className="h-[400px] bg-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Interactive Map</p>
                <p className="text-sm text-muted-foreground">
                  (In a real implementation, this would be an embedded Google Map or similar)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What services do you offer?",
                answer:
                  "We offer a comprehensive range of software development services including mobile app development (iOS and Android), web application development, Google AdMob integration, UI/UX design, cloud solutions, and custom software development.",
              },
              {
                question: "How do I monetize my mobile app with AdMob?",
                answer:
                  "Google AdMob is a mobile advertising platform that allows you to earn revenue by displaying targeted ads in your app. We can help you implement various ad formats (banner, interstitial, rewarded, native) and optimize your monetization strategy for maximum revenue while maintaining a great user experience.",
              },
              {
                question: "What is your development process?",
                answer:
                  "Our development process follows an agile methodology with regular client touchpoints. We begin with discovery and planning, move to design and development, conduct thorough testing, and finally deploy your solution. We also provide ongoing maintenance and support after launch.",
              },
              {
                question: "How much does it cost to develop an app?",
                answer:
                  "App development costs vary widely depending on complexity, features, platforms, and design requirements. We provide detailed quotes after understanding your specific needs. Our projects typically range from $25,000 for simpler apps to $150,000+ for complex, enterprise-grade solutions.",
              },
              {
                question: "How long does it take to develop an app?",
                answer:
                  "Development timelines depend on the scope and complexity of your project. A simple app might take 2-3 months, while a more complex application could take 6-9 months. We'll provide a detailed timeline during our initial consultation.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

