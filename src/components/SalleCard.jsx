import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Clock, MapPin, Star } from "lucide-react";

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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInscription = () => {
    // Add your inscription logic here
    console.log(`Inscription à la salle: ${salleName}`);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // You can add API call here to handle gym subscription
    // Example: gymAPI.subscribeToGym(salleId)
  };

  return (
    <div className="w-full max-w-[380px] min-h-[520px] rounded-2xl bg-slate-50 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden mx-auto">
      {/* Image Section */}
      <div className="relative h-[220px] overflow-hidden rounded-t-2xl">
        <img
          src={salleImage}
          alt={`${salleName} photo`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
            <Star size={14} fill="gold" stroke="gold" />
            <span>4.5</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col min-h-[300px]">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1">
            {salleName}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2 mb-3">
            {description}
          </p>
        </div>

        {/* Services */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {Array.isArray(salleServices) && salleServices.slice(0, 3).map((service, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 rounded-full text-xs px-3 py-1 font-medium"
              >
                {service}
              </span>
            ))}
            {salleServices && salleServices.length > 3 && (
              <span className="text-xs text-slate-500 px-2">
                +{salleServices.length - 3} autres
              </span>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-2 mb-4 flex-grow">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Clock size={16} className="text-blue-600" />
            <span>{salleHours}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin size={16} className="text-blue-600" />
            <span className="line-clamp-1">{salleAddress}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={handleInscription}
            disabled={!salleId}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm relative"
          >
            {showSuccess ? "✓ Inscrit!" : "S'inscrire"}
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mt-2 bg-green-100 text-green-800 text-center py-1 px-2 rounded text-sm border border-green-200">
            Inscription réussie! Vous recevrez un email de confirmation.
          </div>
        )}
      </div>
    </div>
  );
}

export default SalleCard;
