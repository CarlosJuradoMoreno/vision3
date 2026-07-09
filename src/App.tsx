import { useState } from 'react'
import Sidebar from './components/Sidebar'
import HorizontalScroll from './components/HorizontalScroll'
import NavMenu from './components/NavMenu'
import HeroSection from './components/sections/HeroSection'
import VideoSection from './components/sections/VideoSection'
import ManifestoSection from './components/sections/ManifestoSection'
import WorkSection from './components/sections/WorkSection'
import ContactSection from './components/sections/ContactSection'
import ImpressumSection from './components/sections/ImpressumSection'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const container = el.closest('.h-scroll') as HTMLElement
    container?.scrollTo({ left: el.offsetLeft, behavior: 'smooth' })
  }

  return (
    <div className="layout">
      <Sidebar onMenuOpen={() => setMenuOpen(true)} />
      <NavMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={scrollToSection}
      />
      <HorizontalScroll>
        <HeroSection />
        <VideoSection />
        <WorkSection />
        <ManifestoSection />
        <ContactSection />
        <ImpressumSection />
      </HorizontalScroll>
    </div>
  )
}

export default App


