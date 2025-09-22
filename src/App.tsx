import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from "./components/header"
import Hero from "./components/hero"
import About from './components/about'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* <Hero /> */}
        {/* <About /> */}
      </main>
    </div>
  )
}

export default App