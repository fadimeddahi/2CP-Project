import React from 'react'
import proprs from '/images/proprs.svg';
import Header from '../components/Header2';
import Footer from '../components/Footer';
import ButtonPrimary from '../components/buttonPrimary';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";




function Proprs() {
  return (
    <div className=" z-0 overflow-x-clip">
      <div
        className=" pb-43"
        style={{
          backgroundImage: `url(${proprs})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <Header isConnected={true}></Header>
        <section className="mt-20">
          <h2 className="heading-1 text-center  max-w-[1200px] mx-auto">
            À PROPOS DE <span className="text_gradient">ATHELX</span>{" "}

          </h2>
          <p className="paragraph-2 max-w-[1000px] mx-auto mt-30">
            Nous aidons les athlètes à repousser leurs limites grâce à des compléments de qualité, des coachs experts et une communauté soudée
          </p>
          <div className="flex items-center justify-center h-screen">
            <ButtonPrimary buttonClassName="mx-auto">
              <a href="#ROO">Découvrir plus</a>
            </ButtonPrimary>
          </div>

        </section>
      </div>

      <section id="ROO">
        <div
          className="w-full h-74 bg-background absolute top-10 -translate-y-1/2 -z-10"
          style={{
            filter: "blur(60px)",
          }}
        ></div>
        <div className='w-screen flex justify-center items-center gap-5 flex-col grad-bg2 rounded-xl'>
          <h2 className="heading-1 text-center  max-w-[1200px] mx-auto">Qui sommes-nous ?

          </h2>
          <p className="paragraph-2 max-w-[1000px] mx-auto mt-30"> Chez AthelX, nous croyons que chaque athlète mérite les meilleures ressources pour exceller. Que vous soyez un sportif amateur ou un professionnel, notre plateforme vous accompagne avec des solutions adaptées à vos besoins
          </p>
        </div>
        <div className='w-screen flex justify-center items-center gap-5 flex-col grad-bg2 rounded-xl'>

        </div>
      </section>
<div className="min-h-screen w-full bg-[#0a0f1d] text-white p-6 space-y-10 flex flex-col items-center px-4 md:px-20">

  
      <div className="border-2 rounded-xl shadow-2xl p-32 max-w w-full hover:border-blue-600 transition duration-200 pb-1 " style={{ backgroundColor: "rgba(66, 192, 250, 0.28)" }}>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
      
          <div className="flex flex-col items-center text-center mb-20">
            <div className="w-59 h-55 bg-[#64fcd9] text-3xl rounded-full flex items-center justify-center text-black font-bold mb-8">
              Performance
            </div>
         <p className="mt-4 max-w-xs text-2xl">
  Nous vous aidons à<br />
  améliorer vos <br />
  résultats avec des<br />
  conseils et des<br /> produits de <br />
   qualité. <br />
</p>
          </div>
       
          <div className="flex flex-col items-center text-center mb-20">
            <div className="w-59 h-55 bg-[#64fcd9] text-3xl rounded-full flex items-center justify-center text-black font-bold mb-8">
              Communauté
            </div>
            <p className="mt-4 max-w-xs text-2xl">
              Nous créons un<br /> réseau où les <br />athlètes peuvent <br />échanger, apprendre<br />
              et progresser<br /> ensemble.<br />
            </p>
          </div>
   
          <div className="flex flex-col items-center text-center mb-20">
            <div className="w-59 h-55 bg-[#64fcd9] text-3xl rounded-full flex items-center justify-center text-black font-bold mb-8">
              Bien-être
            </div>
            <p className="mt-4 max-w-xs text-2xl">
              Nous mettons <br/> l'accent sur une <br/>  approche équilibrée <br/> entre
              entraînement,<br/>  nutrition et <br/> récupération.<br/> 
            </p>
          </div>
        </div>
      </div>

      <div className=" text-center ">
        <h2 className=" text-4xl font-bold mb-10  pb-1s">Ce que nous offrons</h2>
  <div className="justify-center border-2 p-24 rounded-xl shadow-3xl text-black space-y-6 font-bold text-3xl <p className='text-black font-bold' flex flex-col items-center text-center" style={{ backgroundColor: "rgba(66, 192, 250, 0.28)" }}>
  <Link to="/produit1" className="block border-b-2 border-transparent hover:border-blue-500 transition-colors duration-200 w-fit">
     Compléments alimentaires
  </Link>
  <Link to="/produit1" className="block border-b-2 border-transparent hover:border-blue-500 transition-colors duration-200 w-fit">
     Coachs sportifs
  </Link>
  <Link to="/produit1" className="block border-b-2 border-transparent hover:border-blue-500 transition-colors duration-200 w-fit">
     Communauté
  </Link>
  <Link to="/produit1" className="block border-b-2 border-transparent hover:border-blue-500 transition-colors duration-200 w-fit">
     Salles de sports
  </Link>
</div>

      </div>
    </div>
      <Footer></Footer>
    </div>
  );
}

export default Proprs