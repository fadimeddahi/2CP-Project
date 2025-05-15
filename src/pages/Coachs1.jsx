import React, { useState, useEffect } from 'react';
import heroBgImage from '/images/coachs1-hero.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonPrimary from '../components/buttonPrimary';
import CoachCard from '../components/coach/CoachCard';
import coachAPI from '../api/coachesAPI';

// Import fallback images for when API images fail
import coach1Image from '/images/coach-1.png';
import coach2Image from '/images/coach-2.png';
import coach3Image from '/images/coach-3.png';
import coach4Image from '/images/coach-4.png';
import coach5Image from '/images/coach-5.png';
import coach6Image from '/images/coach-6.png';

// Fallback coaches in case API fails
const FALLBACK_COACHES = [
  {
    id: 'coach1',
    coachName: "Alex Moreau",
    coachImage: coach1Image,
    hourPrice: "0",
    coachDescription: "Préparateur physique & Coach en musculation",
    coachAddress: "Annaba, Algerie",
  },
  // Other fallback coaches...
];

// Array of fallback images to use when coach photos are missing
const fallbackImages = [coach1Image, coach2Image, coach3Image, coach4Image, coach5Image, coach6Image];

function Coachs1Page() {
  const [coaches, setCoaches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch coaches from API
    const fetchCoaches = async () => {
      try {
        setIsLoading(true);
        const response = await coachAPI.getAllCoaches();
        
        // Map the API response to match your component props
        const formattedCoaches = response.data.data.map((coach, index) => {
          // Generate a coach name from firstName and lastName
          const fullName = `${coach.firstName} ${coach.lastName}`;
          
          // Format the coach photo URL or use fallback
          const photoUrl = coach.photo && coach.photo !== 'default.jpg'
            ? `http://localhost:5000/uploads/users/${coach.photo}`
            : fallbackImages[index % fallbackImages.length];
          
          return {
            id: coach._id,
            coachName: fullName,
            coachImage: photoUrl,
            hourPrice: coach.hourPrice || "0",
            coachDescription: coach.specialty || "Coach sportif professionnel",
            coachAddress: coach.address || "Algerie",
          };
        });
        
        setCoaches(formattedCoaches);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch coaches:", err);
        setError("Impossible de charger les coachs. Utilisation des données de secours.");
        setCoaches(FALLBACK_COACHES);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoaches();
  }, []);

  return (
    <div className="z-0 overflow-x-clip">
      <div
        className="pb-43"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <Header isConnected={true}></Header>
        <section className="mt-20">
          <h2 className="heading-1 text-center max-w-[1200px] mx-auto">
            TROUVEZ <span className="text_gradient">LE COACH PARFAIT</span>{" "}
            POUR ATTEINDRE VOS OBJECTIFS
          </h2>
          <p className="paragraph-2 max-w-[1000px] mx-auto mt-30">
            Des coachs certifiés, des résultats garantis. Que vous soyez
            débutant ou athlète confirmé, trouvez le coach qui vous convient
          </p>
          <ButtonPrimary buttonClassName="mx-auto mt-20">
            <a href="#relative">Trouver mon coach</a>
          </ButtonPrimary>
        </section>
      </div>

      <section id="relative">
        <div
          className="w-full h-74 bg-background absolute top-10 -translate-y-1/2 -z-10"
          style={{
            filter: "blur(60px)",
          }}
        ></div>
        
        {/* Error message */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 max-w-[1264px] mx-auto">
            {error}
          </div>
        )}
        
        {/* Loading state */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[40px] bg-primary/20 p-10 gap-10 max-w-[1264px] mx-auto">
            {coaches.slice(0, 6).map((coach, index) => (
              <CoachCard
                key={coach.id || index}
                coachId={coach.id}
                coachName={coach.coachName}
                coachImage={coach.coachImage}
                coachDescription={coach.coachDescription}
                coachAddress={coach.coachAddress}
                hourPrice={coach.hourPrice}
              />
            ))}
          </div>
        )}
        
        <div className="bg-primary py-2 px-4 mt-15 mx-auto w-fit rounded-full">
          <a
            href="Coachs2"
            className="font-Poppins font-medium text-lg tracking-wider"
          >
            Voir plus {">"}
          </a>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Coachs1Page;
