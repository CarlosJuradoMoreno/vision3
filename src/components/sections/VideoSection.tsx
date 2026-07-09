const VideoSection = () => {
  return (
    <section className="section video-section" id="video">
      {/* Placeholder background */}
      <div className="video-placeholder">
        <div className="video-play-btn" aria-label="Play showreel">
          <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
            <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="1.5" opacity="0.4" />
            <polygon points="32,24 60,40 32,56" fill="white" />
          </svg>
        </div>

        <div className="video-label">
          <span className="video-tag">Showreel</span>
          <span className="video-year">2024 — 2025</span>
        </div>

        <p className="video-hint">Replace this placeholder with your <code>&lt;video&gt;</code> or embed</p>
      </div>
    </section>
  )
}

export default VideoSection
