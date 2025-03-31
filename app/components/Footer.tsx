import Link from "next/link"
import { Facebook, Instagram, Linkedin, Send, Code, Smartphone, Database, Server, LineChart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#171A1D] text-gray-300 py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Info */}
          <div>
            <img src="/logolong.svg" alt="DevgenxTech Logo" className="h-8 mb-6" />
            <p className="text-gray-400 text-sm mb-6">
              Empowering businesses with innovative software solutions that drive growth, enhance user engagement, and
              maximize revenue in today's digital landscape.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h3 className="text-white font-medium mb-2">Mobile Development</h3>
                <p className="text-gray-400 text-sm">
                  Native and cross-platform mobile applications with seamless user experiences and AdMob monetization
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">Web Applications</h3>
                <p className="text-gray-400 text-sm">
                  Responsive, feature-rich web solutions built with modern frameworks and optimized for performance
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">AdMob Solutions</h3>
                <p className="text-gray-400 text-sm">
                  Strategic ad placement and optimization to maximize your mobile app revenue potential
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">Enterprise Software</h3>
                <p className="text-gray-400 text-sm">
                  Custom business applications tailored to your specific operational needs and data requirements
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:ml-auto">
            <h2 className="text-gray-500 text-sm font-semibold mb-6 uppercase tracking-wider">Quick Links</h2>
            <ul className="space-y-4">
              {[
                { name: "Services", link: "/academy" },
                { name: "Portfolio", link: "/#portfolio" },
                { name: "AdMob Integration", link: "/academy#admob-services" },
                { name: "App Development", link: "/academy#app-development" },
                { name: "Support", link: "/contact" },
                { name: "Resources", link: "/academy" },
                { name: "Blog", link: "/blog" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h2 className="text-gray-500 text-sm font-semibold mb-6 uppercase tracking-wider">About</h2>
            <ul className="space-y-4">
              {[
                { name: "Company", link: "/about" },
                { name: "Team", link: "/about" },
                { name: "Our Process", link: "/about" },
                { name: "Testimonials", link: "/#testimonials" },
                { name: "Careers", link: "/about" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <div className="border border-blue-500 p-6 rounded text-center mb-6">
              <Link href="/contact" className="text-white text-lg font-semibold hover:text-blue-400 transition-colors">
                CONTACT US
              </Link>
            </div>
            <div className="text-center mb-8">
              <p className="text-white text-lg">+234 816 397 9924</p>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a
                href="https://github.com/devgenxtech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 9.5c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/chioke-gabrielchidera"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/devgenxtech.official"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/17SNdchiuV"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VavPU1I9RZAPTW88qj2y"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="WhatsApp Channel"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                </svg>
              </a>
              <a
                href="https://t.me/devgenxtech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Telegram Channel"
              >
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Our Expertise Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-white text-lg font-semibold mb-6 text-center">Our Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-800 p-3 rounded-full mb-3">
                <Smartphone className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-sm">Mobile Apps</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-800 p-3 rounded-full mb-3">
                <LineChart className="h-6 w-6 text-green-400" />
              </div>
              <span className="text-sm">AdMob Integration</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-800 p-3 rounded-full mb-3">
                <Code className="h-6 w-6 text-yellow-400" />
              </div>
              <span className="text-sm">Web Development</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-800 p-3 rounded-full mb-3">
                <Server className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-sm">Cloud Solutions</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-800 p-3 rounded-full mb-3">
                <Database className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-sm">Database Design</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-800 p-3 rounded-full mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-orange-400"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <span className="text-sm">UI/UX Design</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
                <img src="/logolong.svg" alt="DevgenxTech Logo" className="h-8" />
            </div>

            <div className="flex flex-wrap gap-4 mb-6 md:mb-0 justify-center">
              {["Terms of Use", "Privacy Policy", "Cookies", "License Agreements"].map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className={`text-xs hover:text-white ${index > 0 ? "border-l border-gray-700 pl-4" : ""}`}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/17SNdchiuV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://t.me/devgenxtech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/devgenxtech.official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/chioke-gabrielchidera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center md:text-left">
            <p>Copyright © {new Date().getFullYear()}, DevgenxTech. All Rights Reserved.</p>
            <p className="mt-2">
              DevgenxTech and certain product names used herein are trademarks or registered trademarks of
              DevgenxTech Corporation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

