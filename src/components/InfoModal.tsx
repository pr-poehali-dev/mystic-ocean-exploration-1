import { useEffect } from "react"
import Icon from "@/components/ui/icon"

interface InfoModalProps {
  onClose: () => void
}

export default function InfoModal({ onClose }: InfoModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        {/* Обо мне */}
        <div className="mb-8">
          <h2 className="text-white text-xl font-medium mb-4">Привет!</h2>
          <p className="text-white/80 text-sm leading-relaxed mb-3">
            Меня зовут Каролина, я женский фотограф из Самары. Я создаю спокойные и естественные фотографии для девушек, которым близка мягкая эстетика и живые эмоции.
          </p>
          <p className="text-white/80 text-sm leading-relaxed mb-3">
            На моих съёмках не нужно уметь позировать. Я всегда подсказываю, помогаю расслабиться перед камерой и создаю комфортную атмосферу.
          </p>
          <p className="text-white/90 text-sm leading-relaxed">
            ✨ Моя задача — не просто сделать красивые кадры, а помочь вам увидеть себя красивой и настоящей.
          </p>
        </div>

        {/* Стоимость */}
        <h3 className="text-white text-lg font-medium mb-4 uppercase tracking-wide">Стоимость</h3>

        <div className="grid gap-4 mb-8">
          {/* Студийная */}
          <div className="bg-white/5 border border-white/15 rounded-2xl p-5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wide">Студийная</p>
                <p className="text-white text-lg font-medium">Съёмка</p>
              </div>
              <span className="text-white text-xl font-light">3 000 ₽</span>
            </div>
            <p className="text-white/60 text-xs mb-3">Если хочется спокойной атмосферы, минимализма и мягкого света в любое время года.</p>
            <ul className="text-white/75 text-xs space-y-1">
              <li>• Помощь с позированием и выбором образа</li>
              <li>• Помощь с подбором студии</li>
              <li>• 1 час съёмки</li>
              <li>• 25+ фотографий в авторской обработке и ретуши (цвет + ч/б)</li>
              <li>• Готовность фото до 5 дней</li>
              <li className="text-white/50">* Аренда студии оплачивается отдельно</li>
            </ul>
          </div>

          {/* Уличная */}
          <div className="bg-white/5 border border-white/15 rounded-2xl p-5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wide">Уличная</p>
                <p className="text-white text-lg font-medium">Съёмка</p>
              </div>
              <span className="text-white text-xl font-light">3 500 ₽</span>
            </div>
            <p className="text-white/60 text-xs mb-3">Если вы хотите сохранить период жизни, давно мечтали о красивых фото или любите естественный свет.</p>
            <ul className="text-white/75 text-xs space-y-1">
              <li>• Помощь с позированием и выбором образа</li>
              <li>• Помощь с подбором локации</li>
              <li>• 1–1,5 часа съёмки</li>
              <li>• 30+ фотографий в авторской обработке и ретуши (цвет + ч/б)</li>
              <li>• Готовность фото до 5 дней</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 border border-white/15 rounded-2xl p-4 mb-8 text-center">
          <p className="text-white/90 text-sm">❤️ Повторная съёмка — скидка <strong>500 ₽</strong></p>
        </div>

        {/* Бронирование */}
        <h3 className="text-white text-lg font-medium mb-4 uppercase tracking-wide">Условия бронирования</h3>
        <ul className="text-white/75 text-xs space-y-2 mb-8">
          <li>• Для бронирования даты необходимо внести предоплату <strong className="text-white">1 000 ₽</strong></li>
          <li>• Предоплата включает: обсуждение идеи, подбор образов, выбор локации, поиск референсов</li>
          <li>• Оставшаяся часть оплаты вносится в день съёмки</li>
          <li>• Дату можно перенести один раз без потери предоплаты</li>
          <li>• При отмене съёмки предоплата не возвращается</li>
        </ul>

        {/* Важно */}
        <h3 className="text-white text-lg font-medium mb-4 uppercase tracking-wide">Важно</h3>
        <ul className="text-white/75 text-xs space-y-2 mb-8">
          <li>• Записываясь на фотосессию, вы соглашаетесь с авторской обработкой</li>
          <li>• Мои работы — естественность, мягкость, лёгкая зернистость и живые эмоции</li>
          <li>• Ретушь деликатная: убираю временные высыпания, торчащие нитки, при необходимости корректирую макияж</li>
          <li>• Исходные фотографии не передаются</li>
          <li>• Готовые фото отправляются ссылкой на Яндекс Диск, хранится 1 месяц</li>
          <li>• Если для вас важна конфиденциальность и вы не хотите публикации фотографий в моём портфолио, пожалуйста, сообщите об этом заранее</li>
        </ul>

        <a
          href="https://www.instagram.com/withkarolinaa?igsh=MWp3YXNvczk4aDB4dw=="
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90"
        >
          Заказать съёмку
        </a>
      </div>
    </div>
  )
}