import { useEffect, useRef, useState } from 'react'

// Wraps a section and fades/slides it in the first time it scrolls into view.
export default function Reveal({ children, className = '' }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(node)
                }
            },
            { threshold: 0, rootMargin: '0px 0px -80px 0px' },
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className={`reveal${visible ? ' is-visible' : ''} ${className}`}>
            {children}
        </div>
    )
}