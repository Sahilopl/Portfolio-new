"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  User, 
  Calendar, 
  GraduationCap, 
  MapPin, 
  Download,
  Heart,
  Lightbulb,
  Target,
  Sparkles,
  Code,
  BookOpen,
  Coffee,
  Music,
  Mountain,
  Camera,
  Gamepad2,
  Palette
} from "lucide-react"
import Image from "next/image"
import { personalInfo } from "@/data/portfolio-data"
import { useInView } from "react-intersection-observer"
import { useRef } from "react"

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const hobbies = [
    { icon: Code, label: "Coding", color: "bg-blue-500" },
    { icon: BookOpen, label: "Reading", color: "bg-green-500" },
    { icon: Coffee, label: "Coffee", color: "bg-amber-600" },
    { icon: Music, label: "Music", color: "bg-purple-500" },
    { icon: Mountain, label: "Hiking", color: "bg-emerald-500" },
    { icon: Camera, label: "Photography", color: "bg-pink-500" },
    { icon: Gamepad2, label: "Gaming", color: "bg-indigo-500" },
    { icon: Palette, label: "Design", color: "bg-orange-500" }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly seeking new ways to solve problems and create value through technology."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering high-quality solutions that exceed expectations."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by genuine enthusiasm for creating meaningful digital experiences."
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gray-900 relative overflow-hidden tech-grid">
      {/* Background decorations */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-magenta-500/10 to-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-gray-800 border border-blue-400/30 px-4 py-2 rounded-full mb-6 neon-border">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-mono font-medium">$ whoami</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-mono text-white mb-6">
            <span className="text-blue-400 neon-glow">&gt; </span>System.getUser()
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-purple-400">//</span> Passionate developer who believes in the power of technology to transform lives 
            and solve meaningful problems.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Profile Card */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-700">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                        <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                          <User className="w-12 h-12 text-slate-600" />
                        </div>
                      </div>
                      <motion.div
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {personalInfo.name}
                      </h3>
                      <p className="text-slate-600 text-lg mb-1">{personalInfo.title}</p>
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin className="w-4 h-4" />
                        <span>{personalInfo.location}</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-slate-900">{personalInfo.experience}+</p>
                        <p className="text-slate-600 text-sm">Years Experience</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <GraduationCap className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-slate-900">CS</p>
                        <p className="text-slate-600 text-sm">Education</p>
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
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
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Values Card */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    My Values
                  </h4>
                  
                  <div className="space-y-4">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300"
                        whileHover={{ x: 4 }}
                      >
                        <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                          <value.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-900 mb-1">{value.title}</h5>
                          <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Story & Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Story Card */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-green-500" />
                    My Story
                  </h4>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      {personalInfo.bio}
                    </p>
                    
                    <p className="text-slate-700 leading-relaxed mb-4">
                      My journey in technology has been driven by curiosity and a desire to create 
                      meaningful solutions. From building my first website to developing complex 
                      applications, I've consistently pushed myself to learn and grow.
                    </p>
                    
                    <p className="text-slate-700 leading-relaxed">
                      When I'm not coding, you'll find me exploring new technologies, contributing 
                      to open source projects, or mentoring aspiring developers in my community.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hobbies & Interests Card */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-amber-600" />
                    Hobbies & Interests
                  </h4>
                  
                  <div className="grid grid-cols-4 gap-4">
                    {hobbies.map((hobby, index) => (
                      <motion.div
                        key={index}
                        className="text-center group cursor-pointer"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className={`w-14 h-14 ${hobby.color} rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <hobby.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-slate-700 text-xs font-medium">{hobby.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Fun Facts Card */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl">
                <CardContent className="p-8">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="inline-block mb-4"
                  >
                    <Sparkles className="w-8 h-8" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold mb-4">Fun Facts About Me</h4>
                  
                  <div className="grid gap-3">
                    {[
                      "🚀 I've built over 50+ personal projects",
                      "☕ Coffee enthusiast - I drink 4+ cups daily",
                      "🌍 I love exploring new places and cultures",
                      "🎵 I can play 3 musical instruments",
                      "📚 I read at least 1 tech book per month"
                    ].map((fact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 text-white/90"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <div className="w-2 h-2 bg-white/60 rounded-full" />
                        <span>{fact}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
