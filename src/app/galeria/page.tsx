'use client';

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/LP7A6877.jpeg", alt: "Studio Power Performance" },
  { src: "/images/LP7A6879.jpeg", alt: "Trening w studiu" },
  { src: "/images/LP7A6880.jpeg", alt: "Sprzęt treningowy" },
  { src: "/images/LP7A6881.jpeg", alt: "Przestrzeń treningowa" },
  { src: "/images/LP7A6909.jpeg", alt: "Strefa cardio" },
  { src: "/images/LP7A6951.jpeg", alt: "Sala treningowa" },
  { src: "/images/LP7A7022.jpeg", alt: "Trening personalny" },
  { src: "/images/LP7A7047.jpeg", alt: "Strefa treningowa" },
  { src: "/images/LP7A7077.jpeg", alt: "Zajęcia grupowe" },
  { src: "/images/LP7A7087.jpeg", alt: "Sprzęt" },
  { src: "/images/LP7A7098.jpeg", alt: "Studio wnętrze" },
  { src: "/images/LP7A7110.jpeg", alt: "Trening siłowy" },
  { src: "/images/LP7A7141.jpeg", alt: "Strefa funkcjonalna" },
  { src: "/images/LP7A7164.jpeg", alt: "Przestrzeń treningowa" },
  { src: "/images/LP7A7165.jpeg", alt: "Studio Power Performance" },
  { src: "/images/LP7A7168.jpeg", alt: "Wyposażenie studia" },
  { src: "/images/LP7A7174.jpeg", alt: "Strefa treningu" },
  { src: "/images/LP7A7176.jpeg", alt: "Studio od wewnątrz" },
  { src: "/images/LP7A7198.jpeg", alt: "Trening w akcji" },
  { src: "/images/LP7A7204.jpeg", alt: "Power Performance" },
  { src: "/images/LP7A7205.jpeg", alt: "Studio treningowe" },
];

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#15A727]/20 rounded-full text-sm font-medium text-[#15A727] mb-6">
            Galeria
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Zobacz Nasze <span className="gradient-text">Studio</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kameralna przestrzeń 400 m² w pełni wyposażona do treningów personalnych, medycznych i zajęć grupowych.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full aspect-[4/3]">
            <Image
              src={selectedImage}
              alt="Studio"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Chcesz zobaczyć studio na żywo?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Umów się na wizytę i przekonaj się, jak wygląda nasza przestrzeń.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#15A727] to-[#1863DC] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Umów wizytę
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
