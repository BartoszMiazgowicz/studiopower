import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Doradztwo żywieniowe | Power Performance - Wsparcie Żywieniowe Zielonka",
  description: "Kompleksowe doradztwo żywieniowe. Indywidualne plany żywieniowe dopasowane do Twoich celów, stanu zdrowia i stylu życia.",
};

const benefits = [
  {
    title: "Trwała zmiana stylu życia",
    description: "Wpływ na zdrowie, samopoczucie i energię na co dzień",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Więcej energii",
    description: "Poprawa koncentracji i witalność każdego dnia",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Indywidualna dieta",
    description: "Plan uwzględniający potrzeby, preferencje i styl życia",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Zrównoważone efekty",
    description: "Utrata wagi, poprawa wyników zdrowotnych bez efektu jojo",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Stałe wsparcie",
    description: "Motywacja na każdym etapie zmiany",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const forWhom = [
  "Osoby chcące poprawić zdrowie i zapobiegać chorobom cywilizacyjnym",
  "Osoby dążące do utraty wagi w sposób zdrowy i trwały",
  "Osoby potrzebujące pomocy w budowaniu zdrowych nawyków",
  "Osoby zmęczone i pragnące odzyskać witalność",
  "Osoby z alergiami lub nietolerancjami pokarmowymi",
];

export default function DietetykaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-teal-500/20 rounded-full text-sm font-medium text-teal-400 mb-6">
            Doradztwo żywieniowe
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Kompleksowe Wsparcie <span className="text-teal-400">Żywieniowe</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Twoje cele, potrzeby i preferencje żywieniowe są dla nas priorytetem. Tworzymy plany, które stają się naturalnym elementem Twojej codzienności.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Dieta to fundament <span className="text-teal-500">zdrowego życia</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                W dzisiejszym zabieganym świecie często zapominamy o tym, jak wielki wpływ na nasze zdrowie ma to, co jemy. Dieta to nie tylko sposób na osiągnięcie wymarzonej figury, ale przede wszystkim kluczowy element dbania o zdrowie na co dzień.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                To, co trafia na nasze talerze, wpływa na samopoczucie, poziom energii, kondycję, a także na nasze długoterminowe zdrowie.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Oferujemy wsparcie dietetyczne, które pomoże Ci nie tylko osiągnąć cele sylwetkowe, ale przede wszystkim zmienić nawyki na zdrowsze.
              </p>

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Umów konsultację
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/images/LP7A7198.jpeg"
                  alt="Dietetyka"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Indywidualne</p>
                    <p className="text-sm text-gray-500">podejście do każdego</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-500/10 rounded-full text-sm font-medium text-teal-600 mb-4">
              Dla Kogo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Dla kogo jest wsparcie dietetyczne?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {forWhom.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-500/20 rounded-full text-sm font-medium text-teal-400 mb-4">
              Korzyści
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Co zyskujesz współpracując z nami?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Razem zbudujemy fundamenty zdrowia
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Z nami nie chodzi tylko o zmniejszenie wagi, ale o trwałą zmianę, która wpłynie na jakość Twojego życia na długie lata.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Rozpocznij zmianę
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
