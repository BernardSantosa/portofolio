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
              <p className="text-lg">
                With over 8 years of experience in full-stack development, I specialize in building modern web
                applications that combine beautiful user interfaces with robust backend systems. My journey in
                technology began with a Computer Science degree, and I've since worked with startups and enterprise
                companies alike.
              </p>

              <p className="text-lg">
                I'm passionate about writing clean, maintainable code and staying up-to-date with the latest
                technologies. My expertise spans across React, Node.js, TypeScript, and cloud platforms, allowing me to
                deliver end-to-end solutions that scale.
              </p>

              <p className="text-lg">
                When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers,
                or exploring new technologies. I believe in continuous learning and sharing knowledge with the developer
                community.
              </p>

              <p className="text-lg">
                I'm currently seeking opportunities where I can leverage my technical skills to build innovative
                products that make a real impact. I thrive in collaborative environments and enjoy working with
                cross-functional teams to bring ideas to life.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="text-primary font-semibold text-lg mb-2">8+ Years</h3>
                <p className="text-muted-foreground">Professional Development Experience</p>
              </div>

              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="text-primary font-semibold text-lg mb-2">50+ Projects</h3>
                <p className="text-muted-foreground">Successfully Delivered</p>
              </div>

              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="text-primary font-semibold text-lg mb-2">Full-Stack</h3>
                <p className="text-muted-foreground">Frontend & Backend Expertise</p>
              </div>

              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="text-primary font-semibold text-lg mb-2">Open Source</h3>
                <p className="text-muted-foreground">Active Community Contributor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
