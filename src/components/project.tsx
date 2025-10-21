import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const itemUpVariant: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const projects = [
    {
      image: "/Course.jpg",
      title: "RECourse",
      description:
        "A web-based course recommendation engine designed to address the skills gap in the Indonesian job market by providing with tailored international course suggestions.",
      techStack: ["TypeScript", "Tailwind CSS", "Python", "Flask", "React"],
      githubUrl: "https://github.com/BernardSantosa/Capstone-Project",
      liveUrl: "https://recourse-production.up.railway.app/",
    },
  ];

  const collabProjects = [
    {
      image: "/AI_Sal.jpg",
      title: "AI Job Salary Prediction",
      description:
        "An experiment using Google Colab on estimating salary for AI job with specified features like company size, required skill, posted date, etc. Includes EDA, preprocessing, and model training/testing.",
      techStack: ["Python", "Scikit-learn", "Google Colab"],
      liveUrl:
        "https://colab.research.google.com/drive/1vq0FfqLvLcQ2pestdlF42nlNsJc3kAiw?usp=sharing",
    },
    {
      image: "/PowerBi.png",
      title: "Coursera 2021 Data Visualization",
      description:
        "This project presents an Exploratory Data Analysis (EDA) of the Coursera 2021 dataset. Using Power BI, an interactive dashboard was created to visualize key insights, such as course popularity by domain, enrollment trends, and the distribution of difficulty levels.",
      techStack: ["Power BI"],
      liveUrl:
        "https://app.powerbi.com/groups/9330dd23-fa7e-432d-b087-effc32e74f60/reports/139e6712-143d-4a01-9b9e-df313a97bc31/f21fd9922a1ae3070913?experience=power-bi",
    },
  ];

  const allProjects = [...projects, ...collabProjects];

  return (
    <section id="projects" className="py-10 px-4 sm:px-6 lg:px-8 mb-0">
      <motion.div
        className="mx-auto"
        variants={itemUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work, demonstrating expertise across
            different technologies and domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => {
            const isExpanded = expandedIndexes.includes(index);
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} screenshot`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-black transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p
                    className={`text-muted-foreground leading-relaxed text-sm text-justify transition-all duration-300 ${
                      isExpanded ? "line-clamp-none" : "line-clamp-3"
                    }`}
                  >
                    {project.description}
                  </p>

                  <button
                    onClick={() => toggleExpanded(index)}
                    className="text-white text-sm font-medium hover:underline mb-4"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>

                  <div className="mt-auto pt-4">
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

                    <div className="flex gap-3">
                      {/* @ts-ignore */}
                      {project.githubUrl ? (
                        <>
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
                            /* @ts-ignore */
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-border hover:text-black hover:bg-white/100 text-card-foreground text-sm font-medium rounded-lg transition-colors duration-200 flex-1 justify-center"
                          >
                            <Github size={16} /> Source
                          </a>
                        </>
                      ) : (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-white/50 text-black text-sm font-medium rounded-lg transition-colors duration-200 flex-1 justify-center"
                        >
                          <ExternalLink size={16} />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/BernardSantosa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-card text-foreground font-medium rounded-lg transition-colors duration-200"
          >
            <Github size={20} /> View All Projects on GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;