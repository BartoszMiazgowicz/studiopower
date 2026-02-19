import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Treningi Medyczne | Power Performance - Zielonka",
  description: "Treningi medyczne w Zielonce. Odzyskaj sprawność, pozbądź się bólu dzięki indywidualnie dopasowanym treningom. Współpraca z lekarzami i fizjoterapeutami.",
};

const forWhom = [
  "Osoby z bólem pleców i stawów",
  "Osoby po urazach i operacjach",
  "Osoby z wadami postawy",
  "Osoby prowadzące siedzący tryb życia",
  "Osoby szukające bezpiecznej alternatywy dla rehabilitacji bez efektów",
];

const benefits = [
  { title: "Poprawa funkcjonowania ciała", desc: "Przywrócenie prawidłowego działania mięśni i stawów" },
  { title: "Redukcja dolegliwości bólowych", desc: "Stopniowe zmniejszanie bólu i dyskomfortu" },
  { title: "Wzmocnienie osłabionych obszarów", desc: "Budowanie siły w miejscach wymagających wsparcia" },
  { title: "Prawidłowe wzorce ruchu", desc: "Przywrócenie naturalnej i bezpiecznej biomechaniki" },
  { title: "Prewencja kontuzji", desc: "Zmniejszenie ryzyka przyszłych urazów" },
  { title: "Poprawa postawy", desc: "Korekcja wad postawy i stabilizacja kręgosłupa" },
];

export default function TreningiMedycznePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-red-500/20 rounded-full text-sm font-medium text-red-400 mb-6">
            Trening medyczny
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Odzyskaj <span className="text-red-400">Sprawność</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Indywidualny, bezpieczny trening ukierunkowany na zdrowie i sprawność. Przeznaczony dla osób z bólem, po urazach, z wadami postawy lub prowadzących siedzący tryb życia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Trening medyczny w Zielonce
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Trening medyczny to indywidualny, bezpieczny trening ukierunkowany na zdrowie i sprawność. Przeznaczony dla osób z bólem, po urazach, z wadami postawy lub prowadzących siedzący tryb życia.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Jego celem jest poprawa funkcjonowania ciała, redukcja dolegliwości bólowych, wzmocnienie osłabionych obszarów oraz przywrócenie prawidłowych wzorców ruchu.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Każdy plan jest indywidualnie dopasowany do Twoich potrzeb i możliwości. Współpracujemy z lekarzami i fizjoterapeutami, aby zapewnić Ci bezpieczny powrót do pełnej sprawności.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Zapytaj o ofertę
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/images/LP7A7110.jpeg"
                  alt="Treningi medyczne"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Dla kogo jest trening medyczny?
          </h2>
          <div className="space-y-4">
            {forWhom.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Korzyści z treningów medycznych
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-white/5 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Wspólnie pokonamy dolegliwości</h2>
          <p className="text-lg opacity-90 mb-8">
            Z nami, wspólnie z lekarzami i fizjoterapeutami, odzyskasz komfort życia!
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-500 font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Umów konsultację
          </Link>
        </div>
      </section>
    </>
  );
}
