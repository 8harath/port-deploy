"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Bitcoin, BookOpen, Headphones, Brain } from "lucide-react"

const interests = [
  {
    title: "Cryptocurrency",
    description:
    "I'm that friend who won't shut up about blockchain. Been diving into DeFi and smart contracts—basically trying to figure out if this stuff is the future of money or just digital magic beans.",
    icon: Bitcoin,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Philosophy",
    description:
    "When I'm feeling extra intellectual, you'll find me going down existentialism rabbit holes. I'm weirdly obsessed with where philosophy meets tech—like, are we living in a simulation? (And if we are, who wrote this buggy code?)",
    icon: Brain,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Reading",
    description:
    "My bookshelf is a weird mix of sci-fi adventures, mind-bending philosophy, and tech manuals. Always hunting for the next book that'll make me say 'wait, what?' at least five times.",
    icon: BookOpen,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Podcasts",
    description:
    "My commute buddy? Podcasts about crazy tech innovations and big philosophical questions. Nothing beats learning something mind-blowing while stuck in traffic or pretending to exercise.",
    icon: Headphones,
    color: "from-purple-500 to-violet-600",
  },
]

export function PersonalInterests() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest, index) => {
          const Icon = interest.icon

          return (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-transparent">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                </div>

                <CardHeader className="pt-4 pb-2">
                  <h3 className="text-xl font-semibold">{interest.title}</h3>
                </CardHeader>

                <CardContent className="pb-4">
                  <p className="text-muted-foreground text-sm">{interest.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="max-w-3xl mx-auto bg-muted/30 p-6 rounded-lg border border-white">
        <h3 className="text-xl font-semibold mb-4 text-center">A Personal Note</h3>
        <p className="text-muted-foreground italic text-center">
          "Being a tech specialist is cool and all, but I've realized that knowing about different stuff helps me see the big picture better. I'm connecting dots across all these random interests, which is why my hobbies are all over the place. It's like having multiple browser tabs open in my brain—somehow it all works together!"
        </p>
        <p className="text-right mt-2 font-medium">— Bharath K</p>
      </div>
    </div>
  )
}
