import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonPrimary from "./buttonPrimary";
import GradientBorder from "./GradientBorder";
import Logo from "./Logo";

// Utilisez des imports absolus depuis le dossier public
const homeIcon = "/icons/home.svg";
const accountIcon = "/icons/account.svg";
const cartIcon = "/icons/cart.svg";
const logoSvg = "/icons/logo-icon.svg";
const vector = "/icons/Vector.png";
const muscle = "/icons/Muscle.png";
const dumbble = "/icons/solar_dumbbells-bold.png";
const inconnu = "/icons/Inconnu.png";

function Header({ isConnected }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between h-16 md:h-20 max-w-7xl mx-auto px-4 md:px-6 relative">
      <div className="flex items-center gap-3 md:gap-4">
        <div className="scale-75 sm:scale-100">
          <Logo />
        </div>
        
        <div className="hidden sm:flex items-center relative rounded-full py-2.5 md:py-3 px-5 md:px-7 gap-3 md:gap-4 ml-3 md:ml-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(66,250,207,0.3)]">
          <Search className="w-5 h-5 md:w-6 md:h-6 text-primary cursor-pointer transform hover:scale-110 transition-transform" />
          <input
            className="flex-1 placeholder:text-gray-400 outline-none border-none text-white bg-transparent w-36 sm:w-44 md:w-56 lg:w-72 text-sm md:text-base transition-all duration-300"
            type="text"
            placeholder="Rechercher..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        {isConnected ? (
          <div className="flex gap-2 md:gap-4">
            <Link to="/home2">
              <img src={homeIcon} width={49} height={44} alt="Accueil" className="hover:opacity-80" />
            </Link>
            <Link to="/crier-mon-compte">
              <img src={accountIcon} width={49} height={44} alt="Compte" className="hover:opacity-80" />
            </Link>
            <Link to="/panier">
              <img src={cartIcon} width={49} height={44} alt="Panier" className="hover:opacity-80" />
            </Link>
          </div>
        ) : (
           <Link to = '/connexion'> <ButtonPrimary >Connexion</ButtonPrimary></Link>
        )}

        <div className="relative ml-4">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Menu"
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <Menu className="text-white" size={30} />
          </button>
          
          {showMenu && (
            <div className="fixed inset-0 w-screen h-screen bg-gray-800 z-50" style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}> 
               <div className="flex justify-between items-center p-6">
                <img src={logoSvg} alt="Logo" className="h-12" />
                <button 
                  onClick={() => setShowMenu(false)}
                  className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="flex-1 flex flex-col justify-center px-6">
                <div className="space-y-6">
                  {[
                    { to: "/produits1", icon: vector, text: "Produits" },
                    { to: "/coachs1", icon: muscle, text: "Coachs" },
                    { to: "/salles1", icon: dumbble, text: "Salle de Sport" },
                    { to: "/communaute", icon: inconnu, text: "Communauté" }
                  ].map((item) => (
                    <Link 
                      key={item.to}
                      to={item.to}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 transition-colors text-white no-underline text-lg"
                      onClick={() => setShowMenu(false)}
                    >
                      <img src={item.icon} alt="" className="w-8 h-8" />
                      <span className="font-medium">{item.text}</span>
                    </Link>
                  ))}
                </div>
              </nav>
              
              <div className="p-6 border-t border-gray-700">
                <Link 
                  to="/connexion" 
                  className="block w-full py-3 px-4 text-white font-bold rounded-lg text-center hover:opacity-90 transition-opacity no-underline" style={{
                       background: 'linear-gradient(to right, #42FACF, #42C0FA)', 
                       color : 'black'
                  }}
                  onClick={() => setShowMenu(false)}
                >
                  Inscription
                </Link>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;