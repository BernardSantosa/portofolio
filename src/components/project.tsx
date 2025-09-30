import { useState } from "react";
import { ExternalLink, Github } from "lucide-react"
import { motion, type Variants } from "framer-motion";

const itemUpVariant: Variants = {
  hidden: {y: 30, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut"}
  }
}

const Projects = () => {
    const [expanded, setExpanded] = useState(false);
    const projects = [
        {
            image: "/Course.jpg",
            title: "RECourse",
            description: "A web-based course recommendation engine designed to address the skills gap in the Indonesian job market by providing with tailored international course suggestions.",
            techStack: ["TypeScript", "Tailwind CSS", "Python", "Flask", "React"],  
            githubUrl: "https://github.com/BernardSantosa/Capstone-Project",
            liveUrl: "https://recourse-production.up.railway.app/",
        },
    ]

    return (
        <section id="projects" className="py-10 px-4 sm:px-6 lg:px-8 mb-0">
        <motion.div 
        className="mx-auto"
        variants={itemUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}>
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work, demonstrating expertise across different technologies and domains
            </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
            <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} screenshot`}
                    className= "object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-black transition-colors duration-200">
                    {project.title}
                </h3>

                <p
                className={`text-muted-foreground leading-relaxed text-sm text-justify transition-all duration-300 ${
                expanded ? "line-clamp-none" : "line-clamp-3"
                }`}>
                    {project.description}
                </p>

                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-white text-sm font-medium hover:underline mb-4"
                >
                    {expanded ? "Read less" : "Read more"}
                </button>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                    <span
                        key={techIndex}
                        className="px-2 py-1 bg-black/10 text-white text-xs font-medium rounded border border-black/20 hover:bg-white/10"
                    >
                        {tech}
                    </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-white/50 text-black text-sm font-medium rounded-lg transition-colors duration-200 flex-1 justify-center"
                    >
                    <ExternalLink size={16} />
                    Live Demo
                    </a>

                    <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-border hover:text-black hover:bg-white/100 text-card-foreground text-sm font-medium rounded-lg transition-colors duration-200 flex-1 justify-center"
                    >
                    <Github size={16} />
                    Source
                    </a>
                </div>
                </div>
            </div>
            ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
            <a
            href="https://github.com/BernardSantosa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-card text-foreground font-medium rounded-lg transition-colors duration-200"
            >
            <Github size={20} />
            View All Projects on GitHub
            </a>
        </div>
        </motion.div>
    </section>
    )
}

export default Projects
