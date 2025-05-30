import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CoachCard from "../components/coach/CoachCard";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import coachAPI from "../api/coachesAPI";

// Import fallback images
import coach1Image from "/images/coach-1.png";
import coach2Image from "/images/coach-2.png";
import coach3Image from "/images/coach-3.png";
import coach4Image from "/images/coach-4.png";
import coach5Image from "/images/coach-5.png";
import coach6Image from "/images/coach-6.png";

// Array of fallback images
const fallbackImages = [coach1Image, coach2Image, coach3Image, coach4Image, coach5Image, coach6Image];

function Coachs2Page() {
  const [coaches, setCoaches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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
        setError("Impossible de charger les coachs.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoaches();
  }, []);

  // Filter coaches based on search query
  const filteredCoaches = searchQuery 
    ? coaches.filter(coach => 
        coach.coachName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coach.coachDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coach.coachAddress.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : coaches;

  return (
    <div>
      <Header isConnected={true} />
      <section className="mt-20">
        <h2 className="heading-2 text-center max-w-[1060px] mx-auto">
          COACHS SPORTIFS
        </h2>
        
        {/* Search bar */}
        <div className="max-w-md mx-auto mt-6">
          <input
            type="text"
            placeholder="Rechercher un coach..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </section>
      
      <section className="max-w-[1264px] mt-25 mx-auto">
        {/* Error message */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 mx-auto">
            {error}
          </div>
        )}
        
        {/* Loading state */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[40px] bg-primary/20 p-10 gap-10">
            {filteredCoaches.length > 0 ? (
              filteredCoaches.map((coach, index) => (
                <CoachCard
                  key={coach.id || index}
                  coachId={coach.id}
                  coachName={coach.coachName}
                  coachImage={coach.coachImage}
                  coachDescription={coach.coachDescription}
                  coachAddress={coach.coachAddress}
                  hourPrice={coach.hourPrice}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p className="text-xl text-gray-400">Aucun coach trouvé</p>
              </div>
            )}
          </div>
        )}
        
        <div className="mx-auto w-fit rounded-full mt-10 -mb-15">
          <Link to="/coachs1">
            <ChevronLeft
              width={41}
              height={105}
              color="white"
              stroke="white"
            />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Coachs2Page;
