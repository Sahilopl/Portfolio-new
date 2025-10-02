"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Send,
  MessageCircle
} from "lucide-react"
import { personalInfo } from "@/data/portfolio-data"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a conversation about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Whether you're interested in collaboration, have a project in mind, 
                or just want to chat about the latest in tech, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                  color: "bg-green-100 text-green-600"
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: personalInfo.location,
                  href: "#",
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "Connect with me",
                  href: personalInfo.linkedin,
                  color: "bg-blue-100 text-blue-600"
                }
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-md cursor-pointer"
                        onClick={() => contact.href !== "#" && window.open(contact.href, contact.label === "LinkedIn" ? "_blank" : "_self")}>
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className={`p-3 rounded-lg ${contact.color}`}>
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {contact.label}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {contact.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    // In a real implementation, you'd handle form submission
                    alert('Form submission would be handled here')
                  }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                
                <p className="text-sm text-slate-500 text-center">
                  Or reach out directly via{" "}
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {personalInfo.email}
                  </a>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Let's Build Something Great Together
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
                I'm passionate about creating innovative solutions and collaborating 
                with like-minded individuals. Let's connect and explore possibilities!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => window.open(personalInfo.linkedin, '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open(personalInfo.github, '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
