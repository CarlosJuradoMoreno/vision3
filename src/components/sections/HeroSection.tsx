const HeroSection = () => {
  return (
    <section className="section" id="hero">
      {/* Background concert photo */}
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1800&q=85&auto=format&fit=crop"
          alt="Live concert"
          draggable={false}
        />
        <div className="hero-overlay" />
      </div>

      {/* Main headline */}
      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="line-serif">Not just videographies</span>
          <span className="line-bold">Not any vision</span>
        </h1>
      </div>

      {/* Photo caption */}
      <p className="hero-caption">Pinches Perros Live — NRW-Tag Köln</p>

      {/* Purple CTA circle */}
      <div className="hero-cta">
        <button className="circle-btn" aria-label="View showreel">
          <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
            <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="2" />
            <circle cx="24" cy="24" r="9" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>Scroll or drag</span>
        <span className="scroll-hint-arrow">→</span>
      </div>
    </section>
  )
}

export default HeroSection
