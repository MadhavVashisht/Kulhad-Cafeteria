import Particles from './components/Particles';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Founders from './components/Founders'
import Timeline from './components/Timeline'
import FranchiseModels from './components/FranchiseModels'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-kulhad-dark">
      <Particles />

      <Navbar />
      <Hero />
      <About />
      <Founders />
      <Timeline />
      <FranchiseModels />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App