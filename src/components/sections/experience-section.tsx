"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react"
import { experience } from "@/data/portfolio-data"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      {/* Neon Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/5 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl neon-glow" />
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl neon-glow" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-blue-400">&gt; </span>
            <span className="bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 neon-glow"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono">
            <span className="text-purple-400">/* </span>
            My professional journey includes hands-on experience in data science, 
            leadership roles, and impactful contributions to various organizations.
            <span className="text-purple-400"> */</span>
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 neon-glow"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative md:flex md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-black z-10 neon-glow"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="border-2 border-gray-800 hover:border-blue-400/50 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl neon-border-hover">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg neon-border">
                            <Briefcase className="w-6 h-6 text-black" />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-bold font-mono text-white">
                              <span className="text-blue-400">[</span>{exp.position}<span className="text-blue-400">]</span>
                            </CardTitle>
                            <p className="text-purple-400 font-semibold text-lg font-mono">{exp.company}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1 font-mono">
                          <MapPin className="w-4 h-4 text-blue-400" />
                          <span className="text-blue-400">&gt; </span>{exp.location}
                        </div>
                        <div className="flex items-center gap-1 font-mono">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span className="text-purple-400">&gt; </span>{exp.period}
                        </div>
                      </div>

                      <Badge variant="outline" className="w-fit bg-blue-400/20 text-blue-400 border-blue-400/50 font-mono neon-glow">
                        {index === 0 ? "[active]" : "[completed]"}
                      </Badge>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: index * 0.2 + achIndex * 0.1 
                            }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-300 leading-relaxed font-mono">
                              <span className="text-purple-400">&gt; </span>{achievement}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto border-2 border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Impact & Growth
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Through my experiences, I've developed strong analytical skills, leadership 
                capabilities, and a deep understanding of data-driven decision making. 
                Each role has contributed to my growth as a well-rounded professional.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
