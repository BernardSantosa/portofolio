const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/software-developer-headshot.png"
                alt="John Doe - Professional headshot"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
