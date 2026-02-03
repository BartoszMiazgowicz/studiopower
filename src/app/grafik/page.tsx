import Link from "next/link";

export const metadata = {
  title: "Grafik | Power Performance - Studio Treningowe Zielonka",
  description: "Aktualny grafik zajęć grupowych fitness. Zapisz się online i dołącz do naszych treningów.",
};

const partnerCards = [
  "MultiSport",
  "FitProfit",
  "Medicover Sport",
  "PZU Sport",
];

export default function GrafikPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#15A727]/20 rounded-full text-sm font-medium text-[#15A727] mb-6">
            Grafik
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Grafik <span className="gradient-text">Zajęć</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Aktualny harmonogram zajęć grupowych znajdziesz na naszym Instagramie. Grafik jest regularnie aktualizowany.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Instagram CTA */}
          <div className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-3xl p-8 md:p-12 text-center text-white mb-12">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Aktualny grafik na Instagramie
            </h2>
            <p className="text-white/90 mb-8 max-w-lg mx-auto">
              Regularnie publikujemy aktualny harmonogram zajęć grupowych. Śledź nas, żeby nie przegapić żadnych treningów!
            </p>
            <a
              href="https://www.instagram.com/studiopower_performance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              @studiopower_performance
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Booking System */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-[#15A727] to-[#1863DC] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Zapisz się online
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Korzystamy z systemu rezerwacji online. Zapisz się na zajęcia w kilka kliknięć!
            </p>
            <a
              href="https://fitssey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#15A727] to-[#1863DC] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Przejdź do rezerwacji
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Partner Cards */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Honorujemy karty partnerskie
              </h2>
              <p className="text-gray-600">
                Na zajęcia grupowe fitness możesz wejść korzystając z popularnych kart sportowych.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {partnerCards.map((card) => (
                <div
                  key={card}
                  className="p-4 bg-gray-50 rounded-xl text-center font-medium text-gray-700"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Training Note */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Treningi personalne
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Treningi personalne i medyczne odbywają się według indywidualnie ustalonych terminów. Skontaktuj się z nami, aby umówić dogodny termin.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#15A727] text-[#15A727] font-semibold rounded-full hover:bg-[#15A727] hover:text-white transition-all duration-300"
          >
            Skontaktuj się
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
