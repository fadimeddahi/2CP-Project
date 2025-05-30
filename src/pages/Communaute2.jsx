import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ChevronLeft } from "lucide-react";
import Communaute from "./communaute";
import CommunauteCard from "../components/Communautecard"; 
import { Link } from "react-router-dom";

const COMMUNAUTÉ = [
  {
    Communautename: "Rachid B ",
    Communautedescription: "Salut la team ! J’ai commencé la musculation il y a 3 mois, mais j’ai du mal à prendre de la masse. Vous me conseillez quoi comme programme alimentaire ?",
  },
  {
    Communautename: "Nadia M ",
    Communautedescription: "Petite victoire personnelle : j’ai enfin réussi à courir 5 km sans m’arrêter ! Merci pour tous vos conseils, surtout sur la respiration et l’endurance.",
  },
  {
    Communautename: " Yassine D",
    Communautedescription: "Les amis, est-ce que quelqu’un a testé les entraînements en circuit pour perdre du poids ? J’hésite entre ça et la course à pied. Vos avis ?",
  },
  {
    Communautename: "Rachid B ",
    Communautedescription: "Salut la team ! J’ai commencé la musculation il y a 3 mois, mais j’ai du mal à prendre de la masse. Vous me conseillez quoi comme programme alimentaire ?",
  },
  {
    Communautename: " Yassine D",
    Communautedescription: "Les amis, est-ce que quelqu’un a testé les entraînements en circuit pour perdre du poids ? J’hésite entre ça et la course à pied. Vos avis ?",
  },
  {
    Communautename: "Nadia M ",
    Communautedescription: "Petite victoire personnelle : j’ai enfin réussi à courir 5 km sans m’arrêter ! Merci pour tous vos conseils, surtout sur la respiration et l’endurance.",
  },
  {
    Communautename: " Yassine D",
    Communautedescription: "Les amis, est-ce que quelqu’un a testé les entraînements en circuit pour perdre du poids ? J’hésite entre ça et la course à pied. Vos avis ?",
  },
  {
    Communautename: "Nadia M ",
    Communautedescription: "Petite victoire personnelle : j’ai enfin réussi à courir 5 km sans m’arrêter ! Merci pour tous vos conseils, surtout sur la respiration et l’endurance.",
  },
  {
    Communautename: "Rachid B ",
    Communautedescription: "Salut la team ! J’ai commencé la musculation il y a 3 mois, mais j’ai du mal à prendre de la masse. Vous me conseillez quoi comme programme alimentaire ?",
  },
  

];

function Communaute2Page() {
  return (
    <div>
      <Header isConnected={true}></Header>
      <section className="mt-20">
      <h2 className="heading-1 text-center  max-w-[1200px] mx-auto">
      COMMUNAUTÉ   <span className="text_gradient">ATHELX</span>{" "}
             
            </h2>
      </section>
      <section className="max-w-[1264px] mt-5 mx-auto">
        <div className="grid grid-cols-3 rounded-[40px] bg-primary/20 p-10 gap-10">
          {COMMUNAUTÉ.map((Communaute, index) => (
            <CommunauteCard
              key={index}
              Communautename={Communaute.Communautename}
              Communautedescription={Communaute.Communautedescription}
            ></CommunauteCard>
          ))}
        </div>
        <div className="mx-auto w-fit rounded-full mt-10 -mb-15">
        <Link to="/communaute">
          <ChevronLeft
            width={41}
            height={105}
            color="white"
            stroke="white"
          ></ChevronLeft>
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Communaute2Page;

