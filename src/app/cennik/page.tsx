import Link from "next/link";

export const metadata = {
  title: "Cennik | Power Performance - Studio Treningowe Zielonka",
  description: "Cennik treningów personalnych, medycznych, przygotowania motorycznego i zajęć grupowych. Pakiety treningowe dopasowane do Twoich potrzeb.",
};

const packages = [
  {
    name: "Trening Personalny",
    description: "Indywidualne treningi z trenerem dopasowane do Twoich celów",
    features: [
      "Analiza celów i potrzeb",
      "Indywidualny plan treningowy",
      "Pełne wsparcie trenera",
      "Monitorowanie postępów",
      "Korekta techniki",
    ],
    cta: "Zapytaj o cenę",
    popular: true,
  },
  {
    name: "Trening Medyczny",
    description: "Specjalistyczne treningi dla osób z problemami zdrowotnymi",
    features: [
      "Konsultacja wstępna",
      "Współpraca z lekarzami",
      "Bezpieczne ćwiczenia",
      "Stopniowy powrót do formy",
      "Rehabilitacja ruchowa",
    ],
    cta: "Zapytaj o cenę",
    popular: false,
  },
  {
    name: "Przygotowanie Motoryczne",
    description: "Treningi dla sportowców na każdym poziomie",
    features: [
      "Analiza sportowa",
      "Trening siły i mocy",
      "Poprawa szybkości",
      "Zwiększenie wydolności",
      "Prewencja kontuzji",
    ],
    cta: "Zapytaj o cenę",
    popular: false,
  },
];

const groupClasses = [
  {
    name: "Wejście jednorazowe",
    description: "Pojedyncze wejście na zajęcia grupowe fitness",
  },
  {
    name: "Karnet 4 wejścia",
    description: "Pakiet 4 wejść na zajęcia grupowe",
  },
  {
    name: "Karnet 8 wejść",
    description: "Pakiet 8 wejść na zajęcia grupowe",
  },
  {
    name: "Karnet miesięczny",
    description: "Nielimitowane wejścia przez miesiąc",
  },
];

export default function CennikPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#15A727]/20 rounded-full text-sm font-medium text-[#15A727] mb-6">
            Cennik
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pakiety <span className="gradient-text">Treningowe</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Oferujemy kompleksowe wsparcie dostosowane do Twoich potrzeb i celów. Skontaktuj się z nami po szczegółowy cennik.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Treningi Indywidualne
            </h2>
            <p className="text-lg text-gray-600">
              Pełne wsparcie trenera i indywidualnie dopasowany plan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-3xl p-8 ${
                  pkg.popular
                    ? 'border-2 border-[#15A727] shadow-xl'
                    : 'border border-gray-200 shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#15A727] to-[#1863DC] text-white text-sm font-semibold rounded-full">
                    Najpopularniejszy
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#15A727] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className={`block text-center py-4 rounded-full font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#15A727] to-[#1863DC] text-white hover:shadow-lg hover:shadow-green-500/30'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-[#15A727] hover:text-[#15A727]'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Classes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Zajęcia Grupowe Fitness
            </h2>
            <p className="text-lg text-gray-600">
              Aktualne ceny zajęć grupowych znajdziesz na naszym Instagramie
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {groupClasses.map((item) => (
              <div
                key={item.name}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#15A727] transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/studiopower_performance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Sprawdź ceny na Instagramie
            </a>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Dietetyka</h3>
              <p className="opacity-90 mb-6">
                Kompleksowe wsparcie żywieniowe i indywidualne plany dietetyczne.
              </p>
              <Link
                href="/dietetyka"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
              >
                Dowiedz się więcej
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Plany Treningowe</h3>
              <p className="opacity-90 mb-6">
                Indywidualne plany treningowe do samodzielnej realizacji.
              </p>
              <Link
                href="/oferta/plany-treningowe"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
              >
                Dowiedz się więcej
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Masz pytania o cennik?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Skontaktuj się z nami, aby otrzymać szczegółową ofertę dopasowaną do Twoich potrzeb.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#15A727] to-[#1863DC] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Skontaktuj się
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
