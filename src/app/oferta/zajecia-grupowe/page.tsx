import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Zajęcia Grupowe Fitness | Power Performance - Zielonka",
  description: "Dynamiczne zajęcia grupowe fitness w Zielonce. Cardio, trening siłowy, spalanie kalorii. Dołącz do grupy pełnej motywacji!",
};

const benefits = [
  "Spalanie kalorii i redukcja tkanki tłuszczowej",
  "Poprawa kondycji i wytrzymałości",
  "Wzmocnienie mięśni całego ciała",
  "Poprawa koordynacji i elastyczności",
  "Motywująca atmosfera grupowa",
  "Różnorodność treningów",
];

const forWhom = [
  "Osoby szukające motywacji w grupie",
  "Osoby chcące spalić kalorie",
  "Osoby na każdym poziomie zaawansowania",
  "Osoby szukające urozmaicenia treningów",
  "Osoby chcące poprawić kondycję",
];

export default function ZajeciaGrupowePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-sm font-medium text-purple-400 mb-6">
            Zajęcia Grupowe
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trenuj z <span className="text-purple-400">Grupą</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Dynamiczne i angażujące treningi w grupie pełnej ludzi z podobnymi celami. Razem zmierzamy do lepszej kondycji!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Zajęcia Grupowe Fitness w Zielonce
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Chcesz poczuć energię, motywację i wspólną radość z osiągania celów? Nasze Zajęcia Grupowe Fitness to idealna opcja dla Ciebie!
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Niezależnie od tego, czy chcesz spalić kalorie, wzmocnić mięśnie, poprawić wydolność czy po prostu dobrze się bawić - nasze zajęcia będą świetnym rozwiązaniem.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Dzięki różnorodności programów fitness (od ćwiczeń cardio po treningi wzmacniające) znajdziesz coś dla siebie, bez względu na poziom zaawansowania.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/grafik"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Zobacz grafik
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500 text-purple-600 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Zapytaj o ofertę
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/images/b.jpeg"
                  alt="Zajęcia grupowe"
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
            Dla kogo są zajęcia grupowe?
          </h2>
          <div className="space-y-4">
            {forWhom.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
            Korzyści
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Dołącz do nas!</h2>
          <p className="text-lg opacity-90 mb-8">
            Grupa, energia instruktora i wspólna motywacja sprawią, że wyjdziesz z zajęć z uśmiechem na twarzy!
          </p>
          <Link
            href="/grafik"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Zobacz grafik zajęć
          </Link>
        </div>
      </section>
    </>
  );
}
