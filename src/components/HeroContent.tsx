import { useState } from "react"
import InfoModal from "@/components/InfoModal"

export default function HeroContent() {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <>
      <main className="absolute bottom-8 left-8 z-20 max-w-lg">
        <div className="text-left">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
            <span className="font-medium italic">Живые</span> кадры
            <br />
            <span className="font-light tracking-tight text-white">которые остаются с вами</span>
          </h1>

          {/* Description */}
          <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
            Снимаю портреты, love story. Ловлю настоящие эмоции и превращаю их в фотографии, к которым хочется возвращаться снова и снова.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a href="https://www.instagram.com/withkarolinaa?igsh=MWp3YXNvczk4aDB4dw==" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
              Портфолио
            </a>
            <a href="https://www.instagram.com/withkarolinaa?igsh=MWp3YXNvczk4aDB4dw==" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
              Заказать съёмку
            </a>
            <button
              onClick={() => setShowInfo(true)}
              className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
            >
              Обо мне и цены
            </button>
          </div>
        </div>
      </main>

      {showInfo && <InfoModal onClose={() => setShowInfo(false)} />}
    </>
  )
}