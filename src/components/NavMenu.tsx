interface Props {
  isOpen: boolean
  onClose: () => void
  onNavigate: (sectionId: string) => void
}

const navItems = [
  { label: 'Work',        sectionId: 'work'      },
  { label: 'Manifesto',   sectionId: 'manifesto' },
  { label: "Let's work",  sectionId: 'contact'   },
  { label: 'Impressum',   sectionId: 'impressum' },
]

const NavMenu = ({ isOpen, onClose, onNavigate }: Props) => {
  const handleClick = (sectionId: string) => {
    onNavigate(sectionId)
    onClose()
  }

  return (
    <div className={`nav-overlay${isOpen ? ' nav-overlay--open' : ''}`}>
      <button className="nav-close" onClick={onClose} aria-label="Close menu">
        ✕
      </button>

      <nav className="nav-items">
        {navItems.map((item, i) => (
          <button
            key={item.sectionId}
            className="nav-item"
            style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
            onClick={() => handleClick(item.sectionId)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default NavMenu

