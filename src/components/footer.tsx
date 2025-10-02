"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Heart,
  ArrowUp
} from "lucide-react"
import { personalInfo } from "@/data/portfolio-data"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div>
                <h3 className="text-xl font-bold">{personalInfo.name}</h3>
                <p className="text-slate-400">{personalInfo.title}</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Passionate about creating innovative solutions and building 
              meaningful connections through technology. Always ready to 
              take on new challenges and contribute to impactful projects.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                onClick={() => window.open(personalInfo.linkedin, '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <a 
                href="https://github.com/Sahilopl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-slate-600 bg-transparent hover:bg-slate-800 h-9 px-3 text-slate-300 hover:text-white"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Me", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Awards", href: "#awards" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-white transition-colors duration-300 text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by {personalInfo.name.split(' ')[0]}</span>
            </div>

            <div className="text-slate-400 text-sm text-center">
              <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
              <p className="mt-1">Built with Next.js, TypeScript & Tailwind CSS</p>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
