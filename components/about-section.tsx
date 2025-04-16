"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

      <div className="max-w-4xl mx-auto bg-card border rounded-xl overflow-hidden shadow-lg">
        <div className="p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              I'm a 2nd-year Computer Science undergraduate student with a passion for Artificial Intelligence and
              Machine Learning. My academic journey has been focused on understanding the fundamentals of AI and
              exploring its applications in solving real-world problems.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              As an active member of the Research & Development Club, I collaborate with peers on innovative projects
              that push the boundaries of what's possible with technology. My specific interests include Generative
              Models, Large Language Models (LLMs), and the ethical implications of AI.
            </p>

            <p className="text-lg leading-relaxed">
              Beyond academics, I'm fascinated by Philosophy, Cryptocurrency, and emerging Tech trends. I believe in the
              power of technology to transform lives and am committed to contributing to this transformation through my
              work and research.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Animated Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl font-bold mb-2">
                    <span className="block bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                      8+
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Animated Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl font-bold mb-2">
                    <span className="block bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                      50+
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Animated Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl font-bold mb-2">
                    <span className="block bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                      3+
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">Years Coding</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
