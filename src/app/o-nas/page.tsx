import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "O Nas | Power Performance - Studio Treningowe Zielonka",
  description: "Poznaj zespół Power Performance. Certyfikowani trenerzy personalni z pasją do pomagania innym w osiąganiu celów.",
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
            Studio prowadzone przez zespół trenerów z pasją do pomagania innym w osiąganiu celów zdrowotnych i sportowych.
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
                  src="/images/LP7A6877.jpeg"
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

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Monika */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/LP7A7141.jpeg"
                  alt="Monika - Trenerka personalna"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-[#15A727] text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Trenerka Personalna & Medyczna</span>
                  <h3 className="text-3xl font-bold text-white">Monika</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Łączy wiedzę medyczną z doświadczeniem zawodniczym. Pomaga budować zdrową sylwetkę, wzmacnia ciało i pokazuje kobietom, jak czuć się pewnie w swoim ciele.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1.5 bg-[#15A727]/10 text-[#15A727] rounded-full text-sm font-medium">Trening siłowy</span>
                  <span className="px-3 py-1.5 bg-[#15A727]/10 text-[#15A727] rounded-full text-sm font-medium">Trening medyczny</span>
                  <span className="px-3 py-1.5 bg-[#15A727]/10 text-[#15A727] rounded-full text-sm font-medium">Trening dla kobiet</span>
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <a href="tel:+48692548654" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#15A727]/10 text-[#15A727] font-semibold rounded-full hover:bg-[#15A727] hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +48 692 548 654
                  </a>
                </div>
              </div>
            </div>

            {/* Mateusz */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/LP7A7110.jpeg"
                  alt="Mateusz - Trener personalny"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-[#1863DC] text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Trener Personalny & Motoryczny</span>
                  <h3 className="text-3xl font-bold text-white">Mateusz</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Specjalista od powrotu po urazach i budowania sprawności sportowej. Pracuje z rekreacyjnymi trenującymi i zawodnikami – rozwija siłę, mobilność i wytrzymałość, zawsze bezpiecznie i skutecznie.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1.5 bg-[#1863DC]/10 text-[#1863DC] rounded-full text-sm font-medium">Przygotowanie motoryczne</span>
                  <span className="px-3 py-1.5 bg-[#1863DC]/10 text-[#1863DC] rounded-full text-sm font-medium">Trening funkcjonalny</span>
                  <span className="px-3 py-1.5 bg-[#1863DC]/10 text-[#1863DC] rounded-full text-sm font-medium">Rehabilitacja</span>
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <a href="tel:+48518131696" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1863DC]/10 text-[#1863DC] font-semibold rounded-full hover:bg-[#1863DC] hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +48 518 131 696
                  </a>
                </div>
              </div>
            </div>

            {/* Majka */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/majka.jpg"
                  alt="Majka - Trenerka personalna"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-[#15A727] text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Trenerka Personalna</span>
                  <h3 className="text-3xl font-bold text-white">Majka</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Pracuje z kobietami i mężczyznami, niezależnie od poziomu zaawansowania. Ma solidne zaplecze sportowe, wiedzę i doświadczenie, które przekłada na konkretną, odpowiedzialną pracę z ciałem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#15A727]/10 text-[#15A727] rounded-full text-sm font-medium">Trening personalny</span>
                  <span className="px-3 py-1.5 bg-[#15A727]/10 text-[#15A727] rounded-full text-sm font-medium">Poprawa jakości ruchu</span>
                  <span className="px-3 py-1.5 bg-[#15A727]/10 text-[#15A727] rounded-full text-sm font-medium">Sporty drużynowe</span>
                </div>
              </div>
            </div>

            {/* Dymitrii */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/Dymitrii.jpg"
                  alt="Dymitrii - Trener personalny i fizjoterapeuta"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-[#1863DC] text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Trener & Fizjoterapeuta</span>
                  <h3 className="text-3xl font-bold text-white">Dymitrii</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Kompleksowe podejście: od fizjoterapii, przez trening medyczny, po indywidualne plany personalne. Z nim osiągniesz progres bez ryzyka kontuzji. W bezpieczny sposób zbudujesz sprawne ciało.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#1863DC]/10 text-[#1863DC] rounded-full text-sm font-medium">Trening personalny</span>
                  <span className="px-3 py-1.5 bg-[#1863DC]/10 text-[#1863DC] rounded-full text-sm font-medium">Fizjoterapia</span>
                  <span className="px-3 py-1.5 bg-[#1863DC]/10 text-[#1863DC] rounded-full text-sm font-medium">Redukcja bólu</span>
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
