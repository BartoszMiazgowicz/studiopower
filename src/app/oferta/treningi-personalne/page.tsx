import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Treningi Personalne | Power Performance - Zielonka",
  description: "Treningi personalne w Zielonce. Kształtowanie sylwetki, poprawa kondycji, treningi dla kobiet w ciąży. Indywidualny plan dopasowany do Twoich celów.",
};

const services = [
  {
    title: "Kształtowanie sylwetki",
    description: "Chcesz wymodelować sylwetkę, pozbyć się zbędnych kilogramów i poczuć się pewniej w swoim ciele? Stworzysz plan, który pomoże Ci osiągnąć wymarzoną sylwetkę, poprawić kondycję i samopoczucie.",
  },
  {
    title: "Poprawa sprawności fizycznej",
    description: "Nie musisz być profesjonalnym sportowcem, by czuć się lepiej we własnym ciele! Nasze treningi poprawiają ogólną sprawność fizyczną, zwiększają siłę, wytrzymałość i elastyczność.",
  },
  {
    title: "Treningi dla kobiet w ciąży",
    description: "Dla przyszłych mam mamy specjalną ofertę - treningi dostosowane do potrzeb i etapu ciąży, zapewniające pełne bezpieczeństwo. Wzmocnisz ciało, poprawisz postawę i przygotujesz się do porodu.",
  },
];

const benefits = [
  "Poprawa postawy ciała",
  "Zwiększenie siły i wytrzymałości",
  "Więcej energii każdego dnia",
  "Poprawa elastyczności",
  "Większa pewność siebie",
  "Redukcja stresu",
];

export default function TreningiPersonalnePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#15A727]/20 rounded-full text-sm font-medium text-[#15A727] mb-6">
            Treningi Personalne
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Osiągnij <span className="gradient-text">Wymarzoną Formę</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Indywidualny plan treningowy dopasowany do Twoich celów. Każdy trening jest stworzony specjalnie dla Ciebie.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            Treningi Personalne w Zielonce
          </h2>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600">{service.description}</p>
                </div>
                <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={`/images/${index === 0 ? 'd' : index === 1 ? 'f' : 'g'}.${index === 0 ? 'jpeg' : 'jpg'}`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Korzyści z treningów personalnych
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-[#15A727] to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#15A727] to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Gotowy na zmianę?</h2>
          <p className="text-lg opacity-90 mb-8">
            Poczujesz różnicę, gdy zobaczysz swoje ciało w nowej, lepszej wersji!
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#15A727] font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Zapytaj o ofertę
          </Link>
        </div>
      </section>
    </>
  );
}
