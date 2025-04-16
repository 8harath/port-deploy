import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialIconsProps {
  size?: number
}

export function SocialIcons({ size = 20 }: SocialIconsProps) {
  return (
    <div className="flex space-x-4">
      <Button variant="ghost" size="icon" asChild>
        <a href="https://github.com/8harath" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <Github size={size} />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a
          href="https://linkedin.com/in/bharatk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={size} />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://twitter.com/8harath" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
          <Twitter size={size} />
        </a>
      </Button>
    </div>
  )
}
