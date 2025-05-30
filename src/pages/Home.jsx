import React from 'react';
import Header from '../components/Header';
import homeHeroImage from '/images/home-hero.png';
import Ellipse from '../components/Ellipse';
import ServiceCards from '../components/ServiceCards';
import Footer from '../components/Footer';
import ButtonPrimary from '../components/buttonPrimary';
import thirtyBadgeImage from '/images/Thirty-badge.png';


import { Link } from "react-router-dom";

 // Corrected path

const PAGE_ELLIPSES = [
  {
    width: 484.01,
    height: 479.57,
    left: 101.05,
    top: 239.42,
  },
  {
    width: 484.01,
    height: 479.57,
    left: 951.1,
    top: 411.14,
  },
  {
    width: 446.47,
    height: 327.83,
    left: 135.17,
    top: 765.36,
  },
  {
    width: 649.58,
    height: 659.39,
    left: 394.59,
    top: 982.21,
  },
  {
    width: 446.47,
    height: 421.09,
    left: 1149.89,
    top: 1155.89,
  },
  {
    width: 649.58,
    height: 659.39,
    left: -315.96,
    top: 1015.58,
  },
  {
    width: 649.58,
    height: 659.39,
    left: 864.77,
    top: 2561.02,
  },
  {
    width: 649.58,
    height: 659.39,
    left: 16.68,
    top: 2393.23,
  },
  {
    width: 513.24,
    height: 477.27,
    left: -35.36,
    top: 3078.13,
  },
  {
    width: 469.03,
    height: 464.12,
    left: 456.41,
    top: 3122.29,
  },
];

function HomePage() {
  return (
    <div className="relative z-0 overflow-x-clip">
      <Header isConnected={false}></Header>
      <section className="max-w-[1300px] mx-auto px-4 md:px-6">
        <div className="absolute right-0 -z-10 opacity-70 md:opacity-100">
          <img src={homeHeroImage} alt="hero section image" className="max-w-full h-auto" />
        </div>
        <h2 className="mt-20 md:mt-32 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-[950px]">
          ATTEINS TES{" "}
          <span className="text_gradient">OBJECTIFS SPORTIFS</span> AVEC ATHEL
          <span className="text_gradient">X</span>
        </h2>
        <p className="text-lg md:text-2xl max-w-[690px] mt-6 md:mt-8">
          Compléments, coachs et salles de sport réunis en un seul endroit.
          <br className="hidden md:block" />
          Booste tes performances dès aujourd'hui !
        </p>
        <div className="mt-8 md:mt-12">
          <ButtonPrimary><a href="#why-choose-athelx">Commencer maintenant</a></ButtonPrimary>
        </div>
      </section>

      <section id="why-choose-athelx" className="px-4 md:px-6">
        <h2 className="text-center mt-24 md:mt-32 text-4xl md:text-5xl lg:text-6xl font-bold relative 
          after:content-[''] after:h-1 after:w-16 md:after:w-20 after:bg-gradient-to-r after:from-primary 
          after:to-secondary after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
          Pourquoi choisir Athel<span className="text_gradient">X</span> ?
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl max-w-[1000px] text-center mx-auto mt-8 md:mt-12">
          AthelX, c'est bien plus qu'une simple plateforme. C'est l'allié de
          tous les athlètes qui veulent progresser, se surpasser et atteindre
          leurs objectifs plus rapidement.
        </p>
        <h2 className="text-[#4257FA] text-center mt-16 font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide"
          style={{
            WebkitTextStroke: "1px black",
          }}>
          NOS SERVICES
        </h2>
        <ServiceCards></ServiceCards>
      </section>

      <section className="px-4 md:px-6">
        <h2 className="mt-20 md:mt-24 text-3xl md:text-4xl lg:text-5xl font-bold text-center mx-auto tracking-wide 
          max-w-[950px] relative after:content-[''] after:h-1 after:w-20 md:after:w-24 after:bg-gradient-to-r 
          after:from-primary after:to-secondary after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
          PRÊT À <span className="text_gradient">TRANSFORMER</span> TON
          ENTRAÎNEMENT AVEC <span className="text_gradient">ATHELX</span>?
        </h2>
        <p className="text-lg md:text-xl max-w-[1000px] text-center mx-auto mt-12">
          Athel<span className="text_gradient">X</span> t'accompagne dans
          chaque étape de ton évolution sportive. Ne laisse pas passer cette
          opportunité de progresser avec une équipe et une communauté dédiées
          à la performance.
        </p>
        <div className="relative mt-12 md:mt-16 p-6 md:p-10 mx-auto rounded-3xl border border-primary 
          max-w-[1175px] text-center bg-white/10 backdrop-blur-lg">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide text-[#4257FA]">
            OFFRE SPÉCIALE !
          </h2>
          <p className="mt-8 text-lg md:text-xl font-bold max-w-[1045px] mx-auto">
            Inscris-toi aujourd'hui et bénéficie d'un bon de réduction de{" "}
            <span className="text-primary">-30%</span> sur ta première
            commande de compléments !
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-[700px] mx-auto">
            Rejoins-nous dès maintenant et passe au niveau supérieur !
          </p>
          <ButtonPrimary
            textClassName="font-bold"
            buttonClassName="py-3 px-6 md:py-4 md:px-8 mx-auto mt-8 md:mt-10"
            isDecorated={false}
          >
            <Link to="/connexion">CRÉER UN COMPTE MAINTENANT</Link>
          </ButtonPrimary>
          <img
            className="absolute -right-2 -bottom-8 w-48 md:w-64 lg:w-auto"
            src={thirtyBadgeImage}
            alt="thirty badge image"
          />
        </div>
      </section>
      <Footer></Footer>
      {PAGE_ELLIPSES.map((ellipse, index) => (
        <Ellipse
          key={index}
          width={ellipse.width}
          height={ellipse.height}
          left={ellipse.left}
          top={ellipse.top}
        ></Ellipse>
      ))}
   
    </div>
  );
}

export default HomePage;



