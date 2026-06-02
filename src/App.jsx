import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="bg-black text-white">

      <Nav />

      <Home />
     <About />

      <Skills />

      <Projects />

      <Contact />

    </div>
  )
}

export default App