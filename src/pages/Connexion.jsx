import { Lock, Mail, User } from "lucide-react";
import React, { useState } from "react";
import Logo from "../components/Logo";

function Connexion() {
  const [userState, setUserState] = useState("connexion");
  return (
    <div className="connexion-bg-gradient">
      <div className="relative h-[127vh] ">
        <div className={`w-[60%] connexion-box absolute top-40 flex items-center justify-end py-10 pr-25 right-30`}>
          <div className="flex flex-col items-center w-[60%] h-full">
            <h2 className="font-Poppins font-bold text-[50px] leading-[75px] tracking-[2px] text-background uppercase">
              {userState}
            </h2>
            <div className="mt-7 w-full">
              {userState === "inscription" && (
                <div className="w-full flex items-center mt-7 pb-3 border-b-2 border-b-black">
                  <input
                    type="text"
                    placeholder="Nom d’utilisateur"
                    className="h-full outline-none border-none  flex-1 font-Poppins font-medium text-xl tracking-[1px] placeholder:text-black text-black"
                  />
                  <User className="text-black"></User>
                </div>
              )}
              <div className="w-full flex items-center pb-3  border-b-2 border-b-black mt-7">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-full outline-none border-none  flex-1 font-Poppins font-medium text-xl tracking-[1px] placeholder:text-black text-black"
                />
                <Mail className="text-black"></Mail>
              </div>
              <div className="w-full flex items-center pb-3  border-b-2 border-b-black mt-7">
                <input
                  type="text"
                  placeholder="Mot de passe"
                  className="h-full outline-none border-none  flex-1 font-Poppins font-medium text-xl tracking-[1px] placeholder:text-black text-black"
                />
                <Lock className="text-black"></Lock>
              </div>
            </div>
            <button className="cursor-pointer mt-20 bg-primary py-1.5 text-center font-Roboto font-bold text-[27px] tracking-wider  w-full rounded-full">
              Connexion
            </button>
            {userState === "connexion" ? (
              <div className="flex w-full items-center justify-between mt-10">
                <span
                  onClick={() => setUserState("inscription")}
                  className="cursor-pointer font-Roboto font-bold text-xl"
                >
                  Créer un compte
                </span>
                <span className="cursor-pointer font-Roboto font-bold text-xl">
                  Mot de passe oublie
                </span>
              </div>
            ) : (
              <span
                onClick={() => setUserState("connexion")}
                className="cursor-pointer font-Roboto font-bold text-xl mx-auto mt-10"
              >
                Vous avez déjà un compte ?
              </span>
            )}
          </div>
        </div>
        <div className={`absolute h-fit w-[35%] top-1/2 -translate-y-1/2 rounded-[55px] overflow-clip left-30`} style={{
            boxShadow:"0px 40px 50px rgba(0, 0, 0, 0.25)"
        }}>
          <div className="relative">
            <Logo className="absolute top-10 left-1/2 -translate-x-1/2"></Logo>
            <img src="images/connexion-image.png" className=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
