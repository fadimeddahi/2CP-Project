import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Role = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('customer');

  const roleData = {
    customer: {
      title: "Customer Experience",
      description: "Join thousands of satisfied customers who trust Auto Heaven for their car rental needs. Enjoy premium vehicles, competitive prices, and exceptional service with our easy-to-use platform.",
      features: ["Wide selection of premium cars", "24/7 customer support", "Flexible rental periods", "Instant booking confirmation"]
    },    partner: {
      title: "Car Seller/Owner", 
      description: "Become a car owner on Auto Heaven and start earning money by renting out your vehicles. Manage your car listings, track rental status, and maximize your income with our easy-to-use seller platform.",
      features: ["List unlimited cars", "Real-time rental tracking", "Automated payment processing", "Seller dashboard & analytics"]
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-end relative overflow-hidden">
      {/* Background image with overlay */}
      <img src="/src/assets/car-hero.png" alt="Car" className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none" />
      <div className="absolute inset-0 w-full h-full z-10" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, #36D2D5 100%)', mixBlendMode: 'multiply' }} />
        {/* Role Selection Card - Right Side */}      <div className="relative z-20 w-full max-w-6xl h-full flex flex-col justify-center items-end pr-8 md:pr-16">
        <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl shadow-2xl p-16 md:p-20 flex flex-col gap-12 w-full border-4 border-[#36D2D5] backdrop-blur-2xl" style={{ boxShadow: '0 16px 64px 0 rgba(54,210,213,0.3)' }}>          {/* Header */}
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6 tracking-tight drop-shadow-lg">Choose Your Role</h2>
            <div className="w-40 h-2 bg-[#36D2D5] mx-auto rounded-full"></div>
          </div>          {/* Dynamic Role Image */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 bg-white rounded-3xl flex items-center justify-center shadow-2xl border-4 border-[#0a3d62]">
              {selectedRole === 'customer' ? (
                <img src="/src/assets/istockphoto-1146425090-612x612-removebg-preview.png" alt="Customer" className="w-40 h-40 object-contain" />
              ) : (
                <img src="/src/assets/af78be849332d991e4b409d20ee1cb6f-removebg-preview.png" alt="Handshake" className="w-40 h-40 object-contain" />
              )}
            </div>
          </div>          {/* Dynamic Content */}
          <div className="text-center mb-10 transition-all duration-500 ease-in-out">
            <p className="text-2xl text-black font-semibold leading-relaxed mb-8 min-h-[140px] flex items-center justify-center px-4">
              {roleData[selectedRole].description}
            </p>
          </div>          {/* Role Selection Buttons */}
          <div className="flex flex-col gap-6 w-full">            <button
              className={`w-full px-12 py-8 rounded-2xl font-extrabold text-3xl transition-all duration-300 shadow-xl border-4 transform hover:scale-105 ${
                selectedRole === 'customer' 
                  ? 'bg-[#36D2D5] text-white border-[#36D2D5] shadow-2xl scale-105' 
                  : 'bg-transparent text-black border-[#36D2D5] hover:bg-[#36D2D5] hover:text-white'
              }`}
              onMouseEnter={() => setSelectedRole('customer')}
              onClick={() => {
                localStorage.setItem('userRole', 'customer');
                navigate('/');
              }}
            >
              🚗 Customer
            </button>
            <button
              className={`w-full px-12 py-8 rounded-2xl font-extrabold text-3xl transition-all duration-300 shadow-xl border-4 transform hover:scale-105 ${
                selectedRole === 'partner' 
                  ? 'bg-[#0a3d62] text-white border-[#0a3d62] shadow-2xl scale-105' 
                  : 'bg-transparent text-black border-[#0a3d62] hover:bg-[#0a3d62] hover:text-white'
              }`}
              onMouseEnter={() => setSelectedRole('partner')}
              onClick={() => {
                localStorage.setItem('userRole', 'partner');
                navigate('/profile');
              }}
            >
              🤝 Partner (Seller)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Role