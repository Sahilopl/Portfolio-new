"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Award, 
  Trophy, 
  BookOpen, 
  Calendar,
  Star,
  Crown
} from "lucide-react"
import { awards } from "@/data/portfolio-data"

const getAwardIcon = (title: string) => {
  if (title.toLowerCase().includes('winner') || title.toLowerCase().includes('award')) {
    return Trophy
  }
  if (title.toLowerCase().includes('certified') || title.toLowerCase().includes('certification')) {
    return BookOpen
  }
  return Award
}

const getAwardColor = (index: number) => {
  const colors = [
    "bg-yellow-100 text-yellow-600 border-yellow-200",
    "bg-blue-100 text-blue-600 border-blue-200", 
    "bg-green-100 text-green-600 border-green-200",
    "bg-purple-100 text-purple-600 border-purple-200",
  ]
  return colors[index % colors.length]
}

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Awards & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Recognition and certifications that validate my expertise and contributions 
            to the field of computer science and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {awards.map((award, index) => {
            const IconComponent = getAwardIcon(award.title)
            const colorClass = getAwardColor(index)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className={`p-3 rounded-lg ${colorClass} group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                          {award.title}
                        </CardTitle>
                        <p className="text-blue-600 font-semibold text-base mb-2">
                          {award.organization}
                        </p>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-600 dark:text-slate-400 text-sm">
                            {award.year}
                          </span>
                          <Badge variant="secondary" className="ml-auto">
                            {award.year === "2025" ? "Recent" : "Achieved"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Crown className="w-6 h-6 text-yellow-600" />
                  </div>
                  <span className="text-slate-900 dark:text-white">Competition Wins</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Winner of prestigious competitions including JP Morgan Chase Code for Good, 
                  demonstrating excellence in coding, problem-solving, and innovative thinking.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-slate-900 dark:text-white">Professional Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Oracle Certified Professional in Java SE 11, validating advanced programming 
                  skills and deep understanding of enterprise-level software development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto border-2 border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Continuous Achievement
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                These achievements reflect my commitment to excellence and continuous learning. 
                I actively seek opportunities to challenge myself and contribute meaningfully 
                to the tech community.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
