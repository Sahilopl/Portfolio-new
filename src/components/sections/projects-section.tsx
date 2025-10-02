"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Folder, 
  Calendar, 
  Building, 
  CheckCircle, 
  ExternalLink,
  Github,
  Star,
  Users,
  TrendingUp,
  Zap,
  Target,
  Award,
  Sparkles
} from "lucide-react"
import { projects } from "@/data/portfolio-data"
import { personalInfo } from "@/data/portfolio-data"
import { useInView } from "react-intersection-observer"
import { useRef } from "react"

export function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  }

  const projectColors = [
    "from-blue-400 to-purple-400",
    "from-purple-400 to-pink-400",
    "from-pink-400 to-blue-400"
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      {/* Neon Orbs */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl neon-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl neon-glow" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 font-medium">Featured Work</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent mb-6">
            Featured Projects
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            A showcase of my most impactful projects, demonstrating expertise in 
            full-stack development, data science, and innovative problem-solving.
          </motion.p>

          {/* Project Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Target, label: "Projects", value: "15+", color: "text-blue-600" },
              { icon: Users, label: "Users Impacted", value: "2000+", color: "text-green-600" },
              { icon: TrendingUp, label: "Success Rate", value: "95%", color: "text-purple-600" },
              { icon: Award, label: "Recognition", value: "3+", color: "text-orange-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="border-0 bg-gradient-to-br from-white to-slate-50 hover:shadow-2xl transition-all duration-700 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image/Visual */}
                  <div className={`relative p-8 bg-gradient-to-br ${projectColors[index]} flex items-center justify-center min-h-[300px]`}>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
                        <Folder className="w-16 h-16 text-white" />
                      </div>
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-white/30 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-8 right-8 text-white/40"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    >
                      <Star size={24} />
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-8 left-8 text-white/40"
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      <Zap size={20} />
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 lg:p-12 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {project.organization}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.period}
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-slate-600 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <Separator />

                    {/* Key Achievements */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-3">
                        {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border border-gray-600"
                            whileHover={{ x: 4 }}
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-gray-300 leading-relaxed font-mono">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Technologies */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-500" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge 
                              className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-slate-200 hover:to-slate-300 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      {project.liveDemo && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => window.open(project.liveDemo, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </motion.div>
                      )}
                      
                      {project.sourceCode ? (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            variant="outline"
                            className="border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
                            onClick={() => window.open(project.sourceCode, '_blank')}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            variant="outline"
                            className="border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
                            onClick={() => alert('GitHub repository would open here')}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-slate-900 to-purple-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
            <CardContent className="p-12 relative z-10">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Github className="w-12 h-12" />
              </motion.div>
              
              <h3 className="text-3xl font-bold mb-4">
                More Projects on GitHub
              </h3>
              
              <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                Explore my complete portfolio of projects, contributions, and 
                experiments on GitHub. From web applications to data analysis tools.
              </p>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.open(personalInfo.github, '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
