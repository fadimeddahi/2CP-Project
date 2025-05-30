import React from 'react'
import heroBgImage from '/images/coachs1-hero.png'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonPrimary from '../components/buttonPrimary';
import CommunauteCard from '../components/Communautecard';
import { MdKeyboardArrowRight } from "react-icons/md";
import PostCart2 from '../components/PostCart2';


const COMMUNAUTÉ = [
    {
        Communautename: "Rachid B ",
        Communautedescription: "Salut la team ! J’ai commencé la musculation il y a 3 mois, mais j’ai du mal à prendre de la masse. Vous me conseillez quoi comme programme alimentaire ?     ",
    },
    {
        Communautename: "Nadia M ",
        Communautedescription: "Petite victoire personnelle : j’ai enfin réussi à courir 5 km sans m’arrêter ! Merci pour tous vos conseils, surtout sur la respiration et l’endurance.    ",
    },
    {
        Communautename: "Yassine D",
        Communautedescription: "Les amis, est-ce que quelqu’un a testé les entraînements en circuit pour perdre du poids ? J’hésite entre ça et la course à pied. Vos avis ?",
    } ,
];


function Communaute() {
    return (
      <div className=" z-0 overflow-x-clip">
        <div
          className=" pb-43"
          style={{
            backgroundImage: `url(${heroBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <Header isConnected={true}></Header>
          <section className="mt-20">
            <h2 className="heading-1 text-center  max-w-[1200px] mx-auto">
            REJOIGNEZ LA COMMUNAUTÉ <span className="text_gradient">ATHELX</span>{" "}
             
            </h2>
            <p className="paragraph-2 max-w-[1000px] mx-auto mt-30">
            Discutez avec d'autres passionnés, partagez vos expériences et trouvez la motivation qu'il vous faut.
            </p>
            <ButtonPrimary buttonClassName="mx-auto mt-20">
            <a href= "#relative z-0" >REJOIGNEZ LA COMMUNAUTÉ</a> 
            </ButtonPrimary>
          </section>
        </div>

        <section id="relative z-0">
          <div
            className="w-full h-74 bg-background absolute top-10 -translate-y-1/2 -z-10"
            style={{
              filter: "blur(60px)",
            }}
          ></div>
          <div className='w-screen flex justify-center items-center gap-5 flex-col grad-bg2 rounded-xl'>
          <h2 className="heading-1 text-center  max-w-[1200px] mx-auto">TOP MEMBRES
          <span className="text_gradient">ACTIFS</span>{" "}
            </h2>
        <div className='flex justify-center items-center flex-row p-8 gap-5  '>
        {COMMUNAUTÉ.map((Communaute, index) => (
  <CommunauteCard
    key={index}
    Communautename={Communaute.Communautename}
    Communautedescription={Communaute.Communautedescription}
  ></CommunauteCard>
))}
        </div>
    </div>
          <div className="bg-primary py-2 px-4 mt-15 mx-auto w-fit rounded-full">
            <a
              href="Communaute2"
              className="font-Poppins font-medium text-lg tracking-wider"
            >
              Voir plus {">"}
            </a>
          </div>
          <section className='flex justify-center items-center flex-col gap-5 mt-20' 
          >
       <div className='flex justify-center items-center flex-row gap-5 w-full'>
       <MdKeyboardArrowRight/>
     <div>
        <h2 className="heading-1 text-center  max-w-[1200px] mx-auto">
     CRÉER UN<span className="text_gradient"> POST</span>{" "}
       </h2>
     </div> 
     </div>
     <section className='flex justify-center items-center flex-col gap-5 mt-20' 
     style={
        {
        
          height: "550px",
          width: "1100px",
          borderRadius: "2px solid 0000",
            
                
        }}>
     
    <PostCart2/>  </section>
     </section>  
    
 
       
       </section>
        <Footer></Footer>
      </div>
    );
}

export default  Communaute