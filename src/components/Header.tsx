import { useState, useRef, useEffect } from "react"
import Icon from "@/components/ui/icon"

export default function Header() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">Фотограф Самара / Каролина</div>
        <nav className="flex gap-8 items-center">
          <a
            href="https://www.instagram.com/withkarolinaa?igsh=MWp3YXNvczk4aDB4dw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Портфолио
          </a>

          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen(!open)}
              className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm cursor-pointer"
            >
              Контакты
            </button>

            {open && (
              <div className="absolute right-0 top-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 min-w-[220px] flex flex-col gap-3">
                <a
                  href="tel:+79878161270"
                  className="flex items-center gap-3 text-white text-sm hover:text-white/70 transition-colors"
                >
                  <Icon name="Phone" size={16} />
                  +7 987 816 12 70
                </a>
                <a
                  href="https://www.instagram.com/withkarolinaa?igsh=MWp3YXNvczk4aDB4dw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white text-sm hover:text-white/70 transition-colors"
                >
                  <Icon name="Instagram" size={16} />
                  Instagram
                </a>
                <a
                  href="https://t.me/karolliinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white text-sm hover:text-white/70 transition-colors"
                >
                  <Icon name="Send" size={16} />
                  Telegram
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
