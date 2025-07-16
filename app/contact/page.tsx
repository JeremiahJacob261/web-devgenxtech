import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Send, Youtube, ExternalLink } from "lucide-react"
import ContactForm from "../components/ContactForm"
import Image from "next/image"

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
              Ezeudoka Crescent plot 625 Trans Nkisi Layout , 
                <br />
                Onitsha,
                <br />
             Nigeria   
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md hover-lift text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">
              +44 7577 387972
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
              info@devgenxtech.com
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


    {/* Social Media Showcase */}
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Connect With Us</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Follow us on social media to stay updated with our latest projects, tech insights, and company news. We're
            always sharing valuable content to help you grow your digital presence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* YouTube Card */}
            <div className="bg-background rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="h-48 bg-red-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Youtube className="w-20 h-20 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">YouTube</h3>
                  <p className="text-white/80 text-sm">@devgenxtech</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Watch our tutorials, tech reviews, and behind-the-scenes content on our YouTube channel.
                </p>
                <a
                  href="https://youtube.com/@devgenxtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Visit our channel <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-background rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="h-48 bg-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Linkedin className="w-20 h-20 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">LinkedIn</h3>
                  <p className="text-white/80 text-sm">Devgenxtech</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Connect with our team and stay updated with our professional insights and company updates.
                </p>
                <a
                  href="https://www.linkedin.com/company/devgenxtech-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Connect with us <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-background rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="h-48 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Instagram className="w-20 h-20 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">Instagram</h3>
                  <p className="text-white/80 text-sm">@devgenxtech.official</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Follow our Instagram for visual updates, project highlights, and behind-the-scenes content.
                </p>
                <a
                  href="https://www.instagram.com/devgenxtech.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Follow us <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="bg-background rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="h-48 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Facebook className="w-20 h-20 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">Facebook</h3>
                  <p className="text-white/80 text-sm">Devgenxtech</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Join our Facebook community for updates, tech discussions, and exclusive content.
                </p>
                <a
                  href="https://www.facebook.com/share/17SNdchiuV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Like our page <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* WhatsApp Channel Card */}
            <div className="bg-background rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="h-48 bg-green-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">WhatsApp Channel</h3>
                  <p className="text-white/80 text-sm">DevGenXTech</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Join our WhatsApp channel for instant updates, tips, and direct communication with our team.
                </p>
                <a
                  href="https://whatsapp.com/channel/0029VavPU1I9RZAPTW88qj2y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Join our channel <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Telegram Channel Card */}
            <div className="bg-background rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="h-48 bg-blue-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Send className="w-20 h-20 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">Telegram Channel</h3>
                  <p className="text-white/80 text-sm">@devgenxtech</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Subscribe to our Telegram channel for tech news, tutorials, and exclusive offers.
                </p>
                <a
                  href="https://t.me/devgenxtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Join our channel <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* YouTube Channel Preview */}
          <div className="mt-16 bg-background rounded-xl overflow-hidden shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img
                src="/yt.png"
                alt="DevGenXTech YouTube Channel"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full h-auto mt-4 md:mt-0 md:w-full md:h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our YouTube Channel</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our YouTube channel for in-depth tutorials, tech reviews, and insights into web and app
                  development. We regularly post content about AdMob integration, web design, hosting solutions, and
                  more to help you grow your digital presence and technical skills.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://youtube.com/@devgenxtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full inline-flex items-center transition-colors"
                  >
                    <Youtube className="mr-2 h-5 w-5" /> Subscribe
                  </a>
                  <a
                    href="https://youtube.com/@devgenxtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-full inline-flex items-center transition-colors"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" /> View Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-xl overflow-hidden shadow-lg">
            <div className="h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126903.88516006308!2d6.683333!3d6.133333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDgnMDAuMCJOIDfCsDQxJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1641234567890!5m2!1sen!2sng"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DevgenxTech Office Location"
                className="rounded-xl"
              />
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

