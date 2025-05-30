import React, { useState } from "react";
import { ChevronDown, ImageIcon } from "lucide-react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
// Replace direct axios import with our configured API client
import api from "../../api/axios";

const facebook = "/icons/facebook.svg";
const instagram = "/icons/instagram.svg";
const twitter = "/icons/twitter.svg";
const miniLogo = "/icons/logo-icon.svg";
const resignationImage = "/placeholder.svg";

const Registration = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    username: "",
    genre: "",
    statut: ""
  });
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setProfilePreview(previewUrl);
    }
  };

  // Handle form submission - Updated to use API client
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Create form data object for file upload
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      
      if (profileImage) {
        submitData.append("profileImage", profileImage);
      }
      
      // Use the API client instead of direct axios
      const response = await api.post(
        "/users/register",  // Use relative URL with proxy
        submitData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      
      // Handle successful response
      console.log("Registration successful", response.data);
      
      // Save token if returned
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      
      // Redirect to home page or profile page
      navigate("/home2");
      
    } catch (err) {
      console.error("Registration error:", err);
      
      if (!err.response) {
        // Network error
        setError("Impossible de se connecter au serveur. Vérifiez votre connexion internet.");
      } else if (err.response.status === 400) {
        // Validation error
        setError(err.response.data.message || "Données invalides. Vérifiez vos informations.");
      } else if (err.response.status === 409) {
        // Conflict - user already exists
        setError("Cet email ou nom d'utilisateur existe déjà.");
      } else {
        // Other errors
        setError(err.response?.data?.message || "Une erreur s'est produite lors de l'inscription");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1528] flex flex-col">
      <Header isConnected={false} />
      
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="flex flex-col items-center w-full max-w-7xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <h1 className="text-white text-4xl font-bold">ATHELS</h1>
            <img src={miniLogo} alt="Mini Logo" className="h-10" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1115px]">
            {/* Left Card - User Profile */}
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-between w-full lg:w-1/3 shadow-lg">
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-4 border-sky-300">
                  <img 
                    src={profilePreview || resignationImage} 
                    alt="Profile" 
                    className={`${profilePreview ? 'w-full h-full object-cover rounded-full' : 'w-16 h-16'} text-sky-400`} 
                  />
                </div>
                <p className="text-center font-medium">
                  {formData.username || "Nom d'utilisateur"}
                </p>
                <button 
                  type="button"
                  onClick={() => navigate("/connexion")} 
                  className="bg-emerald-400 text-white py-2 px-6 rounded-full text-sm hover:bg-emerald-500 transition-colors font-bold cursor-pointer"
                >
                  Déconnexion
                </button>
              </div>

              <div className="flex flex-col items-center gap-6 w-full mt-8">
                <div className="flex gap-6">
                  <a href="#" className="text-blue-500">
                    <img src={facebook} alt="Facebook" className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-pink-500">
                    <img src={instagram} alt="Instagram" className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-blue-400">
                    <img src={twitter} alt="Twitter" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card - Registration Form */}
            <div className="bg-gray-100 rounded-lg p-6 w-full lg:w-2/3 shadow-lg">
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  placeholder="Nom"
                  className="w-full p-3 rounded-md border-0 focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                  required
                />
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  placeholder="Prénom"
                  className="w-full p-3 rounded-md border-0 focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Adresse e-mail"
                  className="w-full p-3 rounded-md border-0 focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                  required
                />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Nom d'utilisateur"
                  className="w-full p-3 rounded-md border-0 focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                  required
                />

                <div className="relative">
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md border-0 appearance-none focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                    required
                  >
                    <option value="" disabled hidden>Genre</option>
                    <option value="HOMME">HOMME</option>
                    <option value="FEMME">FEMME</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                </div>

                <div className="relative">
                  <select
                    name="statut"
                    value={formData.statut}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md border-0 appearance-none focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                    required
                  >
                    <option value="" disabled hidden>Statut</option>
                    <option value="Marié">Marié</option>
                    <option value="Célibataire">Célibataire</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                </div>

                <div className="mt-4 flex flex-col items-center">
                  <label htmlFor="profile-image" className="cursor-pointer">
                    <div className="w-24 h-24 border-2 border-sky-300 rounded-md bg-white flex flex-col items-center justify-center overflow-hidden">
                      {profilePreview ? (
                        <img src={profilePreview} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <ImageIcon className="w-10 h-10 text-sky-300" />
                      )}
                    </div>
                    <p className="text-sm text-sky-600 mt-2">Ajouter une photo</p>
                  </label>
                  <input 
                    id="profile-image" 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    className="hidden" 
                  />
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`bg-emerald-400 text-white py-2 px-10 rounded-full hover:bg-emerald-500 transition-colors font-bold cursor-pointer ${isLoading ? 'opacity-70' : ''}`}
                  >
                    {isLoading ? 'Chargement...' : 'Enregistrer'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;