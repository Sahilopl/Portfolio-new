"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Download, ArrowDown, Sparkles, Code, Database, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { personalInfo } from "@/data/portfolio-data"
import { useRef, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [mounted, setMounted] = useState(false)
  const fullText = "Building innovative solutions with data and code"

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Predefined sparkle positions and sizes to avoid hydration mismatch
  const sparkleData = [
    { left: 15, top: 25, size: 18, delay: 0.5 },
    { left: 85, top: 15, size: 22, delay: 1.2 },
    { left: 75, top: 60, size: 16, delay: 0.8 },
    { left: 25, top: 80, size: 20, delay: 1.5 },
    { left: 60, top: 30, size: 14, delay: 0.3 },
    { left: 45, top: 70, size: 24, delay: 1.8 },
    { left: 90, top: 45, size: 19, delay: 0.7 },
    { left: 10, top: 55, size: 17, delay: 1.1 },
    { left: 70, top: 85, size: 21, delay: 1.4 },
    { left: 35, top: 20, size: 15, delay: 0.9 },
    { left: 55, top: 90, size: 23, delay: 1.6 },
    { left: 20, top: 40, size: 18, delay: 0.4 },
    { left: 80, top: 75, size: 16, delay: 1.3 },
    { left: 40, top: 10, size: 20, delay: 0.6 },
    { left: 65, top: 50, size: 19, delay: 1.0 },
    { left: 95, top: 30, size: 17, delay: 1.7 },
    { left: 30, top: 65, size: 22, delay: 0.2 },
    { left: 85, top: 80, size: 15, delay: 1.9 },
    { left: 5, top: 35, size: 21, delay: 0.1 },
    { left: 50, top: 5, size: 18, delay: 2.0 }
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (inView) {
      let i = 0
      const timer = setInterval(() => {
        setText(fullText.slice(0, i))
        i++
        if (i > fullText.length) {
          clearInterval(timer)
          setShowCursor(false)
        }
      }, 100)
      return () => clearInterval(timer)
    }
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black tech-grid"
    >
      {/* Matrix background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          {/* Tech floating elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 text-blue-400"
          >
            <Code size={40} className="neon-green" />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-32 right-32 text-cyan-400"
          >
            <Database size={35} className="neon-cyan" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-32 left-32 text-magenta-400"
          >
            <Brain size={45} className="neon-magenta" />
          </motion.div>

          {/* Tech sparkle effects with predefined positions */}
          {mounted && sparkleData.map((sparkle, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400"
              style={{
                left: `${sparkle.left}%`,
                top: `${sparkle.top}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: sparkle.delay,
                ease: "easeInOut"
              }}
            >
              <Sparkles size={sparkle.size} className="neon-green" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          ref={inViewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Tech Avatar */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="relative w-40 h-40 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 neon-border"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full bg-black border-2 border-blue-400 flex items-center justify-center text-blue-400 text-4xl font-bold font-mono shadow-2xl neon-glow"
                whileHover={{ boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)" }}
              >
                {personalInfo.name.split(" ").map(n => n[0]).join("")}
              </motion.div>
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-blue-400/30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Name with glitch effect */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-mono text-white neon-green glitch"
              data-text={personalInfo.name}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-blue-400">&gt; </span>{personalInfo.name}
            </motion.h1>
            
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="px-4 py-2 text-sm font-medium font-mono bg-blue-400 text-black neon-border">
                <span className="text-black"># </span>{personalInfo.title.split(' ').slice(0, 2).join(' ')}
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium font-mono border-cyan-400 text-cyan-400 bg-transparent neon-border">
                <span className="text-cyan-400">gpa:</span> {personalInfo.gpa}
              </Badge>
            </div>
          </motion.div>

          {/* Terminal-style typing animation */}
          <motion.div variants={itemVariants} className="h-16">
            <div className="text-xl md:text-2xl text-gray-400 font-mono bg-gray-900 rounded-lg p-4 border border-blue-400/30 code-block">
              <span className="text-purple-400">console.log(</span>
              <span className="text-blue-400">"</span>
              <span className="text-white">{text}</span>
              {showCursor && <span className="cursor text-blue-400"></span>}
              <span className="text-blue-400">"</span>
              <span className="text-purple-400">);</span>
            </div>
          </motion.div>

          {/* Bio with terminal style */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <div className="text-left font-mono text-gray-300 bg-black rounded-lg p-6 border border-blue-400/30 code-block">
              <div className="text-purple-400 mb-2">// Developer Profile</div>
              <div className="text-gray-300">
                <span className="text-purple-400">const</span> 
                <span className="text-white"> developer </span>
                <span className="text-purple-400">= </span>
                <span className="text-blue-400">&#123;</span>
              </div>
              <div className="ml-4 text-gray-300">
                <span className="text-purple-400">bio:</span> 
                <span className="text-blue-400">"</span>
                <span className="text-white">{personalInfo.bio}</span>
                <span className="text-blue-400">",</span>
              </div>
              <div className="ml-4 text-gray-300">
                <span className="text-purple-400">skills:</span> 
                <span className="text-pink-400">[</span>
                <span className="text-blue-400">"AI"</span>
                <span className="text-white">, </span>
                <span className="text-blue-400">"Data Science"</span>
                <span className="text-white">, </span>
                <span className="text-blue-400">"Full Stack"</span>
                <span className="text-pink-400">]</span>
              </div>
              <div className="text-blue-400">&#125;;</div>
            </div>
          </motion.div>

          {/* Tech-style contact info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 text-gray-400 font-mono"
          >
            {[
              { icon: MapPin, text: personalInfo.location, color: "text-blue-400", prefix: "location:" },
              { icon: Mail, text: personalInfo.email, color: "text-purple-400", href: `mailto:${personalInfo.email}`, prefix: "email:" },
              { icon: Phone, text: personalInfo.phone, color: "text-pink-400", prefix: "phone:" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 p-3 rounded-lg bg-gray-900 border border-gray-700 hover:border-blue-400 transition-all neon-border"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-gray-400">{item.prefix}</span>
                {item.href ? (
                  <a href={item.href} className={`${item.color} hover:underline transition-colors`}>
                    {item.text}
                  </a>
                ) : (
                  <span className={item.color}>{item.text}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Terminal command buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-blue-400 hover:bg-blue-300 text-black font-mono font-bold px-8 py-4 rounded-lg neon-border transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="mr-2">$</span>
                <Mail className="w-5 h-5 mr-2" />
                ./connect --now
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-mono font-bold px-8 py-4 rounded-lg bg-transparent transition-all"
                onClick={() => window.open(personalInfo.linkedin, '_blank')}
              >
                <span className="mr-2">&gt;</span>
                <Linkedin className="w-5 h-5 mr-2" />
                linkedin --profile
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="border-2 border-magenta-400 text-magenta-400 hover:bg-magenta-400 hover:text-black font-mono font-bold px-8 py-4 rounded-lg bg-transparent transition-all"
                onClick={() => {
                  try {
                    const link = document.createElement('a');
                    link.href = '/assets/Sahil_Adhikari_Resume_compressed.pdf';
                    link.download = 'Sahil_Adhikari_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  } catch (error) {
                    // Fallback: open in new tab
                    window.open('/assets/Sahil_Adhikari_Resume_compressed.pdf', '_blank');
                  }
                }}
              >
                <span className="mr-2">#</span>
                <Download className="w-5 h-5 mr-2" />
                download --resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Terminal scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2 text-blue-400 font-mono">
              <span className="text-sm">execute_scroll()</span>
              <ArrowDown className="w-5 h-5 neon-glow" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
