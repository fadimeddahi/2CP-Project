import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import greenLocationIcon from "/icons/location-green.svg";

function SalleCard({
  salleId,
  salleImage,
  salleName,
  hourPrice,
  salleServices,
  salleHours,
  salleAddress,
  description
}) {
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
        <div className="w-[284px] h-[189px] ml-7 mt-4 rounded-[15px] overflow-clip">
          <img
            src={salleImage}
            alt={`${salleName} photo`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[281.89px] mx-auto mt-5">
          <div className="flex justify-between">
            <h2 className="font-Poppins font-semibold text-2xl tracking-wider">
              {salleName}
            </h2>
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            {Array.isArray(salleServices) && salleServices.map((service, index) => (
              <span
                key={index}
                className="bg-primary/30 text-[#0A70B1] rounded-full text-xs px-2 py-1"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <Clock className="text-primary" size={20} />
            <h2 className="font-Poppins text-[14px] font-semibold tracking-wider text-[#7E7D7A]">
              {salleHours}
            </h2>
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <img src={greenLocationIcon} alt="location icon" width={20} />
            <h2 className="font-Poppins text-[14px] font-semibold tracking-wider text-[#7E7D7A]">
              {salleAddress}
            </h2>
          </div>
          <div className="absolute right-3 bottom-5 w-fit bg-primary py-3 px-3 rounded-full">
            {salleId ? (
              <Link
                to={`/gym/${salleId}`}
                className="font-Poppins font-medium text-lg tracking-wider"
              >
                Voir détails
              </Link>
            ) : (
              <span className="font-Poppins font-medium text-lg tracking-wider cursor-not-allowed opacity-70">
                Voir détails
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalleCard;
