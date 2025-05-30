import React, { useRef } from 'react';
import service_1 from '/images/service-1.png';
import service_2 from '/images/service-2.png';
import service_3 from '/images/service-3.png';
import service_4 from '/images/service-4.png';
import service_5 from '/images/service-5.png';

const SERVICES = [
  {
    title: "LES MEILLEURES SALLES DE SPORT",
    image: service_1,
    description: "Découvrez nos salles de sport partenaires, équipées des meilleurs appareils.",
    link: "/Salles1"
  },
  {
    title: "LES MEILLEURS COMPLÉMENTS",
    image: service_2,
    description: "Une sélection rigoureuse de compléments alimentaires pour optimiser vos résultats.",
    link: "/Produits1"
  },
  {
    title: "DES COACHS QUALIFIÉS",
    image: service_3,
    description: "Des professionnels expérimentés pour vous guider vers vos objectifs.",
    link: "/Coachs1"
  },
  {
    title: "BLOG & CONSEILS D'EXPERTS",
    image: service_4,
    description: "Des articles et conseils rédigés par nos experts pour progresser.",
    link: "/communaute"
  },
  {
    title: "COMMUNAUTÉ",
    image: service_5,
    description: "Rejoignez une communauté passionnée et motivée.",
    link: "/communaute"
  }
];

function ServiceCards() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative py-8 md:py-16 px-4 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">Nos Services</h1>
        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="p-2 md:p-3 rounded-full bg-primary/90 hover:bg-primary text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Défiler à gauche"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 md:p-3 rounded-full bg-primary/90 hover:bg-primary text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Défiler à droite"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {SERVICES.map((service, index) => (
          <a
            href={service.link}
            key={index}
            className="min-w-[280px] md:min-w-[320px] lg:min-w-[400px] h-[400px] md:h-[450px] lg:h-[500px] snap-start relative group rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 opacity-90 group-hover:via-black/30 group-hover:to-black/95 transition-all duration-300"></div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform transition-all duration-300 group-hover:translate-y-[-10px]">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {service.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default ServiceCards;
