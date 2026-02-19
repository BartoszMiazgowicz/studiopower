'use client';

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import Preloader from "@/components/Preloader";

// Scroll helper
const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Services data
const services = [
  {
    title: 'Trening medyczny',
    description: 'Indywidualny, bezpieczny trening ukierunkowany na zdrowie i sprawność. Przeznaczony dla osób z bólem, po urazach, z wadami postawy lub prowadzących siedzący tryb życia.',
    benefits: ['Poprawa funkcjonowania ciała', 'Redukcja dolegliwości bólowych', 'Wzmocnienie osłabionych obszarów', 'Prawidłowe wzorce ruchu'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Treningi personalne',
    description: 'Indywidualny trening dopasowany do Twoich celów - sylwetka, siła, sprawność. Także dla kobiet w ciąży.',
    benefits: ['Modelowanie sylwetki', 'Wzrost siły', 'Więcej energii', 'Pewność siebie'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: 'Przygotowanie motoryczne',
    description: 'Dla sportowców zawodowych i amatorów. Siła, szybkość, wydolność, koordynacja i prewencja kontuzji.',
    benefits: ['Wzrost mocy', 'Lepsza koordynacja', 'Większa wytrzymałość', 'Stabilizacja'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: 'Zajęcia grupowe fitness',
    description: 'Dynamiczne treningi w grupie - cardio, wzmacniające. Energia, motywacja i wspólne osiąganie celów.',
    benefits: ['Energia grupy', 'Różnorodność treningów', 'Motywacja', 'Świetna atmosfera'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: 'Plany treningowe',
    description: 'Indywidualnie przygotowane plany treningowe pod Twój cel, poziom i styl życia. Jasna struktura i wsparcie.',
    benefits: ['Jasna struktura', 'Dopasowanie do życia', 'Profesjonalne wsparcie', 'Realizacja celów'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
  {
    title: 'Doradztwo żywieniowe',
    description: 'Kompleksowe wsparcie żywieniowe. Plany dopasowane do celów, stanu zdrowia i preferencji kulinarnych.',
    benefits: ['Zdrowe nawyki', 'Dopasowany plan', 'Wsparcie eksperta', 'Trwałe efekty'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
];

// Trainers data
const trainers = [
  {
    name: 'Monika',
    title: 'Trenerka personalna i medyczna',
    image: '/images/LP7A7141.jpeg',
    specializations: ['Trening siłowy dla kobiet', 'Trening medyczny', 'Trening w ciąży', 'Certyfikowany trener personalny'],
    description: 'Łączy wiedzę medyczną z doświadczeniem zawodniczym. Pomaga budować zdrową sylwetkę, wzmacnia ciało i pokazuje kobietom, jak czuć się pewnie w swoim ciele.',
  },
  {
    name: 'Mateusz',
    title: 'Trener personalny i przygotowania motorycznego',
    image: '/images/LP7A7110.jpeg',
    specializations: ['Przygotowanie motoryczne', 'Trening funkcjonalny', 'Gimnastyka korekcyjna', 'Rehabilitacja ruchowa'],
    description: 'Specjalista od powrotu po urazach i budowania sprawności sportowej. Pracuje z rekreacyjnymi trenującymi i zawodnikami – rozwija siłę, mobilność i wytrzymałość, zawsze bezpiecznie i skutecznie.',
  },
  {
    name: 'Majka',
    title: 'Trenerka personalna',
    image: '/images/majka.jpg',
    specializations: ['Trening personalny', 'Poprawa jakości ruchu', 'Sporty drużynowe', 'Korekcja niedoborów ruchowych'],
    description: 'Pracuje z kobietami i mężczyznami, niezależnie od poziomu zaawansowania. Ma solidne zaplecze sportowe, wiedzę i doświadczenie, które przekłada na konkretną, odpowiedzialną pracę z ciałem.',
  },
  {
    name: 'Dymitrii',
    title: 'Trener personalny i fizjoterapeuta',
    image: '/images/Dymitrii.jpg',
    specializations: ['Trening personalny', 'Fizjoterapia', 'Redukcja bólu', 'Poprawa postawy'],
    description: 'Kompleksowe podejście: od fizjoterapii, przez trening medyczny, po indywidualne plany personalne. Z nim osiągniesz progres bez ryzyka kontuzji. W bezpieczny sposób zbudujesz sprawne ciało.',
  },
];

// Testimonials data
const testimonials = [
  {
    name: 'Hubert Dziobak',
    role: 'Klient treningów personalnych',
    rating: 5,
    text: 'Polecam trenerów Mateusza i Monikę. Profesjonalne podejście, świetna atmosfera i widoczne efekty!',
  },
  {
    name: 'Angelika Podstawka',
    role: 'Trening medyczny',
    rating: 5,
    text: 'Monika to profesjonalistka w każdym calu. Dzięki jej wsparciu osiągnęłam cele, o których marzyłam.',
  },
  {
    name: 'Paulina Wisniewska',
    role: 'Zajęcia fitness',
    rating: 5,
    text: 'W ciągu pół roku współpracy zobaczyłam niesamowite rezultaty. Polecam każdemu!',
  },
  {
    name: 'Tomasz',
    role: 'Przygotowanie motoryczne',
    rating: 5,
    text: 'Profesjonalizm i doświadczenie kadry na najwyższym poziomie. Studio z klasą!',
  },
  {
    name: 'Magdalena L.',
    role: 'Trening + dietetyka',
    rating: 5,
    text: 'Kompleksowe wsparcie w treningu i dietetyce zmieniło moje życie. Schudłam 12 kg i czuję się fantastycznie!',
  },
  {
    name: 'Krzysztof',
    role: 'Plan treningowy',
    rating: 5,
    text: 'Indywidualny plan treningowy był strzałem w dziesiątkę. Jasne wskazówki, progresja i stałe wsparcie.',
  },
];

// Gallery images
const galleryImages = [
  { src: '/images/LP7A6877.jpeg', alt: 'Studio Power Performance' },
  { src: '/images/LP7A6879.jpeg', alt: 'Sprzęt treningowy' },
  { src: '/images/LP7A6880.jpeg', alt: 'Strefa treningowa' },
  { src: '/images/LP7A6909.jpeg', alt: 'Trening personalny' },
  { src: '/images/LP7A6951.jpeg', alt: 'Trening silowy' },
  { src: '/images/LP7A7022.jpeg', alt: 'Zajęcia grupowe' },
];

// Intersection Observer hook for scroll animations
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll('.scroll-animate');
      children.forEach((child) => {
        (child as HTMLElement).style.opacity = '0';
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false);
  const aboutRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const trainersRef = useScrollAnimation();
  const whyUsRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();
  const mapRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
    // Trigger hero animations after preloader exits
    setTimeout(() => setHeroReady(true), 100);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/LP7A7047.jpeg"
            alt="Power Performance Training"
            fill
            className={`object-cover ${heroReady ? 'hero-image-zoom' : ''}`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-gray-900"></div>
          <div className="absolute inset-0 bg-lime-500/5"></div>
          {/* Noise overlay for premium feel */}
          <div className="noise-overlay absolute inset-0"></div>
        </div>

        {/* Floating particles */}
        {heroReady && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="hero-particle"
                style={{
                  left: `${10 + i * 12}%`,
                  bottom: '-10px',
                  animationDuration: `${6 + i * 2}s`,
                  animationDelay: `${i * 0.8}s`,
                  width: `${2 + (i % 3)}px`,
                  height: `${2 + (i % 3)}px`,
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {heroReady && (
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="hero-tag inline-block px-5 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 backdrop-blur-sm mb-4" style={{ animationDelay: '0.1s' }}>
                  <span className="text-lime-400 text-sm font-medium tracking-wider uppercase">Studio treningowe w Zielonce</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white font-heading">
                  <span className="hero-title-line inline-block" style={{ animationDelay: '0.25s' }}>GRANICE</span>
                  <br />
                  <span className="hero-title-line inline-block text-lime-400" style={{ animationDelay: '0.4s' }}>NIE ISTNIEJA</span>
                </h1>
                <div className="hero-divider w-24 h-1 bg-gradient-to-r from-lime-400 to-lime-600 mx-auto rounded-full" style={{ animationDelay: '0.55s' }}></div>
              </div>

              <p className="hero-subtitle text-xl sm:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto font-light" style={{ animationDelay: '0.65s' }}>
                Trening personalny &bull; Trening medyczny &bull; Przygotowanie motoryczne
              </p>

              <p className="hero-desc text-base sm:text-lg text-white/60 max-w-2xl mx-auto" style={{ animationDelay: '0.75s' }}>
                Kameralne studio treningowe w Zielonce. <br className="hidden sm:block" />
                Indywidualne podejście. Kompleksowe wsparcie. Prawdziwe rezultaty.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="hero-btn btn-magnetic bg-lime-500 text-white px-10 py-4 text-lg font-bold rounded-full hover:bg-lime-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,204,22,0.4)] w-full sm:w-auto"
                  style={{ animationDelay: '0.9s' }}
                >
                  ZACZNIJ TRENOWAĆ
                </button>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="hero-btn btn-magnetic border-2 border-white/30 text-white px-10 py-4 text-lg font-bold rounded-full hover:bg-white/10 hover:border-lime-400/50 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
                  style={{ animationDelay: '1.0s' }}
                >
                  POZNAJ OFERTĘ
                </button>
              </div>
            </div>
          )}
        </div>

        {heroReady && (
          <button
            onClick={() => scrollToSection('#about')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-lime-400 animate-bounce cursor-pointer transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        )}
      </section>

      {/* Section divider */}
      <div className="section-divider"></div>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-36 bg-gradient-to-b from-gray-50 to-white" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 scroll-animate">
            <p className="text-lime-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">O nas</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 font-heading">
              POWER <span className="text-lime-500">PERFORMANCE</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Studio prowadzone przez zespół profesjonalnych trenerów
              z pasją do pomagania ludziom w osiąganiu ich celów. Specjalizujemy się w treningach
              personalnych, medycznych i przygotowaniu motorycznym sportowców.
            </p>
          </div>

          <div className="scroll-animate delay-200 bg-white/80 backdrop-blur-sm border-l-4 border-lime-500 rounded-2xl p-8 sm:p-12 mb-20 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed italic">
                "Nasza misja to pomóc Ci osiągnąć <span className="text-lime-500 font-bold not-italic">najlepszą formę</span>,
                poprawić <span className="text-lime-500 font-bold not-italic">zdrowie</span> i zrealizować
                <span className="text-lime-500 font-bold not-italic"> cele sportowe</span> - bez względu na poziom zaawansowania.
                Wierzymy, że <span className="text-lime-500 font-bold not-italic">granice nie istnieją</span>."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: 'Indywidualne podejście',
                desc: 'Każdy plan jest tworzony specjalnie dla Ciebie, uwzględniając Twoje cele, możliwości i ograniczenia.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                ),
              },
              {
                title: 'Kompleksowe wsparcie',
                desc: 'Trening, dietetyka, wsparcie psychiczne - wszystko w jednym miejscu, dla maksymalnych efektów.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                title: 'Kameralne studio',
                desc: 'Ok. 400 m2 przestrzeni bez tłumów. Tu liczy się jakość, nie ilość.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
              },
              {
                title: 'Profesjonalizm',
                desc: 'Certyfikowani trenerzy z wieloletnim doświadczeniem i pasją do tego, co robią.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div key={index} className={`scroll-animate delay-${(index + 3) * 100} bg-white p-8 rounded-2xl border border-gray-100 hover:border-lime-500/30 transition-all duration-300 group shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]`}>
                <div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center text-lime-600 mb-5 group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-lime-600 transition-colors duration-300 font-heading">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-36 bg-white relative" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 scroll-animate">
            <p className="text-lime-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Oferta</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 font-heading">
              NASZE <span className="text-lime-500">USŁUGI</span>
            </h2>
            <p className="text-lg text-gray-600">
              Kompleksowa oferta treningowa i żywieniowa dopasowana do Twoich potrzeb i celów.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className={`scroll-animate delay-${(index % 3 + 1) * 100} bg-white p-8 rounded-2xl border border-gray-100 hover:border-lime-500/30 transition-all duration-300 group relative overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]`}>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 to-lime-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-lime-500/10 rounded-2xl flex items-center justify-center text-lime-600 mb-6 group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-lime-600 transition-colors duration-300 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="space-y-2.5">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-lime-500 flex-shrink-0"></div>
                        <span className="text-sm text-gray-500">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 scroll-animate">
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-lime-500 text-white px-10 py-4 text-lg font-bold rounded-full hover:bg-lime-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(132,204,22,0.4)] inline-block"
            >
              UMÓW TRENING PRÓBNY
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Section - First Step */}
      <section id="consultation" className="py-24 lg:py-36 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-lime-500/5"></div>
        <div className="noise-overlay absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-5 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 backdrop-blur-sm mb-6">
              <span className="text-lime-400 text-sm font-medium tracking-wider uppercase">Pierwszy krok</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white font-heading">
              KONSULTACJA + <span className="text-lime-400">ANALIZA TANITA</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Każdą współpracę rozpoczynamy od indywidualnej konsultacji połączonej z profesjonalną analizą składu ciała.
              Dzięki temu dokładnie poznajemy Twoje potrzeby, stan zdrowia i możliwości, aby dobrać skuteczny oraz bezpieczny plan działania.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Price card */}
            <div className="lg:row-span-2 bg-gradient-to-br from-lime-500 to-lime-600 rounded-3xl p-10 flex flex-col justify-center items-center text-center shadow-[0_16px_50px_rgba(132,204,22,0.3)]">
              <p className="text-white/80 text-sm uppercase tracking-wider font-semibold mb-2">Koszt konsultacji</p>
              <div className="text-7xl sm:text-8xl font-black text-white mb-2 font-heading">150</div>
              <div className="text-2xl font-bold text-white/90 mb-6">PLN</div>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                To spotkanie pozwala nam przygotować w pełni spersonalizowaną i skuteczną współpracę.
              </p>
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-white text-lime-600 px-8 py-4 text-lg font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full"
              >
                UMÓW KONSULTACJĘ
              </button>
            </div>

            {/* What includes */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-lime-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-lime-500/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-5 font-heading">Co obejmuje spotkanie?</h3>
              <div className="space-y-3">
                {[
                  'Wywiad zdrowotny i treningowy',
                  'Analiza stylu życia i celów',
                  'Ocena postawy i ograniczeń ruchowych',
                  'Profesjonalny pomiar składu ciała TANITA (m.in. tłuszcz, mięśnie, woda, wiek metaboliczny)',
                  'Wstępne rekomendacje dotyczące dalszych działań',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What you gain */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-lime-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-lime-500/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-5 font-heading">Co zyskujesz?</h3>
              <div className="space-y-3">
                {[
                  'Jasny punkt startowy i plan działania',
                  'Bezpieczeństwo i dopasowanie do Twojego zdrowia',
                  'Realna ocena organizmu (nie tylko wagi)',
                  'Możliwość monitorowania postępów',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    </svg>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-24 lg:py-36 bg-white" ref={trainersRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 scroll-animate">
            <p className="text-lime-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Zespol</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 font-heading">
              POZNAJ <span className="text-lime-500">TRENEROW</span>
            </h2>
            <p className="text-lg text-gray-600">
              Profesjonaliści z pasją i wieloletnim doświadczeniem, którzy pomogą Ci osiągnąć Twoje cele.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className={`scroll-animate delay-${(index + 1) * 200} bg-white rounded-3xl overflow-hidden group border border-gray-100 hover:border-lime-500/20 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2`}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-lime-500/90 text-white text-xs font-semibold mb-2">
                      {trainer.title}
                    </div>
                    <h3 className="text-2xl font-black text-white font-heading">{trainer.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {trainer.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.specializations.slice(0, 3).map((spec, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-lime-500/10 text-lime-700 text-xs rounded-full font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 lg:py-36 bg-gray-50 relative overflow-hidden" ref={whyUsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 scroll-animate">
            <p className="text-lime-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Dlaczego my</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 font-heading">
              DLACZEGO <span className="text-lime-500">POWER PERFORMANCE?</span>
            </h2>
            <p className="text-lg text-gray-600">
              To nie jest zwykła siłownia. To miejsce, gdzie dostajesz indywidualne wsparcie i prawdziwe rezultaty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Kameralne studio ~400 m2', desc: 'Bez tłumów i kolejek do sprzętu. Skoncentruj się na treningu w komfortowych warunkach.' },
              { title: 'Indywidualne podejście', desc: 'Każdy plan jest tworzony specjalnie dla Ciebie, z uwzględnieniem celów, możliwości i ograniczeń.' },
              { title: 'Certyfikowani profesjonaliści', desc: 'Trenerzy z licencjami, stałym rozwojem i wieloletnim doświadczeniem w pracy z klientami.' },
              { title: 'Kompleksowe wsparcie', desc: 'Trening + dietetyka + wsparcie mentalne. Wszystko w jednym miejscu dla maksymalnych rezultatów.' },
              { title: 'Współpraca z ekspertami', desc: 'W treningach medycznych współpracujemy z lekarzami i fizjoterapeutami.' },
              { title: 'Prawdziwe rezultaty', desc: 'Setki zadowolonych klientów, którzy osiągnęli swoje cele zdrowotne i sportowe.' },
            ].map((reason, index) => (
              <div key={index} className={`scroll-animate delay-${(index % 3 + 1) * 100} bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-lime-500/20 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] group`}>
                <div className="text-3xl font-black text-lime-500/20 mb-4 font-heading">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-lime-600 transition-colors duration-300 font-heading">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 scroll-animate">
            {[
              { value: '~400', label: 'm2 powierzchni studia' },
              { value: '4', label: 'Certyfikowanych trenerów' },
              { value: '100%', label: 'Indywidualne podejście' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-10 bg-white rounded-2xl border border-lime-500/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <div className="text-5xl lg:text-6xl font-black text-lime-500 mb-2 font-heading">{stat.value}</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 lg:py-36 bg-white" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 scroll-animate">
            <p className="text-lime-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Opinie</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 font-heading">
              CO MÓWIĄ <span className="text-lime-500">NASI KLIENCI</span>
            </h2>
            <p className="text-lg text-gray-600">
              Prawdziwe opinie osób, które osiągnęły swoje cele treningowe z nami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`scroll-animate delay-${(index % 3 + 1) * 100} bg-white rounded-2xl p-8 border border-gray-100 hover:border-lime-500/20 transition-all duration-300 group relative shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]`}>
                <div className="absolute top-6 right-8 text-7xl font-black text-lime-500/[0.06] leading-none font-heading select-none">&ldquo;</div>
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-lime-500 fill-lime-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 relative z-10 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                  <div className="w-11 h-11 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center ring-2 ring-lime-500/20">
                    <span className="text-white font-bold text-sm">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 lg:py-36 bg-gray-50" ref={galleryRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 scroll-animate">
            <p className="text-lime-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Galeria</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 font-heading">
              NASZE <span className="text-lime-500">STUDIO</span>
            </h2>
            <p className="text-lg text-gray-600">
              Zobacz, jak wygląda przestrzeń, w której będziesz trenować i osiągać swoje cele.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 scroll-animate">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group cursor-pointer rounded-2xl ${
                  index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-24 lg:py-36 bg-white" ref={mapRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 scroll-animate">
            <p className="text-lime-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Lokalizacja</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 font-heading">
              GDZIE NAS <span className="text-lime-500">ZNAJDZIESZ</span>
            </h2>
            <p className="text-lg text-gray-600">
              Odwiedź nas w Zielonce. Dogodna lokalizacja i dostępny parking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 scroll-animate">
            <div className="lg:col-span-2">
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] h-[400px] lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.5!2d21.1619!3d52.3019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c0a4e8e8b%3A0x5!2sStanis%C5%82awa%20Staszica%2058%2C%2005-220%20Zielonka!5e0!3m2!1spl!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Power Performance"
                ></iframe>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lime-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg font-heading">Adres</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-900">POWER PERFORMANCE</strong><br />
                  Stanisława Staszica 58<br />
                  1 piętro<br />
                  05-220 Zielonka
                </p>
                <a
                  href="https://maps.google.com/?q=Stanisława+Staszica+58,+Zielonka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-500 font-semibold transition-colors mt-4 text-sm"
                >
                  Nawiguj w Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lime-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold font-heading">Godziny otwarcia</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-500 text-sm">Pn - Pt</span>
                    <span className="font-semibold text-gray-900 text-sm">6:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-500 text-sm">Sobota</span>
                    <span className="font-semibold text-gray-900 text-sm">8:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500 text-sm">Niedziela</span>
                    <span className="font-semibold text-red-500 text-sm">Nieczynne</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-36 bg-gray-50" ref={contactRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 scroll-animate">
            <p className="text-lime-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Kontakt</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 font-heading">
              SKONTAKTUJ SIE <span className="text-lime-500">Z NAMI</span>
            </h2>
            <p className="text-lg text-gray-600">
              Zadzwoń, napisz lub odwiedź nas. Chętnie odpowiemy na Twoje pytania i pomożemy wybrać najlepszy plan treningowy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 scroll-animate">
            <div className="space-y-5">
              {[
                {
                  title: 'Adres',
                  content: (
                    <p className="text-gray-600 text-sm">
                      Stanisława Staszica 58<br />
                      1 piętro<br />
                      05-220 Zielonka
                    </p>
                  ),
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  ),
                },
                {
                  title: 'Telefon',
                  content: (
                    <a href="tel:+48696470426" className="text-gray-600 hover:text-lime-600 transition-colors text-sm">
                      +48 696 470 426
                    </a>
                  ),
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  ),
                },
                {
                  title: 'E-mail',
                  content: (
                    <a href="mailto:studiopowerperformance@gmail.com" className="text-gray-600 hover:text-lime-600 transition-colors text-sm break-all">
                      studiopowerperformance@gmail.com
                    </a>
                  ),
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  ),
                },
                {
                  title: 'Social Media',
                  content: (
                    <div>
                      <div className="flex gap-3">
                        <a
                          href="https://www.instagram.com/studiopower_performance"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-lime-500/10 flex items-center justify-center rounded-xl hover:bg-lime-500 transition-all duration-300 group/social"
                        >
                          <svg className="w-5 h-5 text-lime-600 group-hover/social:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                          </svg>
                        </a>
                        <a
                          href="https://www.facebook.com/Studiotreningowepowerperformance"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-lime-500/10 flex items-center justify-center rounded-xl hover:bg-lime-500 transition-all duration-300 group/social"
                        >
                          <svg className="w-5 h-5 text-lime-600 group-hover/social:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      </div>
                      <p className="text-gray-400 text-xs mt-3">
                        Aktualny grafik zajęć znajdziesz na naszym <strong className="text-lime-600">Instagramie</strong>!
                      </p>
                    </div>
                  ),
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-lime-500/20 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-lime-500/10 rounded-xl flex items-center justify-center text-lime-600 flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-2 font-heading">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 flex flex-col justify-center shadow-[0_16px_50px_rgba(0,0,0,0.15)]">
              <div className="mb-8">
                <div className="inline-block px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  Pierwszy krok
                </div>
                <h3 className="text-3xl font-black mb-4 text-white font-heading">
                  GOTOWY NA <span className="text-lime-400">ZMIANĘ?</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Pierwszy krok jest najtrudniejszy, ale my Ci w tym pomożemy. Umów trening próbny i przekonaj się,
                  że <span className="text-lime-400 font-bold">granice nie istnieją</span>.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+48696470426"
                  className="block w-full bg-lime-500 text-white text-center px-8 py-4 text-lg font-bold rounded-full hover:bg-lime-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(132,204,22,0.4)]"
                >
                  ZADZWOŃ TERAZ
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  <strong className="text-gray-400">Godziny otwarcia:</strong><br />
                  Poniedziałek - Piątek: 6:00 - 22:00<br />
                  Sobota: 8:00 - 14:00<br />
                  Niedziela: Nieczynne
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
