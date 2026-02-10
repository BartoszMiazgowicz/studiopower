import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Treningi Medyczne | Power Performance - Zielonka",
  description: "Treningi medyczne w Zielonce. Odzyskaj sprawność, pozbądź się bólu dzięki indywidualnie dopasowanym treningom. Współpraca z lekarzami i fizjoterapeutami.",
};

const forWhom = [
  "Osoby z bólami pleców i stawów",
  "Osoby po kontuzjach i operacjach",
  "Osoby z problemami postawy",
  "Osoby szukające alternatywy dla rehabilitacji bez efektów",
  "Osoby chcące zapobiegać przyszłym problemom zdrowotnym",
];

const benefits = [
  { title: "Redukcja bólu", desc: "Stopniowe zmniejszanie dolegliwości bólowych" },
  { title: "Poprawa mobilności", desc: "Zwiększenie zakresu ruchu" },
  { title: "Siła i wytrzymałość", desc: "Wzmocnienie mięśni stabilizujących" },
  { title: "Wsparcie pooperacyjne", desc: "Bezpieczny powrót do aktywności" },
  { title: "Prewencja kontuzji", desc: "Zmniejszenie ryzyka urazów" },
  { title: "Poprawa postawy", desc: "Korekcja wad postawy" },
];

export default function TreningiMedycznePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-red-500/20 rounded-full text-sm font-medium text-red-400 mb-6">
            Treningi Medyczne
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Odzyskaj <span className="text-red-400">Sprawność</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pozbądź się bólu dzięki indywidualnie dopasowanym treningom. Współpracujemy z lekarzami i fizjoterapeutami.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Treningi Medyczne w Zielonce
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Masz dość bólów pleców, stawów czy urazów, które utrudniają Ci życie? Nasze Treningi Medyczne to idealne rozwiązanie dla Ciebie!
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Dostosujemy plan treningowy do Twoich potrzeb, pomagając przywrócić pełną sprawność mięśni i stawów oraz poprawić zakres ruchu.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Niezależnie od tego, czy walczysz z kontuzją, bólem pleców, czy innym problemem zdrowotnym - nasze ćwiczenia są bezpieczne, skuteczne i zaprojektowane z myślą o Twoim szybkim powrocie do formy.
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
