import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Plany Treningowe | Power Performance - Zielonka",
  description: "Indywidualne plany treningowe dopasowane do Twoich celów, poziomu zaawansowania i stylu życia. Treningi na własną rękę ze wsparciem trenera.",
};

const benefits = [
  "Jasno określona droga do sukcesu",
  "Plan dopasowany do Twojego stylu życia",
  "Wsparcie i motywacja trenera",
  "Regularne aktualizacje planu",
  "Efektywność na każdym etapie",
  "Elastyczność realizacji",
];

const forWhom = [
  "Osoby chcące ćwiczyć samodzielnie",
  "Osoby z napiętym grafikiem",
  "Osoby ćwiczące w domu lub na siłowni",
  "Osoby potrzebujące struktury treningowej",
  "Osoby szukające oszczędności",
];

export default function PlanyTreningowePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-orange-500/20 rounded-full text-sm font-medium text-orange-400 mb-6">
            Plany Treningowe
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Twój <span className="text-orange-400">Indywidualny Plan</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Od planów do rzeczywistych wyników. Tworzymy indywidualne plany treningowe dopasowane do Twoich celów.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Plany Treningowe na miarę
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Chcesz skutecznie osiągnąć swoje cele, ale nie wiesz, jak zacząć? Nasze Plany Treningowe to rozwiązanie, które pomoże Ci przejść od planów do rzeczywistych wyników.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Bez względu na to, czy chcesz poprawić formę, zbudować masę mięśniową, schudnąć, czy zwiększyć siłę - nasze plany treningowe będą dopasowane tak, byś osiągnął najlepsze efekty.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Będziesz mieć jasno określoną drogę do sukcesu, a każdy trening będzie przemyślany i dostosowany do Twoich potrzeb. Co więcej, będziesz miał pełne wsparcie, by nie zgubić się w gąszczu ćwiczeń.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                  src="/images/a.jpeg"
                  alt="Plany treningowe"
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
            Dla kogo jest plan treningowy?
          </h2>
          <div className="space-y-4">
            {forWhom.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Zacznij działać!</h2>
          <p className="text-lg opacity-90 mb-8">
            Efektywność i motywacja na każdym etapie Twojej drogi do celu!
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-500 font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Zamów plan
          </Link>
        </div>
      </section>
    </>
  );
}
