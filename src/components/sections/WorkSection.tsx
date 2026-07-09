const categories = [
  {
    id: 'art',
    label: 'Art',
    href: '#art',
    img: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'podcast',
    label: 'Podcast',
    href: '#podcast',
    img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80&auto=format&fit=crop',
  },
  {
    id: 'fashion',
    label: 'Fashion & Design',
    href: '#fashion',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'social',
    label: 'Social',
    href: '#social',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'photo',
    label: 'Photography',
    href: '#photography',
    img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 'music',
    label: 'Music',
    href: '#music',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=80&auto=format&fit=crop',
    featured: true,
  },
]

const WorkSection = () => {
  return (
    <section className="section work-section" id="work">
      <div className="work-gallery">
        {/* Top row */}
        <a href="#art" className="gallery-card" style={{ gridArea: 'art' }}>
          <img src={categories[0].img} alt="Art" draggable={false} />
          <span className="gallery-label">Art</span>
        </a>

        <a href="#podcast" className="gallery-card" style={{ gridArea: 'podcast' }}>
          <img src={categories[1].img} alt="Podcast" draggable={false} />
          <span className="gallery-label">Podcast</span>
        </a>

        <a href="#fashion" className="gallery-card" style={{ gridArea: 'fashion' }}>
          <img src={categories[2].img} alt="Fashion & Design" draggable={false} />
          <span className="gallery-label">Fashion &amp; Design</span>
        </a>

        {/* Work title — top right */}
        <div className="gallery-title-cell" style={{ gridArea: 'title' }}>
          <h2 className="gallery-heading">Work</h2>
        </div>

        {/* Bottom row */}
        <a href="#social" className="gallery-card" style={{ gridArea: 'social' }}>
          <img src={categories[3].img} alt="Social" draggable={false} />
          <span className="gallery-label">Social</span>
        </a>

        <a href="#photography" className="gallery-card" style={{ gridArea: 'photo' }}>
          <img src={categories[4].img} alt="Photography" draggable={false} />
          <span className="gallery-label">Photography</span>
        </a>

        {/* Music — spans both rows, featured with border */}
        <a href="#music" className="gallery-card gallery-card--featured" style={{ gridArea: 'music' }}>
          <img src={categories[5].img} alt="Music" draggable={false} />
          <span className="gallery-label">Music</span>
        </a>
      </div>
    </section>
  )
}

export default WorkSection

