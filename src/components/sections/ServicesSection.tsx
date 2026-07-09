const services = [
  {
    number: '01',
    name: 'Live Events',
    desc: 'Full multi-camera coverage of concerts, festivals and corporate live experiences.',
  },
  {
    number: '02',
    name: 'Music Videos',
    desc: 'Cinematic storytelling that amplifies your sound into a visual identity.',
  },
  {
    number: '03',
    name: 'Corporate',
    desc: 'Brand films, testimonials and internal communications crafted with impact.',
  },
  {
    number: '04',
    name: 'Post Production',
    desc: 'Color grading, sound design and motion graphics — from raw to release.',
  },
]

const ServicesSection = () => {
  return (
    <section className="section services-section">
      <p className="section-label">What we do</p>
      <h2 className="section-title">Our Services</h2>

      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.number}>
            <div className="service-number">{s.number}</div>
            <div className="service-name">{s.name}</div>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
