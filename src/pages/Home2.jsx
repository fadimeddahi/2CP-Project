import React, { useEffect } from 'react';
import Header from '../components/Header';
import homeHeroImage from '/images/home-hero.png';
import ServiceCards from '../components/ServiceCards';
import Footer from '../components/Footer';
import ButtonPrimary from '../components/buttonPrimary';
import "../styles/global.css";

function HomePage() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-0 overflow-x-clip">
      <Header isConnected={true}></Header>
      <section className="max-w-[1300px] mx-auto ">
        <div className="absolute right-0 -z-10 ">
          <img src={homeHeroImage} alt="hero section image" />
        </div>
        <h2
          className="inline-block mt-44 heading-1  max-w-[950px]"
          style={{
            "--font-size": "78.5px",
            "--line-height": "107.9px",
          }}
        >
          ATTEINS TES{" "}
          <span className="text_gradient">OBJECTIFS SPORTIFS</span> AVEC ATHEL
          <span className="text_gradient">X</span>
        </h2>
        <p
          className="paragraph-1 max-w-[690px] pl-5 mt-15"
          style={{
            "--font-size": "32.38px",
            "--line-height": "39.2px",
          }}
        >
          Compléments, coachs et salles de sport réunis en un seul endroit.
          <br></br>
          Booste tes performances dès aujourd’hui !
        </p>
        <div className="mt-20 ml-33">
          <ButtonPrimary>
            <a href="#why-choose-athelx">Commencer maintenant</a>
          </ButtonPrimary>
        </div>
      </section>
      <section id="why-choose-athelx">
        <h2
          className=" text-center mt-44 heading-1  relative after:content-[] after:h-1.5 after:w-70 after:bg-gradient-to-r after:from-primary after:to-secondary after:absolute after:bottom-0 after:right-57"
          style={{
            "--font-size": "78.5px",
            "--line-height": "auto",
            "--letter-spacing": "0.01em",
          }}
        >
          Pourquoi choisir Athel<span className="text_gradient">X</span> ?
        </h2>
        <p
          className="paragraph-1  max-w-[1000px] text-center mx-auto mt-10"
          style={{
            "--font-size": "32.38px",
            "--line-height": "39.2px",
            "--letter-spacing": "0.02em",
          }}
        >
          AthelX, c’est bien plus qu’une simple plateforme. C’est l’allié de
          tous les athlètes qui veulent progresser, se surpasser et atteindre
          leurs objectifs plus rapidement.
        </p>
        <h2
          className="text-[#4257FA]  text-center mt-25 font-Roboto font-bold text-6xl leading-10 tracking-wide "
          style={{
            WebkitTextStroke: "1px black",
          }}
        >
          NOS SERVICES
        </h2>
        <ServiceCards></ServiceCards>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default HomePage;