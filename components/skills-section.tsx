"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["Python", "Java", "SQL", "C++", "C"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["TensorFlow", "PyTorch", "React", "Node.js",],
  },
  {
    name: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "Jupyter", "VS Code"],
  },
  {
    name: "Areas of Interest",
    skills: [
      "Machine Learning",
      "Natural Language Processing",
      "Generative AI",
      "Computer Vision",
      "Reinforcement Learning",
      "Data Analysis",
      "Data Visualization",
      "Web Development",
    ],
  },
]

export function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-card border"
        >
          <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="px-3 py-1 text-sm hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
