"use client"

import { Lock, Mail, User } from "lucide-react"
import { useState, useEffect } from "react"
import Logo from "../../components/Logo"
import { useNavigate } from "react-router-dom"
import authAPI from "../../api/authAPI"

function Connexion() {
  const navigate = useNavigate();
  const [userState, setUserState] = useState("connexion")
  const [isSwapped, setIsSwapped] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  
  // Form data state - updated to match backend expectations
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // Handle the swap animation when userState changes
  useEffect(() => {
    if (userState === "inscription") {
      setIsSwapped(true)
    } else {
      setIsSwapped(false)
    }
    
    // Reset form data and errors when switching
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
    setError(null);
  }, [userState])
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      if (userState === "connexion") {
        // Login uses email and password
        const response = await authAPI.login({
          email: formData.email,
          password: formData.password
        });
        
        // Store token and user info
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        
        // Redirect to home page
        navigate("/home2");
      } else {
        // Register now using the correct fields the backend expects
        const response = await authAPI.register({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        });
        
        // Store token and user info if returned
        if (response.data && response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }
        
        // Redirect to home page
        navigate("/home2");
      }
    } catch (err) {
      console.error("Auth error:", err);
      setError(
        err.response?.data?.message || 
        (userState === "connexion" 
          ? "Échec de connexion. Vérifiez vos identifiants." 
          : "Échec d'inscription. Veuillez réessayer.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="connexion-bg-gradient">
      <div className="relative h-[127vh] overflow-hidden">
        {/* Form Container */}
        <div
          className="w-[60%] connexion-box absolute top-40 flex items-center justify-center py-10 transition-all duration-700 ease-in-out"
          style={{
            left: isSwapped ? "5%" : "35%",
            transitionProperty: "left, transform",
          }}
        >
          <div className={`flex flex-col items-center w-[60%] h-full transition-all duration-700 ${
            isSwapped ? "translate-x-[-10%]" : "translate-x-[10%]"
          }`}>
            <h2 className="font-Poppins font-bold text-[50px] leading-[75px] tracking-[2px] text-background uppercase">
              {userState}
            </h2>
            
            {/* Display error message if there is one */}
            {error && (
              <div className="w-full px-4 py-3 mt-4 text-red-700 bg-red-100 border border-red-400 rounded">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="mt-7 w-full">
              {userState === "inscription" && (
                <>
                  <div className="w-full flex items-center mt-7 pb-3 border-b-2 border-b-black">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Prénom"
                      required
                      className="h-full outline-none border-none flex-1 font-Poppins font-medium text-xl tracking-[1px] placeholder:text-black text-black"
                    />
                    <User className="text-black"></User>
                  </div>
                  <div className="w-full flex items-center mt-7 pb-3 border-b-2 border-b-black">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Nom"
                      required
                      className="h-full outline-none border-none flex-1 font-Poppins font-medium text-xl tracking-[1px] placeholder:text-black text-black"
                    />
                    <User className="text-black"></User>
                  </div>
                </>
              )}
              <div className="w-full flex items-center pb-3 border-b-2 border-b-black mt-7">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="h-full outline-none border-none flex-1 font-Poppins font-medium text-xl tracking-[1px] placeholder:text-black text-black"
                />
                <Mail className="text-black"></Mail>
              </div>
              <div className="w-full flex items-center pb-3 border-b-2 border-b-black mt-7">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  placeholder="Mot de passe"
                  className="h-full outline-none border-none flex-1 font-Poppins font-medium text-xl tracking-[1px] placeholder:text-black text-black"
                />
                <Lock className="text-black"></Lock>
              </div>
              
              <button 
                type="submit"
                disabled={isLoading}
                className={`cursor-pointer mt-20 bg-primary py-1.5 text-center font-Roboto font-bold text-[27px] tracking-wider w-full rounded-full ${isLoading ? 'opacity-70' : ''}`}
              >
                {isLoading 
                  ? 'Chargement...' 
                  : userState === "connexion" 
                    ? "Connexion" 
                    : "Inscription"}
              </button>
            </form>
            
            {userState === "connexion" ? (
              <div className="flex w-full items-center justify-between mt-10">
                <span
                  onClick={() => setUserState("inscription")}
                  className="cursor-pointer font-Roboto font-bold text-xl hover:text-primary transition-colors"
                >
                  Créer un compte
                </span>
                <span 
                  onClick={() => navigate("/forgot-password")} 
                  className="cursor-pointer font-Roboto font-bold text-xl hover:text-primary transition-colors"
                >
                  Mot de passe oublié
                </span>
              </div>
            ) : (
              <span
                onClick={() => setUserState("connexion")}
                className="cursor-pointer font-Roboto font-bold text-xl mx-auto mt-10 hover:text-primary transition-colors"
              >
                Vous avez déjà un compte ?
              </span>
            )}
          </div>
        </div>

        {/* Image Container */}
        <div
          className="absolute h-fit w-[35%] top-1/2 -translate-y-1/2 rounded-[55px] overflow-clip transition-all duration-700 ease-in-out"
          style={{
            left: isSwapped ? "60%" : "5%",
            boxShadow: "0px 40px 50px rgba(0, 0, 0, 0.25)",
            transitionProperty: "left, transform",
          }}
        >
          <div className="relative">
            <Logo className="absolute top-10 left-1/2 -translate-x-1/2"></Logo>
            <img src="images/connexion-image.png" alt="Login" className="w-full h-auto"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connexion