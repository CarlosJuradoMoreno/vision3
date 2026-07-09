import { useRef, useEffect, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const HorizontalScroll = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      el.scrollLeft += e.deltaY + e.deltaX
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current
    if (!el) return
    isDown.current = true
    el.classList.add('grabbing')
    startX.current = e.pageX - el.offsetLeft
    scrollLeft.current = el.scrollLeft
  }

  const onMouseLeave = () => {
    isDown.current = false
    containerRef.current?.classList.remove('grabbing')
  }

  const onMouseUp = () => {
    isDown.current = false
    containerRef.current?.classList.remove('grabbing')
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return
    e.preventDefault()
    const el = containerRef.current
    if (!el) return
    const x = e.pageX - el.offsetLeft
    const walk = (x - startX.current) * 1.4
    el.scrollLeft = scrollLeft.current - walk
  }

  return (
    <div
      className="h-scroll"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <div className="sections-track">{children}</div>
    </div>
  )
}

export default HorizontalScroll
