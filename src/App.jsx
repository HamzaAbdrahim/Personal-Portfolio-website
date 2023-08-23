import Hero from "./componant/Hero"
import Navbar from "./componant/Navbar"
import React from "react"
import Skills from "./componant/Skills"
import Projects from "./componant/Projects"
import Gitintach from "./componant/Gitintach"
import Footer from "./componant/Footer"
import About from "./componant/About"

function App() {
  return (
<div className="overflow-hidden">
  <div className="p-10 lg:px-20 py-4 overflow-hidden">
  <Navbar />
  </div>
  <div>
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Gitintach />
  <Footer />
  </div>
</div>
  )
}

export default App
