import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative">
      {/* Lime gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Power Performance"
              width={120}
              height={48}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              Kameralne studio treningowe w Zielonce. Indywidualne podejście, profesjonalni trenerzy, prawdziwe rezultaty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-5">Nawigacja</h4>
            <ul className="space-y-3">
              {['O nas', 'Oferta', 'Trenerzy', 'Opinie', 'Kontakt'].map((item) => (
                <li key={item}>
                  <span className="text-gray-500 hover:text-lime-400 transition-colors text-sm cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-5">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-500">
                Stanislawa Staszica 58<br />
                1 pietro, 05-220 Zielonka
              </p>
              <a href="tel:+48696470426" className="block text-gray-500 hover:text-lime-400 transition-colors">
                +48 696 470 426
              </a>
              <a href="mailto:studiopowerperformance@gmail.com" className="block text-gray-500 hover:text-lime-400 transition-colors break-all">
                studiopowerperformance@gmail.com
              </a>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-5">Godziny otwarcia</h4>
            <div className="space-y-2 text-sm text-gray-500 mb-6">
              <div className="flex justify-between">
                <span>Pn - Pt</span>
                <span className="text-gray-400">6:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sb - Nd</span>
                <span className="text-gray-400">8:00 - 20:00</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/studiopower_performance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-xl hover:bg-lime-500 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Studiotreningowepowerperformance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-xl hover:bg-lime-500 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Power Performance. Wszelkie prawa zastrzezone.
          </p>
        </div>
      </div>
    </footer>
  );
}
