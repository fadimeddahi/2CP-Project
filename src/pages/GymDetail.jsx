import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonPrimary from '../components/buttonPrimary';
import { ChevronLeft, Clock, MapPin, User } from 'lucide-react';
import gymAPI from '../api/gymsAPI';

// Fallback image
import defaultGymImage from '/images/salle-1.png';

function GymDetail() {
  const { id } = useParams();
  const [gym, setGym] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGymDetails = async () => {
      try {
        setIsLoading(true);
        const response = await gymAPI.getGymById(id);
        setGym(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch gym details:", err);
        setError("Impossible de charger les détails de cette salle.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchGymDetails();
    }
  }, [id]);

  // Format the schedule into a readable format
  const formatSchedule = (horaires) => {
    if (!horaires) return [];
    
    const daysTranslation = {
      lundi: 'Lundi',
      mardi: 'Mardi',
      mercredi: 'Mercredi',
      jeudi: 'Jeudi',
      vendredi: 'Vendredi',
      samedi: 'Samedi',
      dimanche: 'Dimanche'
    };
    
    return Object.entries(horaires).map(([day, hours]) => ({
      day: daysTranslation[day],
      hours: `${hours.ouverture} - ${hours.fermeture}`
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header isConnected={true} />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/salles1" className="flex items-center text-white mb-6 hover:text-primary">
          <ChevronLeft size={20} />
          <span className="ml-2">Retour aux salles</span>
        </Link>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-700 p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-xl mb-2">Erreur</h3>
            <p>{error}</p>
          </div>
        ) : gym ? (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="h-80 overflow-hidden relative">
              {gym.images && gym.images.length > 0 ? (
                <img 
                  src={gym.images[0]} 
                  alt={gym.nom} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={defaultGymImage} 
                  alt={gym.nom} 
                  className="w-full h-full object-cover"
                />
              )}
              
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white shadow-text">{gym.nom}</h1>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">Description</h2>
                  <p className="text-gray-700">
                    {gym.description || "Cette salle de sport offre un environnement moderne et accueillant pour tous vos entraînements."}
                  </p>
                  
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Équipements</h2>
                    <div className="flex flex-wrap gap-2">
                      {gym.equipements && gym.equipements.map((equipment, index) => (
                        <span 
                          key={index} 
                          className="bg-primary/30 text-[#0A70B1] rounded-full px-4 py-1 capitalize"
                        >
                          {equipment}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {gym.coachs && gym.coachs.length > 0 && (
                    <div className="mt-8">
                      <h2 className="text-2xl font-bold mb-4">Coachs disponibles</h2>
                      <div className="flex flex-wrap gap-4">
                        {gym.coachs.map((coach, index) => (
                          <div key={index} className="flex items-center bg-gray-100 p-2 rounded-lg">
                            <User className="mr-2 text-primary" />
                            <span>{typeof coach === 'object' ? coach.nom || 'Coach' : 'Coach'}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4">Informations</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-2">Adresse</h4>
                    <div className="flex items-start">
                      <MapPin className="mr-2 mt-1 text-primary" size={18} />
                      <p>
                        {gym.localisation && (
                          <>
                            {gym.localisation.adresse}<br />
                            {gym.localisation.ville}, {gym.localisation.pays}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-primary mb-2">Horaires d'ouverture</h4>
                    <div className="space-y-2">
                      {formatSchedule(gym.horaires).map((day, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium">{day.day}</span>
                          <span>{day.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <ButtonPrimary>
                  S'inscrire à cette salle
                </ButtonPrimary>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-white text-lg">
            Salle de sport non trouvée
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default GymDetail;