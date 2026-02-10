import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Przygotowanie Motoryczne Sportowców | Power Performance",
  description: "Treningi przygotowania motorycznego w Zielonce. Zwiększ siłę, szybkość i wydolność. Program dla zawodowców i amatorów.",
};

const benefits = [
  { title: "Siła", desc: "Zwiększenie siły eksplozywnej i maksymalnej" },
  { title: "Szybkość", desc: "Poprawa czasu reakcji i przyspieszenia" },
  { title: "Wytrzymałość", desc: "Zwiększenie wydolności aerobowej i anaerobowej" },
  { title: "Koordynacja", desc: "Lepsze panowanie nad ciałem" },
  { title: "Elastyczność", desc: "Większy zakres ruchu" },
  { title: "Prewencja kontuzji", desc: "Zmniejszenie ryzyka urazów sportowych" },
];

const forWhom = [
  "Zawodowi sportowcy",
  "Amatorzy uprawiający sport",
  "Osoby przygotowujące się do zawodów",
  "Młodzi adepci sportu",
  "Osoby powracające do aktywności sportowej",
];

export default function PrzygotowanieMotorycznePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#1863DC]/20 rounded-full text-sm font-medium text-blue-400 mb-6">
            Przygotowanie Motoryczne
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Osiągnij <span className="text-blue-400">Sportowe Cele</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kompleksowa oferta dla osób, które chcą poprawić wyniki sportowe i przygotować ciało do wyzwań na najwyższym poziomie.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Treningi Przygotowania Motorycznego w Zielonce
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Masz ambicje, by osiągnąć swoje sportowe cele? W naszej ofercie znajdziesz treningi, które zwiększą Twoją siłę, szybkość, wytrzymałość oraz poprawią koordynację i elastyczność.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Niezależnie od tego, czy jesteś zawodowym sportowcem, czy amatorskim entuzjastą sportu - nasze treningi są dostosowane do Twojego poziomu zaawansowania i celów.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1863DC] to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                  src="/images/LP7A7141.jpeg"
                  alt="Przygotowanie motoryczne"
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
            Dla kogo są nasze treningi?
          </h2>
          <div className="space-y-4">
            {forWhom.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-[#1863DC] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
            Korzyści z treningów
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-white/5 rounded-2xl">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1863DC] to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Stań się lepszym sportowcem</h2>
          <p className="text-lg opacity-90 mb-8">
            Wszystko, czego potrzebujesz, by stać się jeszcze lepszym w tym, co robisz!
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1863DC] font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Umów trening
          </Link>
        </div>
      </section>
    </>
  );
}
