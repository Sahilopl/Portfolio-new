"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  Code2, 
  Globe, 
  Database, 
  GitBranch, 
  BarChart3, 
  Users,
  BookOpen,
  Star,
  TrendingUp,
  Zap,
  Award
} from "lucide-react"
import { skills } from "@/data/portfolio-data"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const skillIcons = {
  "Programming Languages": Code2,
  "Web Framework": Globe,
  "Databases": Database,
  "Version Control": GitBranch,
  "Mathematical & Statistical Tools": BarChart3,
  "Research Skills": Users,
  "Core Subjects": BookOpen,
}

const skillColors = {
  "Programming Languages": "from-blue-400 to-purple-400",
  "Web Framework": "from-purple-400 to-pink-400",
  "Databases": "from-pink-400 to-blue-400",
  "Version Control": "from-blue-400 to-purple-400",
  "Mathematical & Statistical Tools": "from-purple-400 to-pink-400",
  "Research Skills": "from-pink-400 to-blue-400",
  "Core Subjects": "from-blue-400 to-purple-400",
}

const skillLevels = {
  "Programming Languages": { level: 90, items: ["C++ (Advanced)", "Java (Intermediate)", "JavaScript"] },
  "Web Framework": { level: 85, items: ["ReactJs", "NextJs", "Node.js", "MaterialUI"] },
  "Databases": { level: 80, items: ["SQL", "Firebase", "MongoDB"] },
  "Version Control": { level: 88, items: ["Git", "GitHub", "Visual Studio Code"] },
  "Mathematical & Statistical Tools": { level: 75, items: ["Microsoft Excel", "MS Docs", "MS PowerPoint"] },
  "Research Skills": { level: 92, items: ["Planning", "Collaboration", "Communication", "Team Leadership"] },
  "Core Subjects": { level: 87, items: ["Data Structures", "Operating System", "DBMS"] },
}

export function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({})

  useEffect(() => {
    if (inView) {
      Object.entries(skillLevels).forEach(([category, { level }], index) => {
        setTimeout(() => {
          setAnimatedValues(prev => ({ ...prev, [category]: level }))
        }, index * 200)
      })
    }
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      {/* Neon Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl neon-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl neon-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-blue-400/20 border border-blue-400/50 px-4 py-2 rounded-full mb-6 neon-glow">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-mono font-medium">$ ./skills --list</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-mono mb-6">
            <span className="text-blue-400">&gt; </span>
            <span className="bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-purple-400">/* </span>
            A comprehensive showcase of my technical skills, tools, and technologies 
            across different domains of software development and data science.
            <span className="text-purple-400"> */</span>
          </motion.p>
        </motion.div>

        {/* Skills Overview Stats */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Code2, label: "Languages", value: "5+", color: "text-blue-400" },
            { icon: Globe, label: "Frameworks", value: "8+", color: "text-purple-400" },
            { icon: Award, label: "Certifications", value: "4+", color: "text-pink-400" },
            { icon: TrendingUp, label: "Experience", value: "3+ Years", color: "text-blue-400" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-800 hover:border-blue-400/50 transition-all duration-300 neon-border-hover"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <p className="text-2xl font-bold font-mono text-white">{stat.value}</p>
              <p className="text-gray-400 font-mono">[{stat.label.toLowerCase()}]</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {Object.entries(skillLevels).map(([category, { level, items }], index) => {
            const IconComponent = skillIcons[category as keyof typeof skillIcons] || Code2
            const gradientClass = skillColors[category as keyof typeof skillColors]
            
            return (
              <motion.div key={category} variants={itemVariants}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border border-gray-800 bg-gray-900/50 backdrop-blur-sm group overflow-hidden neon-border-hover">
                  <CardHeader className="pb-4 relative">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientClass} neon-glow`} />
                    
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${gradientClass} text-black group-hover:scale-110 transition-transform duration-300 neon-border`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-white font-mono">[{category.toLowerCase()}]</span>
                      </CardTitle>
                      
                      <div className="flex items-center gap-1 bg-blue-400/20 border border-blue-400/50 px-3 py-1 rounded-full neon-glow">
                        <Star className="w-4 h-4 text-blue-400 fill-current" />
                        <span className="text-blue-400 font-mono font-semibold">{level}%</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Progress 
                        value={animatedValues[category] || 0} 
                        className="h-2 bg-gray-800"
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <Separator />
                    
                    <div className="grid grid-cols-1 gap-3">
                      {items.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            delay: index * 0.1 + skillIndex * 0.05,
                            type: "spring",
                            stiffness: 100
                          }}
                          className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group/skill"
                        >
                          <span className="font-mono text-gray-300 group-hover/skill:text-purple-400 transition-colors">
                            <span className="text-blue-400">&gt; </span>{skill.toLowerCase()}
                          </span>
                          <motion.div 
                            className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full neon-glow"
                            whileHover={{ scale: 1.5 }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto border border-gray-800 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden relative neon-border">
            <div className="absolute inset-0 tech-grid opacity-20" />
            <CardContent className="p-12 relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Zap className="w-12 h-12" />
              </motion.div>
              
              <h3 className="text-3xl font-bold font-mono mb-4">
                <span className="text-blue-400">&gt; </span>Always Learning & Growing
              </h3>
              
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto font-mono">
                <span className="text-purple-400">/* </span>
                I'm constantly exploring new technologies, attending workshops, and 
                contributing to open-source projects to stay at the forefront of innovation.
                <span className="text-purple-400"> */</span>
              </p>
              
              <motion.div
                className="inline-flex items-center gap-2 bg-blue-400/20 border border-blue-400/50 backdrop-blur-sm px-6 py-3 rounded-full neon-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="font-semibold font-mono text-blue-400">[continuous_improvement.exe]</span>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
