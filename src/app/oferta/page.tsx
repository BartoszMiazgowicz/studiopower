import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Oferta | Power Performance - Treningi Personalne Zielonka",
  description: "Kompleksowa oferta treningów: personalne, medyczne, przygotowanie motoryczne, zajęcia grupowe, plany treningowe i wsparcie dietetyczne.",
};

const services = [
  {
    title: "Trening medyczny",
    description: "Indywidualny, bezpieczny trening ukierunkowany na zdrowie i sprawność. Przeznaczony dla osób z bólem, po urazach, z wadami postawy lub prowadzących siedzący tryb życia.",
    image: "/images/LP7A7110.jpeg",
    href: "/oferta/treningi-medyczne",
    features: ["Poprawa funkcjonowania ciała", "Redukcja dolegliwości bólowych", "Wzmocnienie osłabionych obszarów", "Prawidłowe wzorce ruchu"],
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Treningi Personalne",
    description: "Osiągnij wymarzoną sylwetkę z trenerem, który dopasuje plan do Twoich celów. Treningi dla każdego - od początkujących po zaawansowanych.",
    image: "/images/LP7A6909.jpeg",
    href: "/oferta/treningi-personalne",
    features: ["Kształtowanie sylwetki", "Poprawa kondycji", "Treningi dla kobiet w ciąży", "Budowa masy mięśniowej"],
    color: "from-[#15A727] to-emerald-600",
  },
  {
    title: "Przygotowanie Motoryczne",
    description: "Zwiększ siłę, szybkość i wydolność dla lepszych wyników sportowych. Program dla zawodowców i amatorów.",
    image: "/images/LP7A7141.jpeg",
    href: "/oferta/przygotowanie-motoryczne",
    features: ["Siła i moc", "Szybkość i zwinność", "Wytrzymałość", "Prewencja kontuzji"],
    color: "from-[#1863DC] to-blue-600",
  },
  {
    title: "Zajęcia Grupowe Fitness",
    description: "Dynamiczne treningi w grupie pełnej motywacji i pozytywnej energii. Różnorodność programów dla każdego poziomu.",
    image: "/images/LP7A7077.jpeg",
    href: "/oferta/zajecia-grupowe",
    features: ["Cardio", "Trening siłowy", "Spalanie kalorii", "Motywująca atmosfera"],
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Plany Treningowe",
    description: "Indywidualny plan dopasowany do Twojego stylu życia, celów i poziomu zaawansowania. Treningi na własną rękę ze wsparciem trenera.",
    image: "/images/LP7A6877.jpeg",
    href: "/oferta/plany-treningowe",
    features: ["Plan na miarę", "Wsparcie online", "Regularne aktualizacje", "Dostęp do trenera"],
    color: "from-orange-500 to-amber-500",
  },
];

export default function OfertaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#15A727]/20 rounded-full text-sm font-medium text-[#15A727] mb-6">
            Nasza Oferta
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Kompleksowe Wsparcie <span className="gradient-text">Dla Ciebie</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kameralne studio ~400 m², bez tłumów. Wybierz usługę dopasowaną do Twoich potrzeb i zacznij swoją drogę do lepszej formy.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} bg-gradient-to-r ${service.color} p-4 rounded-2xl`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    Dowiedz się więcej
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doradztwo żywieniowe CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Doradztwo żywieniowe
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Kompleksowe doradztwo żywieniowe dopasowane do Twoich celów. Plany żywieniowe, które uwzględniają Twój styl życia.
            </p>
            <Link
              href="/dietetyka"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Zobacz ofertę żywieniową
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Nie wiesz, co wybrać?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Umów się na bezpłatną konsultację, a pomożemy dobrać najlepszą opcję dla Ciebie.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#15A727] to-[#1863DC] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Umów konsultację
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
