const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="section contact-section" id="contact">
      <h2 className="contact-heading">Let's work together</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" autoComplete="name" />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>

        <div className="form-field">
          <label htmlFor="fecha">Fechas/Deadline</label>
          <input id="fecha" name="fecha" type="text" />
        </div>

        <div className="form-field">
          <label htmlFor="preguntas">Preguntas</label>
          <input id="preguntas" name="preguntas" type="text" />
        </div>

        <div className="form-field">
          <label htmlFor="descripcion">Descripción breve del proyecto:</label>
          <textarea id="descripcion" name="descripcion" rows={5} />
        </div>

        <button type="submit" className="form-submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactSection

