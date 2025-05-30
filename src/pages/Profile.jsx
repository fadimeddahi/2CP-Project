import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
  const navigate = useNavigate();  const [activeTab, setActiveTab] = useState('home');
  const [profileName, setProfileName] = useState('');
  const [userRole, setUserRole] = useState('customer'); // Default to customer

  // Sample user's cars data - in a real app this would come from an API
  const [userCars, setUserCars] = useState([
    {
      id: 1,
      name: 'Toyota Camry',
      price: 120,
      brand: 'Toyota',
      year: 2023,
      image: '/src/assets/car-hero.png',
      status: 'Available',
      totalEarnings: 2400,
      bookings: 20,
      currentRenter: null,
      rentalEndDate: null
    },
    {
      id: 2,
      name: 'Honda Civic',
      price: 100,
      brand: 'Honda',
      year: 2022,
      image: '/src/assets/car-hero.png',
      status: 'Rented',
      totalEarnings: 1800,
      bookings: 18,
      currentRenter: 'John Smith',
      rentalEndDate: '2024-12-15'
    },
    {
      id: 3,
      name: 'BMW X5',
      price: 250,
      brand: 'BMW',
      year: 2024,
      image: '/src/assets/car-hero.png',
      status: 'Available',
      totalEarnings: 3200,
      bookings: 12,
      currentRenter: null,
      rentalEndDate: null
    }
  ]);
  // Check if user is logged in
  useEffect(() => {
    const storedProfileName = localStorage.getItem('profileName');
    const storedUserRole = localStorage.getItem('userRole') || 'customer';
    if (!storedProfileName) {
      navigate('/login');
      return;
    }
    setProfileName(storedProfileName);
    setUserRole(storedUserRole);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('profileName');
    navigate('/');
  };
  const renderHome = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-black mb-6">Welcome back, {profileName}!</h2>
        
        {userRole === 'partner' ? (
          // Partner/Seller Dashboard
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-[#36D2D5] to-[#0a3d62] rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Total Cars</h3>
              <p className="text-3xl font-bold">{userCars.length}</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Total Earnings</h3>
              <p className="text-3xl font-bold">${userCars.reduce((sum, car) => sum + car.totalEarnings, 0)}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Total Bookings</h3>
              <p className="text-3xl font-bold">{userCars.reduce((sum, car) => sum + car.bookings, 0)}</p>
            </div>
          </div>
        ) : (
          // Customer Dashboard
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-[#36D2D5] to-[#0a3d62] rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Active Rentals</h3>
              <p className="text-3xl font-bold">2</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Total Spent</h3>
              <p className="text-3xl font-bold">$1,450</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Completed Trips</h3>
              <p className="text-3xl font-bold">8</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-black mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {userRole === 'partner' ? (
            // Partner Activity
            <>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold text-black">Toyota Camry was booked</p>
                  <p className="text-gray-600">2 hours ago</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  +$120
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold text-black">Honda Civic rental completed</p>
                  <p className="text-gray-600">1 day ago</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Completed
                </span>
              </div>
            </>
          ) : (
            // Customer Activity
            <>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold text-black">BMW X5 rental started</p>
                  <p className="text-gray-600">1 hour ago</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold text-black">Tesla Model 3 returned</p>
                  <p className="text-gray-600">3 days ago</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Completed
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const renderMyCars = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-black">My Cars</h2>
        <button
          onClick={() => setActiveTab('add-car')}
          className="bg-gradient-to-r from-[#36D2D5] to-[#0a3d62] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#2ab8bb] hover:to-[#083349] transition-all duration-300"
        >
          + Add New Car
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {userCars.map(car => (
          <div key={car.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">            <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-gradient-to-r from-[#36D2D5] to-[#0a3d62] text-white px-3 py-1 rounded-full text-sm font-bold">
                ${car.price}/day 
              </div>
              {car.status === 'Rented' && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  🚗 Currently Rented
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-black">{car.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  car.status === 'Available' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {car.status}
                </span>
              </div>
                <div className="space-y-2 mb-4">
                <p className="text-gray-600">
                  <span className="font-semibold">Brand:</span> {car.brand}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Year:</span> {car.year}
                </p>
                <p className="text-2xl font-bold text-[#0a3d62]">
                  ${car.price}/day
                </p>
              </div>

              {/* Rental Status Section for Sellers */}
              {userRole === 'partner' && car.status === 'Rented' && (
                <div className="bg-red-50 rounded-xl p-4 mb-4 border-l-4 border-red-500">
                  <p className="text-sm font-semibold text-red-800 mb-2">🔴 Rental Details:</p>
                  <p className="text-sm text-red-700">
                    <span className="font-semibold">Renter:</span> {car.currentRenter}
                  </p>
                  <p className="text-sm text-red-700">
                    <span className="font-semibold">Return Date:</span> {car.rentalEndDate}
                  </p>
                </div>
              )}

              {userRole === 'partner' && car.status === 'Available' && (
                <div className="bg-green-50 rounded-xl p-4 mb-4 border-l-4 border-green-500">
                  <p className="text-sm font-semibold text-green-800">🟢 Ready for Rental</p>
                  <p className="text-sm text-green-700">Your car is available for booking</p>
                </div>
              )}

              <div className="border-t pt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Total Earnings:</span>
                  <span className="font-bold text-green-600">${car.totalEarnings}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Total Bookings:</span>
                  <span className="font-bold text-blue-600">{car.bookings}</span>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="flex-1 bg-[#36D2D5] text-white py-2 rounded-lg font-semibold hover:bg-[#2ab8bb] transition-colors">
                  Edit
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAddCar = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-black mb-6">Add New Car</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Car Name</label>
            <input
              type="text"
              placeholder="e.g., Toyota Camry"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#36D2D5] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Brand</label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#36D2D5] focus:border-transparent">
              <option value="">Select Brand</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Audi">Audi</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Year</label>
            <input
              type="number"
              placeholder="2023"
              min="2000"
              max="2024"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#36D2D5] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Price per Day ($)</label>
            <input
              type="number"
              placeholder="120"
              min="1"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#36D2D5] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Transmission</label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#36D2D5] focus:border-transparent">
              <option value="">Select Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Car Type</label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#36D2D5] focus:border-transparent">
              <option value="">Select Type</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Coupe">Coupe</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Fuel Type</label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#36D2D5] focus:border-transparent">
              <option value="">Select Fuel Type</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Seats</label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#36D2D5] focus:border-transparent">
              <option value="">Select Seats</option>
              <option value="2">2 Seats</option>
              <option value="4">4 Seats</option>
              <option value="5">5 Seats</option>
              <option value="7">7 Seats</option>
              <option value="8">8+ Seats</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Location</label>
          <input
            type="text"
            placeholder="e.g., Downtown, City Center"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#36D2D5] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Description</label>
          <textarea
            placeholder="Describe your car's features, condition, and any special notes..."
            rows="4"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#36D2D5] focus:border-transparent resize-none"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Car Images</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#36D2D5] transition-colors">
            <div className="text-gray-500">
              <p className="text-lg font-semibold">Click to upload images</p>
              <p className="text-sm">or drag and drop</p>
              <p className="text-xs mt-2">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-[#36D2D5] to-[#0a3d62] text-white font-bold text-xl py-4 rounded-xl hover:from-[#2ab8bb] hover:to-[#083349] transition-all duration-300"
          >
            Add Car
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('my-cars')}
            className="flex-1 bg-gray-200 text-gray-700 font-bold text-xl py-4 rounded-xl hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  const renderMyRentals = () => {
    // Sample customer rental data - in a real app this would come from an API
    const customerRentals = [
      {
        id: 1,
        carName: 'BMW X5',
        brand: 'BMW',
        image: '/src/assets/car-hero.png',
        status: 'Active',
        startDate: '2024-12-10',
        endDate: '2024-12-15',
        totalCost: 1250,
        dailyRate: 250,
        location: 'Airport District',
        seller: 'Premium Car Rentals'
      },
      {
        id: 2,
        carName: 'Toyota Camry',
        brand: 'Toyota',
        image: '/src/assets/car-hero.png',
        status: 'Active',
        startDate: '2024-12-08',
        endDate: '2024-12-12',
        totalCost: 480,
        dailyRate: 120,
        location: 'Downtown',
        seller: 'Auto Heaven Dealer'
      },
      {
        id: 3,
        carName: 'Tesla Model 3',
        brand: 'Tesla',
        image: '/src/assets/car-hero.png',
        status: 'Completed',
        startDate: '2024-11-25',
        endDate: '2024-11-28',
        totalCost: 600,
        dailyRate: 200,
        location: 'City Center',
        seller: 'Electric Dreams'
      },
      {
        id: 4,
        carName: 'Honda Civic',
        brand: 'Honda',
        image: '/src/assets/car-hero.png',
        status: 'Completed',
        startDate: '2024-11-15',
        endDate: '2024-11-18',
        totalCost: 300,
        dailyRate: 100,
        location: 'Central Station',
        seller: 'City Car Rentals'
      }
    ];

    const activeRentals = customerRentals.filter(rental => rental.status === 'Active');
    const completedRentals = customerRentals.filter(rental => rental.status === 'Completed');

    return (
      <div className="space-y-8">
        {/* Active Rentals */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-black mb-6">🚗 Active Rentals ({activeRentals.length})</h2>
          {activeRentals.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeRentals.map(rental => (
                <div key={rental.id} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg overflow-hidden border-2 border-blue-200">
                  <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                    <img 
                      src={rental.image} 
                      alt={rental.carName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      🔵 Active
                    </div>
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-[#36D2D5] to-[#0a3d62] text-white px-3 py-1 rounded-full text-sm font-bold">
                      ${rental.dailyRate}/day
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3">{rental.carName}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-700"><span className="font-semibold">📍 Location:</span> {rental.location}</p>
                      <p className="text-gray-700"><span className="font-semibold">🏢 Provider:</span> {rental.seller}</p>
                      <p className="text-gray-700"><span className="font-semibold">📅 Period:</span> {rental.startDate} to {rental.endDate}</p>
                      <p className="text-2xl font-bold text-blue-600">💰 Total: ${rental.totalCost}</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                        📞 Contact Seller
                      </button>
                      <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                        📋 View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🚗</div>
              <p className="text-xl text-gray-600 mb-4">No active rentals at the moment</p>
              <p className="text-gray-500">Browse our cars to start your next adventure!</p>
            </div>
          )}
        </div>

        {/* Rental History */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-black mb-6">📜 Rental History</h2>
          {completedRentals.length > 0 ? (
            <div className="space-y-4">
              {completedRentals.map(rental => (
                <div key={rental.id} className="bg-gray-50 rounded-xl p-6 border-l-4 border-green-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img 
                        src={rental.image} 
                        alt={rental.carName}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-black">{rental.carName}</h4>
                        <p className="text-gray-600">{rental.startDate} to {rental.endDate}</p>
                        <p className="text-sm text-gray-500">📍 {rental.location} • 🏢 {rental.seller}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        ✅ Completed
                      </span>
                      <p className="text-lg font-bold text-green-600 mt-2">💰 ${rental.totalCost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📜</div>
              <p className="text-xl text-gray-600">No rental history yet</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return renderHome();
      case 'my-cars':
        return renderMyCars();
      case 'add-car':
        return renderAddCar();
      case 'my-rentals':
        return renderMyRentals();
      default:
        return renderHome();
    }
  };
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, #36D2D5 100%)' }}>
      <Navbar />
      
      <div className="flex min-h-screen pt-20">        {/* Left Sidebar */}
        <div className="w-80 shadow-xl fixed left-0 top-20 bottom-0 z-40" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, #00E1E5 100%)' }}>
          <div className="p-8">
            {/* Profile Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#36D2D5] to-[#0a3d62] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                {profileName.charAt(0).toUpperCase()}
              </div>              <h2 className="text-2xl font-bold text-white">{profileName}</h2>
              <p className="text-gray-200">{userRole === 'partner' ? 'Car Seller/Owner' : 'Customer'}</p>
            </div>            {/* Navigation Menu */}
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('home')}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left font-semibold transition-all duration-300 ${
                  activeTab === 'home'
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl">🏠</span>
                <span className="text-lg">Home</span>
              </button>
              
              {userRole === 'customer' && (
                <button
                  onClick={() => setActiveTab('my-rentals')}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left font-semibold transition-all duration-300 ${
                    activeTab === 'my-rentals'
                      ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-2xl">🚙</span>
                  <span className="text-lg">My Rentals</span>
                </button>
              )}
              
              {userRole === 'partner' && (
                <>
                  <button
                    onClick={() => setActiveTab('my-cars')}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left font-semibold transition-all duration-300 ${
                      activeTab === 'my-cars'
                        ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="text-2xl">🚗</span>
                    <span className="text-lg">My Cars</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('add-car')}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left font-semibold transition-all duration-300 ${
                      activeTab === 'add-car'
                        ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="text-2xl">➕</span>
                    <span className="text-lg">Add Car</span>
                  </button>
                </>
              )}
            </nav>            {/* Logout Button */}
            <div className="absolute bottom-8 left-8 right-8">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left font-semibold text-white hover:bg-red-500/20 hover:text-red-200 transition-all duration-300"
              >
                <span className="text-2xl">🚪</span>
                <span className="text-lg">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-80 p-8">
          {renderContent()}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
