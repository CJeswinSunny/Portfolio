import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { CursorTrail } from "./components/CursorTrail"
import Dither from "./components/Dither"

function App() {
  return (
    <div className="min-h-screen text-foreground font-sans antialiased selection:bg-primary/20 relative">
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
      <div className="z-10 relative">
        <CursorTrail />
        <Navbar />
        <Hero />
        <main>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
