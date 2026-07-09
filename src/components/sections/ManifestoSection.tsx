const ManifestoSection = () => {
  return (
    <section className="section manifesto-section" id="manifesto">

      {/* "Manifesto" title — top right */}
      <h2 className="manifesto-heading">Manifesto</h2>

      {/* About block */}
      <div className="manifesto-about">
        <div className="manifesto-photo">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=700&q=80&auto=format&fit=crop"
            alt="Vision-3 founders"
            draggable={false}
          />
        </div>
        <div className="manifesto-text">
          <p>
            In 2020 we founded Vision_3 to realize our very own vision:
            Communicate artistic concepts, present artworks worth being shared
            and translate outstanding ideas into high quality video productions.
          </p>
          <p>
            We come prepared: One studied audiovisual communication at the
            University of Seville. The other studied cultural sciences and
            journalism in Maastricht.
          </p>
          <p>To dig deeper check out our social media.</p>
        </div>
      </div>

      {/* Services cloud */}
      <div className="manifesto-services">
        <h3 className="services-heading">Services</h3>

        <div className="services-cloud">
          <span className="svc svc--lg svc--pos1">Expositions</span>
          <span className="svc svc--xl svc--pos2">Videoclips</span>
          <span className="svc svc--lg svc--pos4">Performances</span>
          <span className="svc svc--xl svc--pos5">Expositions</span>
        </div>
      </div>

    </section>
  )
}

export default ManifestoSection
