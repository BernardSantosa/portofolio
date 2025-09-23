const TechSkills = () => {
    const techCategory = [
        {
            Category: "Programming Languages",
            Tech: ["C", "PHP (Native)", "HTML", "CSS", "JavaScript (for web)", "TypeScript (with React+Vite)", "Python"],
        },
        {
            Category: "Frameworks",
            Tech: ["Laravel", "React (TypeScript, Vite)", "JavaScript"],
        },
        {
            Category: "Tools & DevOps",
            Tech: ["Git", "MySQL"],
        },
    ]

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">My Tech Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Technologies and tools I use to bring ideas to life and build scalable applications
            </p>
            </div>

            {/* Tech Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            </div>
        </div>
    </section>
    )
}

export default TechSkills