import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import CartFAQ from '../components/CartFAQ';

function FAQ() {
  return (
    <div className="overflow-auto max-h-screen bg-[#0a0f1d] text-white">
      <section className="">
       <div
        className=" pb-43"
        style={{
        
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <Header2 isConnected={true}></Header2>
      
      </div>

        <h2 className="heading-1 text-center max-w-[1200px] mx-auto">
          <span className="text_gradient">FOIRE AUX QUESTIONS</span>
        </h2>
        <p className="text-4xl text-center">Besoin d’aide ? Nous répondons à</p>
        <p className="text-4xl text-center">vos questions !</p>

        <div className="w-1/4 flex justify-center items-center bg-[#42c0fa99] rounded-2xl p-5 mx-auto mt-10">
          <input
            type="text"
            value="Tapez votre question ici..."
            className="focus text-white placeholder:text-white p-5 bg-transparent w-full"
          />
        </div>
      </section>

     <div> <h1 className="text-7xl text-center mt-20 mb-10 font-bold">Catégories de FAQ</h1></div>


      <div className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          <div className="border-2 bg-[#2a5b78] p-6 rounded-xl shadow-lg text-center p-18 hover:border-blue-600 transition duration-200">
            <h3 className="text-xl font-bold mb-2 ">
              Comment passer une commande sur AthelX ?
            </h3>
            <p className='text-black font-bold'>Ajoutez vos produits au panier et suivez le processus de paiement sécurisé.</p>
          </div>

          <div className="border-2 bg-[#2a5b78] p-6 rounded-xl shadow-lg text-center p-18 hover:border-blue-600 transition duration-200">
            <h3 className="text-xl font-bold mb-2">Quels sont les délais de livraison ?</h3>
            <p className='text-black font-bold'>Nos livraisons prennent en moyenne 3 à 5 jours ouvrés en Algérie.</p>
          </div>

          <div className="border-2 bg-[#2a5b78] p-6 rounded-xl shadow-lg text-center p-18 hover:border-blue-600 transition duration-200">
            <h3 className="text-xl font-bold mb-2">
              Vos compléments alimentaires sont-ils certifiés ?
            </h3>
            <p className='text-black font-bold'>
              Oui, tous les produits sont testés en laboratoire et certifiés sans substances
              interdites.
            </p>
          </div>

          <div className="border-2 bg-[#2a5b78]  rounded-xl shadow-lg text-center p-18 hover:border-blue-600 transition duration-200">
            <h3 className="text-xl font-bold mb-2">Comment trouver un coach sur AthelX ?</h3>
            <p className='text-black font-bold'>
              Allez dans la section "Coachs", sélectionnez un coach et réservez une séance en ligne.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FAQ;
