import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "O Nas | Power Performance - Studio Treningowe Zielonka",
  description: "Poznaj zespół Power Performance. Monika i Mateusz - certyfikowani trenerzy personalni z pasją do pomagania innym w osiąganiu celów.",
};

export default function ONasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#15A727]/20 rounded-full text-sm font-medium text-[#15A727] mb-6">
            O Nas
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Poznaj <span className="gradient-text">Nasz Zespół</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Studio prowadzone przez małżeństwo trenerów z pasją do pomagania innym w osiąganiu celów zdrowotnych i sportowych.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/images/g.jpg"
                  alt="Studio Power Performance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#15A727] to-[#1863DC] p-6 rounded-2xl text-white">
                <p className="text-4xl font-bold">400m²</p>
                <p className="text-sm opacity-90">kameralnej przestrzeni</p>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-2 bg-[#15A727]/10 rounded-full text-sm font-medium text-[#15A727] mb-4">
                Nasza Misja
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Pomagamy Osiągać <span className="gradient-text">Niemożliwe</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                W Power Performance wierzymy, że każdy ma potencjał do osiągnięcia swoich celów - niezależnie od tego, czy chodzi o poprawę zdrowia, formę fizyczną, czy wyniki sportowe.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nasze kameralne studio na 400 m² to przestrzeń wolna od tłumów, gdzie możesz skupić się na sobie. Oferujemy indywidualne podejście, profesjonalne wsparcie i motywację na każdym kroku.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-[#15A727]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">Indywidualne podejście</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-[#15A727]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">Certyfikowani trenerzy</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-[#15A727]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">Kameralna atmosfera</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#15A727]/10 rounded-full text-sm font-medium text-[#15A727] mb-4">
              Nasz Zespół
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Poznaj <span className="gradient-text">Trenerów</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Monika */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/h.jpg"
                  alt="Monika - Trenerka personalna"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Monika</h3>
                <p className="text-[#15A727] font-medium mb-4">Trenerka Personalna & Trener Medyczny</p>
                <p className="text-gray-600 mb-6">
                  Certyfikowana trenerka z doświadczeniem w sportach siłowych. Specjalizuje się w treningu siłowym dla kobiet, treningach medycznych i prowadzeniu osób po kontuzjach. Jej pasją jest pomaganie kobietom w odkrywaniu ich siły.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#15A727]/10 text-[#15A727] rounded-full text-sm">Trening siłowy</span>
                  <span className="px-3 py-1 bg-[#15A727]/10 text-[#15A727] rounded-full text-sm">Trening medyczny</span>
                  <span className="px-3 py-1 bg-[#15A727]/10 text-[#15A727] rounded-full text-sm">Trening dla kobiet</span>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a href="tel:+48692548654" className="flex items-center gap-2 text-gray-600 hover:text-[#15A727] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +48 692 548 654
                  </a>
                </div>
              </div>
            </div>

            {/* Mateusz */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/i.jpeg"
                  alt="Mateusz - Trener personalny"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mateusz</h3>
                <p className="text-[#1863DC] font-medium mb-4">Trener Personalny & Przygotowania Motorycznego</p>
                <p className="text-gray-600 mb-6">
                  Trener personalny i przygotowania motorycznego łączący trening funkcjonalny z elementami gimnastyki korekcyjnej i rehabilitacji ruchowej. Specjalizuje się w pracy ze sportowcami i osobami z problemami ruchowymi.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#1863DC]/10 text-[#1863DC] rounded-full text-sm">Przygotowanie motoryczne</span>
                  <span className="px-3 py-1 bg-[#1863DC]/10 text-[#1863DC] rounded-full text-sm">Trening funkcjonalny</span>
                  <span className="px-3 py-1 bg-[#1863DC]/10 text-[#1863DC] rounded-full text-sm">Rehabilitacja</span>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a href="tel:+48518131696" className="flex items-center gap-2 text-gray-600 hover:text-[#1863DC] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +48 518 131 696
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#15A727] to-[#1863DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Chcesz Nas Poznać?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Umów się na bezpłatną konsultację i zobacz nasze studio.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#15A727] font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Skontaktuj się z nami
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
