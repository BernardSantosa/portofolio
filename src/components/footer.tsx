import { Github, Linkedin } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/BernardSantosa", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/bernard-santosa/", label: "LinkedIn" },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex space-x-6 mb-0">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-card/50"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-sm">© {currentYear} Bernard Santosa. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
