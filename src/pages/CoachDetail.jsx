import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonPrimary from '../components/buttonPrimary';
import { ChevronLeft, Star, Calendar, MapPin, Mail } from 'lucide-react';
import coachAPI from '../api/coachesAPI';

// Fallback image
import defaultCoachImage from '/images/coach-1.png';

function CoachDetail() {
  const { id } = useParams();
  const [coach, setCoach] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoachDetails = async () => {
      try {
        setIsLoading(true);
        const response = await coachAPI.getCoachById(id);
        setCoach(response.data.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch coach details:", err);
        setError("Impossible de charger les détails de ce coach.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchCoachDetails();
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <Header isConnected={true} />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/coachs1" className="flex items-center text-white mb-6 hover:text-primary">
          <ChevronLeft size={20} />
          <span className="ml-2">Retour aux coachs</span>
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
        ) : coach ? (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3 bg-primary/10">
                <div className="p-6 flex flex-col items-center">
                  <div className="w-52 h-52 rounded-full overflow-hidden mb-6 border-4 border-primary">
                    <img 
                      src={coach.photo && coach.photo !== 'default.jpg' 
                        ? `http://localhost:5000/uploads/users/${coach.photo}` 
                        : defaultCoachImage} 
                      alt={`${coach.firstName} ${coach.lastName}`} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = defaultCoachImage; }}
                    />
                  </div>
                  
                  <h1 className="text-3xl font-bold text-center mb-2">
                    {coach.firstName} {coach.lastName}
                  </h1>
                  
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        size={20} 
                        fill={star <= 3 ? "#42FACF" : "transparent"} 
                        stroke="#42FACF"
                      />
                    ))}
                  </div>
                  
                  <p className="text-lg font-medium text-center mb-6">
                    {coach.specialty || "Coach sportif professionnel"}
                  </p>
                  
                  <div className="flex items-center mb-3">
                    <MapPin size={20} className="text-primary mr-2" />
                    <span>{coach.address || "Algerie"}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail size={20} className="text-primary mr-2" />
                    <span>{coach.email}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">À propos</h2>
                  <p className="text-gray-600">
                    {coach.bio || "Ce coach n'a pas encore ajouté de biographie. Contactez-le directement pour en savoir plus sur ses méthodes d'entraînement et son expérience."}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Expertise</h2>
                  <div className="flex flex-wrap gap-2">
                    {coach.expertises ? (
                      coach.expertises.map((expertise, index) => (
                        <span 
                          key={index} 
                          className="bg-primary/30 text-[#0A70B1] rounded-full px-3 py-1"
                        >
                          {expertise}
                        </span>
                      ))
                    ) : (
                      ['Musculation', 'Fitness', 'Nutrition'].map((expertise, index) => (
                        <span 
                          key={index} 
                          className="bg-primary/30 text-[#0A70B1] rounded-full px-3 py-1"
                        >
                          {expertise}
                        </span>
                      ))
                    )}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Tarifs</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="flex justify-between items-center">
                      <span>Séance individuelle</span>
                      <span className="font-bold text-xl">{coach.hourPrice || "50"}€/h</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ButtonPrimary>
                    <div className="flex items-center">
                      <Calendar className="mr-2" size={20} />
                      Prendre rendez-vous
                    </div>
                  </ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-white text-lg">
            Coach non trouvé
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default CoachDetail;