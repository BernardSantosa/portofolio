import { motion, type Variants } from "framer-motion"; 
import myPhoto from '/MySelfPhoto.jpeg';

const About = () => {
  const imageVariants: Variants = {
    hidden: { x: -100, opacity: 0 }, 
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const contentVariants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible" // 
            viewport={{ amount: 0.3 }}
          >
            <div className="relative">
              <img
                src={myPhoto}
                alt="Bernard Photo"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="space-y-6"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg text-justify">
                Hello! I'm Bernard Santosa, a third-year Computer Science student at Bina Nusantara University, focusing on the Intelligent Systems (AI) stream.
                <br /><br />
                I have a strong interest in exploring Artificial Intelligence and Machine Learning concepts such as neural networks and data analysis.
                Besides AI, I’m also passionate about software engineering, especially backend development. My main goal is to build solutions that address real-world problems.
                I am committed to writing clean, efficient code and enjoy working collaboratively to bring ideas to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;