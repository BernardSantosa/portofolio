"use client"

import { Github, Linkedin, Twitter, Download, ArrowDown } from "lucide-react"

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/johndoe", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/johndoe", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/johndoe", label: "Twitter" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">John Doe</h1>

        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-8">Senior Full-Stack Developer</h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
          I build elegant, scalable, and user-centric web applications. Passionate about clean code and creating
          exceptional digital experiences.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-card/50"
              aria-label={label}
            >
              <Icon size={28} />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToProjects}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 min-w-[180px] justify-center"
          >
            View My Work
            <ArrowDown size={18} />
          </button>

          <a
            href="/john-doe-cv.pdf"
            download
            className="border border-border hover:bg-card text-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 min-w-[180px] justify-center"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="text-muted-foreground mx-auto" size={24} />
        </div>
      </div>
    </section>
  )
}

export default Hero
