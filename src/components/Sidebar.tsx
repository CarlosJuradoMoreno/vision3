interface Props {
  onMenuOpen: () => void
}

const Sidebar = ({ onMenuOpen }: Props) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <svg viewBox="0 0 44 44" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="20" stroke="white" strokeWidth="1.5" />
          <circle cx="22" cy="22" r="9" stroke="white" strokeWidth="1.5" />
          <circle cx="22" cy="22" r="3" fill="white" />
        </svg>
      </div>

      <button className="sidebar-menu" aria-label="Menu" onClick={onMenuOpen}>
        <span />
        <span />
        <span />
      </button>

      <div className="sidebar-brand">
        <span className="brand-name">VISION—3</span>
        <span className="brand-sub">Media Production Gbr</span>
      </div>
    </aside>
  )
}

export default Sidebar
