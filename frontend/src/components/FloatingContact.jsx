import Draggable from 'react-draggable'
import { MessageCircle, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

const FloatingContact = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Draggable>
      <div className="fixed bottom-6 right-6 z-50 cursor-move">
        <div className="relative">
          {/* Expanded Menu */}
          {expanded && (
            <div className="absolute bottom-20 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 space-y-3 animate-fadeIn">
              <a
                href="https://wa.me/254712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
              >
                <MessageCircle size={20} />
                <span className="font-semibold">WhatsApp</span>
              </a>
              <a
                href="tel:+254712345678"
                className="flex items-center gap-3 px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
              >
                <Phone size={20} />
                <span className="font-semibold">Call Us</span>
              </a>
              <a
                href="mailto:info@poultrymarket.co.ke"
                className="flex items-center gap-3 px-4 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
              >
                <Mail size={20} />
                <span className="font-semibold">Email</span>
              </a>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 p-5 rounded-full shadow-2xl text-white hover:scale-110 transition-transform duration-300 animate-bounce"
          >
            <MessageCircle size={28} />
          </button>
        </div>
      </div>
    </Draggable>
  )
}

export default FloatingContact
