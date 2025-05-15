import React, { useState } from "react";
import { Star, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import greenLocationIcon from "/icons/location-green.svg";

function CoachCard({
  coachId,
  coachImage,
  coachName,
  hourPrice,
  coachDescription,
  coachAddress
}) {
  const [imageError, setImageError] = useState(false);
  
  // Handle image loading error
  const handleImageError = () => {
    console.error(`Failed to load image for ${coachName}`);
    setImageError(true);
  };

  return (
    <div
      className="w-[356px] h-[480px] rounded-xl flex items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)",
        backdropFilter: " blur(2px)",
      }}
    >
      <div className="w-[343.97px] h-[465px] bg-white rounded-xl relative">
        <div className="absolute top-3 left-4 z-0 flex flex-col items-center gap-2">
          <Star fill="#42FACF" stroke="#42FACF" size={24} />
          <Star fill="#42FACF" stroke="#42FACF" size={24} />
          <Star stroke="#42FACF" size={24} />
        </div>
        
        <div className="w-[210px] h-[278px] ml-15 mt-9 rounded-[20px] overflow-clip bg-gray-100 flex items-center justify-center">
          {!imageError ? (
            <img
              src={coachImage}
              alt={`${coachName} photo`}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full text-gray-400">
              <ImageIcon size={48} />
              <p className="mt-2 text-sm">Photo non disponible</p>
            </div>
          )}
        </div>
        
        <div className="w-[281.89px] mx-auto mt-5">
          <div className="flex justify-between">
            <h2 className="font-Poppins font-semibold text-2xl tracking-wider">
              {coachName}
            </h2>
            <h2 className="font-Poppins text-2xl font-bold tracking-wider">
              {hourPrice} €/h
            </h2>
          </div>
          
          <h2 className="font-Poppins text-[14px] font-semibold tracking-wider text-[#7E7D7A] max-w-[192px]">
            {coachDescription}
          </h2>
          
          <div className="flex items-center gap-1.5 mt-2">
            <img src={greenLocationIcon} alt="location icon" width={24} />
            <h2 className="font-Poppins text-[14px] font-semibold tracking-wider text-[#7E7D7A]">
              {coachAddress}
            </h2>
          </div>
          
          <div className="absolute right-3 bottom-5 w-fit bg-primary py-3 px-3 rounded-full">
            {coachId ? (
              <Link
                to={`/coach/${coachId}`}
                className="font-Poppins font-medium text-lg tracking-wider"
              >
                Contacter
              </Link>
            ) : (
              <a
                href="#"
                className="font-Poppins font-medium text-lg tracking-wider"
              >
                Contacter
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachCard;
