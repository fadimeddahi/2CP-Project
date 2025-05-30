

import React from 'react';
import Header from "../components/Header"; // Adjusted path if Header is in the components folder
import Footer from "../components/Footer"; // Adjusted path if Footer is in the components folder


function Formulaire () {
  return (
    <div>
      <Header isConnected={true} />
      <div
        style={{
          height: '123px',
          width: '100%',
          padding: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <p className="text-6xl font-bold bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition duration-300">

          FORMULAIRE D'INSCREPTION
        </p>
      
      </div>


        <div style={ {
             display : 'flex' , 
             justifyContent : 'center' , 
             padding :  '20px'
            
        }}>
             
             <div className=" p-6 rounded-lg flex flex-col md:flex-row gap-6 max-w-5xl" style={{
            backgroundColor: 'rgba(66, 250, 207, 0.17)' , 

             }}>
      {/* Left side - Form fields */}
      <div className="flex-1 space-y-4">
        <input
          type="text"
          placeholder="Nom"
          className="w-full text-white placeholder-white/70 p-3 rounded-md" 
          style={ { 
            backgroundColor : 'rgba(66, 192, 250, 0.4)'
          }}
        />
      
        <input
          type="text"
          placeholder="Prénom"
          className="w-full bg-teal-700/60 text-white placeholder-white/70 p-3 rounded-md"
          style={ { 
            backgroundColor : 'rgba(66, 192, 250, 0.4)'
          }}
        />
        <input
          type="email"
          placeholder="Adresse e-mail"
          className="w-full bg-teal-700/60 text-white placeholder-white/70 p-3 rounded-md"
          style={ { 
            backgroundColor : 'rgba(66, 192, 250, 0.4)'
          }}
        />
        <input
          type="tel"
          placeholder="Numéro de téléphone"
          className="w-full bg-teal-700/60 text-white placeholder-white/70 p-3 rounded-md"
          style={ { 
            backgroundColor : 'rgba(66, 192, 250, 0.4)'
          }}
        />
        <div className="relative">
          <select className="w-full bg-teal-700/60 text-white p-3 rounded-md appearance-none"   style={ { 
            backgroundColor : 'rgba(66, 192, 250, 0.4)'
          }}>
            <option>Étoile sélectionnée</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        <div className="relative">
          <select className="w-full  text-white p-3 rounded-md appearance-none"   style={ { 
            backgroundColor : 'rgba(66, 192, 250, 0.4)'
          }}>
            <option>Choix de l'abonnement</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

    
      <div className="flex flex-col items-center justify-center" >
        <div className="w-24 h-24 rounded-full bg-emerald-400 flex items-center justify-center" >
          <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
        <p className="text-white mt-4 text-center" style={{
            
        }}>Nom de l'utilisateur</p>
        <button className="mt-6 bg-emerald-400 text-teal-900 font-bold py-2 px-4 rounded-md text-sm">
          VALIDER MON INSCRIPTION
        </button>
      </div>
    </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default Formulaire;