import Header from "./components/header"
import Hero from "./components/hero"
import About from './components/about'
import ParticlesBackground from './components/particlesBackground'
import Projects from './components/project'
import TechSkills from './components/techSkill'
import Footer from './components/footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen text-foreground">
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <TechSkills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App