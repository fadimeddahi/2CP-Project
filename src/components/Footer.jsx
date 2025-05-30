import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logoIcon from "/icons/logo-icon.svg";
import facebookIcon from "/icons/facebook.svg";
import instagramIcon from "/icons/instagram.svg";
import twitterIcon from "/icons/twitter.svg";
import locationIcon from "/icons/location.svg";
import emailIcon from "/icons/email.svg";
import phoneIcon from "/icons/phone.svg";
import whatsappIcon from "/icons/whatsapp.svg";

import Logo from "./Logo";

function Footer() {
  return (
    <footer className="mt-16 md:mt-24 pb-4 md:pb-7">
      <div className="h-1 md:h-1.5 w-full bg-gradient-to-r from-primary to-secondary"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 md:gap-9 row-span-2">
          <img src={logoIcon} alt="logo icon" className="w-32 md:w-48 h-auto" />
          <Logo />
          <div className="flex gap-4 md:gap-7">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={facebookIcon} alt="facebook icon" className="w-8 md:w-10 h-auto" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={instagramIcon} alt="instagram icon" className="w-8 md:w-10 h-auto" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={twitterIcon} alt="twitter icon" className="w-8 md:w-10 h-auto" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <div>
            <h2 className="font-Roboto font-bold text-xl md:text-2xl lg:text-3xl text-white">
              Liens rapides
            </h2>
            <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6">
              <li className="text-white font-Roboto text-lg md:text-xl hover:text-primary transition-colors">
                <Link to="/home2">Acceil</Link>
              </li>
              <li className="text-white font-Roboto text-lg md:text-xl hover:text-primary transition-colors">
                À Propos
              </li>
              <li className="text-white font-Roboto text-lg md:text-xl hover:text-primary transition-colors">
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div>
            <h2 className="font-Roboto font-bold text-xl md:text-2xl lg:text-3xl text-white">
              Contactez-nous
            </h2>
            <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6">
              <li className="text-white font-Roboto text-lg md:text-xl flex items-center gap-2">
                <img src={locationIcon} alt="location icon" className="w-6 md:w-7 h-auto" />
                <span>Amizour, Béjaïa, Algérie</span>
              </li>
              <li className="text-white font-Roboto text-lg md:text-xl flex items-center gap-2">
                <img src={emailIcon} alt="email icon" className="w-6 md:w-7 h-auto" />
                <span>contact@athelx.com</span>
              </li>
              <li className="text-white font-Roboto text-lg md:text-xl flex items-center gap-2">
                <img src={phoneIcon} alt="phone icon" className="w-6 md:w-7 h-auto" />
                <span>+213 X XX XX XX XX</span>
              </li>
              <li className="text-white font-Roboto text-lg md:text-xl flex items-center gap-2">
                <img src={whatsappIcon} alt="whatsapp icon" className="w-6 md:w-7 h-auto" />
                <span>+213 X XX XX XX XX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-1 md:col-span-3 mt-8 md:mt-12">
          <div className="w-full h-px bg-gray-600"></div>
          <p className="text-white font-Roboto text-lg md:text-xl text-center mt-6 md:mt-8">
            © 2025 AthelX • Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
