"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Code, 
  Briefcase, 
  FolderOpen, 
  Award, 
  Mail,
  Sun,
  Moon
} from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Awards", href: "#awards", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY / Math.max(scrollHeight, 1)
      setScrollProgress(scrolled)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const targetId = href.slice(1)
    const target = document.getElementById(targetId) || document.body
    target.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop & Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl shadow-2xl border-b border-blue-400/30"
            : "bg-transparent"
        }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <nav className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => scrollToSection("#home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-black font-bold text-xl shadow-lg group-hover:shadow-blue-400/25 transition-all duration-300">
                  <motion.span
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="relative z-10"
                  >
                    S
                  </motion.span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              </div>
              <div className="hidden sm:block">
                <motion.span 
                  className="text-2xl font-bold font-mono text-white group-hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-blue-400">&gt; </span>
                  <span className="bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    sahil.dev
                  </span>
                </motion.span>
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300" />
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-xl rounded-2xl p-2 border border-gray-800/50">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(item.href)}
                      className={`relative px-4 py-3 rounded-xl font-mono text-sm font-medium transition-all duration-300 group ${
                        activeSection === item.href.slice(1)
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active background */}
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          layoutId="navBackground"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl"
                          initial={false}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      
                      {/* Hover background */}
                      <motion.div
                        className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                      />
                      
                      <div className="relative z-10 flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        <span className="hidden xl:inline">
                          <span className={activeSection === item.href.slice(1) ? "text-white" : "text-blue-400"}>[</span>
                          {item.name.toLowerCase()}
                          <span className={activeSection === item.href.slice(1) ? "text-white" : "text-blue-400"}>]</span>
                        </span>
                      </div>
                      
                      {/* Glowing dots for active state */}
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="w-1 h-1 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
                        </motion.div>
                      )}
                    </motion.button>
                  </motion.div>
                ))}
              </div>
              
              {/* Theme toggle button */}
              <motion.button
                className="ml-4 p-3 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 text-gray-400 hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.05, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sun className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />
              </motion.button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 text-gray-300 hover:text-white transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Enhanced Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Enhanced Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Enhanced Mobile Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-gray-950/95 backdrop-blur-xl border-l border-blue-400/30 shadow-2xl z-50 lg:hidden"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 opacity-50" />
              
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-black font-bold shadow-lg">
                      S
                    </div>
                    <span className="text-lg font-bold font-mono text-white">
                      <span className="text-blue-400">&gt; </span>menu
                    </span>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.button
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full group relative overflow-hidden rounded-xl p-4 text-left transition-all duration-300 ${
                          activeSection === item.href.slice(1)
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                        whileHover={{ x: 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg transition-all duration-300 ${
                            activeSection === item.href.slice(1)
                              ? "bg-white/20"
                              : "bg-gray-800 group-hover:bg-blue-500/20"
                          }`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-mono font-medium">
                              <span className={activeSection === item.href.slice(1) ? "text-white" : "text-blue-400"}>[</span>
                              {item.name.toLowerCase()}
                              <span className={activeSection === item.href.slice(1) ? "text-white" : "text-blue-400"}>]</span>
                            </span>
                            <div className="text-xs text-gray-400 font-mono mt-1">
                              {item.href}
                            </div>
                          </div>
                        </div>
                        
                        {/* Animated border */}
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                          activeSection === item.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                        }`} />
                      </motion.button>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile menu footer */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="text-center text-gray-400 text-sm font-mono">
                    <span className="text-blue-400">~/</span> navigation.menu
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Enhanced Scroll Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrollProgress }}
          style={{ transformOrigin: "left" }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        >
          {/* Animated shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Floating scroll percentage indicator */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-20 right-6 z-40 lg:block hidden"
          >
            <div className="bg-gray-900/90 backdrop-blur-xl rounded-full px-3 py-2 border border-gray-800/50 text-xs font-mono text-gray-400">
              {Math.round(scrollProgress * 100)}%
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
