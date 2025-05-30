import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SalleCard from "../components/SalleCard";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import gymAPI from "../api/gymsAPI";

// Import fallback images
import salle1Image from "/images/salle-1.png";
import salle2Image from "/images/salle-2.png";
import salle3Image from "/images/salle-3.png";
import salle4Image from "/images/salle-4.png";
import salle5Image from "/images/salle-5.png";
import salle6Image from "/images/salle-6.png";

// Fallback images array
const fallbackImages = [salle1Image, salle2Image, salle3Image, salle4Image, salle5Image, salle6Image];

function Salles2Page() {
  const [gyms, setGyms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch all gyms from API
    const fetchGyms = async () => {
      try {
        setIsLoading(true);
        const response = await gymAPI.getAllGyms();
        
        // Map the API response to match your component props
        const formattedGyms = response.data.map((gym, index) => {
          // Format operating hours string from the schedule object
          const formatHoraires = (horaires) => {
            if (!horaires) return "Horaires non disponibles";
            
            const daysInFrench = {
              lundi: 'Lundi',
              mardi: 'Mardi', 
              mercredi: 'Mercredi',
              jeudi: 'Jeudi',
              vendredi: 'Vendredi',
              samedi: 'Samedi',
              dimanche: 'Dimanche'
            };
            
            // Format detailed schedule
            return Object.entries(horaires)
              .map(([day, hours]) => `${daysInFrench[day] || day}: ${hours.ouverture} - ${hours.fermeture}`)
              .join('\n');
          };
          
          return {
            id: gym._id,
            salleName: gym.nom,
            salleImage: gym.images && gym.images.length > 0 
              ? gym.images[0] 
              : fallbackImages[index % fallbackImages.length],
            hourPrice: "0",
            salleServices: gym.equipements || [],
            salleHours: formatHoraires(gym.horaires),
            salleAddress: gym.localisation ? 
              `${gym.localisation.ville}, ${gym.localisation.pays}` : 
              "Adresse non disponible",
            description: gym.description || "Aucune description disponible"
          };
        });
        
        setGyms(formattedGyms);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch gyms:", err);
        setError("Impossible de charger les salles. Veuillez réessayer plus tard.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGyms();
  }, []);

  return (
    <div>
      <Header isConnected={true}></Header>
      <section className="mt-20">
        <h2 className="heading-2 text-center max-w-[1060px] mx-auto">
          SALLES DE SPORT
        </h2>
      </section>
      <section className="max-w-[1264px] mt-25 mx-auto">
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 mx-auto">
            {error}
          </div>
        )}
        
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[40px] bg-primary/20 p-6 gap-6 max-w-[1264px] mx-auto overflow-visible">
            {gyms.length > 0 ? (
              gyms.map((salle, index) => (
                <SalleCard
                  key={salle.id || index}
                  salleId={salle.id}
                  salleName={salle.salleName}
                  salleImage={salle.salleImage}
                  salleServices={salle.salleServices}
                  salleAddress={salle.salleAddress}
                  salleHours={salle.salleHours}
                  hourPrice={salle.hourPrice}
                  description={salle.description}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p className="text-xl text-gray-400">Aucune salle disponible pour le moment</p>
              </div>
            )}
          </div>
        )}
        
        <div className="mx-auto w-fit rounded-full mt-10 -mb-15">
          <Link to="/salles1">
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

export default Salles2Page;
