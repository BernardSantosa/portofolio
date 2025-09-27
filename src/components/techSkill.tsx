import { motion, type Variants } from "framer-motion"

const itemUpVariant: Variants = {
  hidden: {y: 30, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut"}
  }
}

const itemDownVariant: Variants = {
  hidden: {y: -30, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut"}
  }
}

const TechSkills = () => {
    const techCategory = [
        {
            Category: "Programming Languages",
            Tech: ["Python", "Java", "C", "TypeScript", "HTML/CSS", "PHP Native"]
        },
        {
            Category: "Frameworks",
            Tech: ["React", "Flask", "Scikit-learn", "Pandas", "Laravel", "TailwindCSS"],
        },
        {
            Category: "Tools & DevOps",
            Tech: ["Vite", "Git", "GitHub", "Google Colab" ],
        },
    ]

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div 
            className="text-center mb-16"
            variants={itemDownVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">My Tech Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Technologies and tools I use to bring ideas to life and build scalable applications
            </p>
            </motion.div>

            {/* Tech Categories */}
            <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={itemUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}>
            {techCategory.map((category, index) => (
                <div key={index} className="space-y-6">
                <h3 className="text-xl font-semibold text-primary mb-4">{category.Category}</h3>

                <div className="flex flex-wrap gap-3 justify-center">
                    {category.Tech.map((skill, skillIndex) => (
                    <span
                        key={skillIndex}
                        className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-card-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
                    >
                        {skill}
                    </span>
                    ))}
                </div>
                </div>
            ))}
            </motion.div>
        </div>
    </section>
    )
}

export default TechSkills