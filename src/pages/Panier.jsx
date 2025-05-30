import React from 'react';
import Header2 from '../components/Header2';
import { Link } from 'react-router-dom';
import { Trash2, X, Plus, Minus } from 'lucide-react';
import useCartStore from '../store/cartStore';

function Panier() {
  const { items = [], removeItem, clearCart, updateQuantity, getTotalPrice } = useCartStore();
  const handleQuantityChange = (productId, change) => {
    const item = items.find((i) => i.id === productId);
    if (item) {
      const newQuantity = Math.max(0, item.quantity + change);
      if (newQuantity === 0) {
        removeItem(productId);
      } else {
        updateQuantity(productId, newQuantity);
      }
    }
  };

  const totalPrice = getTotalPrice() || 0;
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <Header2 isConnected={true} />
      <div className="max-w-[1300px] mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center">PANIER D'ACHATS</h1>          
        <div className="flex justify-between items-center mb-8">          
          <Link to="/" className="bg-[#42FACF] text-black hover:bg-[#3DE0B8] flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors text-sm">
            <span>←</span> Continuer les achats
          </Link>          <button 
            onClick={clearCart} 
            className="bg-[#42FACF] text-black hover:bg-[#3DE0B8] px-3 py-1.5 rounded-full transition-colors text-sm flex items-center gap-2"
          >
            <Trash2 size={16} /> Vider le panier
          </button>
        </div>
        
        <div className="relative p-8 mb-8 rounded-2xl overflow-hidden">          {/* Background with reduced opacity */}
          <div className="absolute inset-0 bg-[#42FACF] opacity-5"></div>
            {/* Products grid with relative positioning to appear above the background */}          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {!items || items.length === 0 ? (
            <div className="col-span-full text-center py-8">
                <p className="text-xl text-white">Votre panier est vide</p>
                <Link to="/produits1" className="mt-4 inline-block bg-[#42FACF] text-black hover:bg-[#3DE0B8] px-6 py-2 rounded-full transition-colors">
                  Commencer les achats
                </Link>
              </div>
            ) : (
              items.map((item) => (
              <div 
                key={item.id}
                className="rounded-xl flex items-center justify-center p-1"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <div className="bg-white rounded-xl p-4 relative w-full">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-contain rounded-lg mb-4" />
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-[#42FACF] text-black px-2 py-1 rounded-full text-sm font-medium">
                      <span className="text-yellow-400">★</span>
                      <span>{item.rating}</span>
                    </div>                    <button 
                      onClick={() => removeItem(item.id)}
                      className="absolute top-2 left-2 w-7 h-7 rounded-full bg-[#42FACF] text-black flex items-center justify-center hover:bg-[#3DE0B8]"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-7 h-7 rounded-full bg-[#42FACF] text-black flex items-center justify-center hover:bg-[#3DE0B8]"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-black font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-7 h-7 rounded-full bg-[#42FACF] text-black flex items-center justify-center hover:bg-[#3DE0B8]"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="text-xl font-bold text-black">{(item.price * item.quantity).toFixed(2)} $</span>
                  </div>
                </div>
              </div>            )))}
          </div>
        </div>

        {items && items.length > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Total Box */}
            <div className="bg-[#42FACF] px-6 py-3 rounded-lg">
              <div className="flex items-center gap-4">
                <h3 className="font-bold text-black">Total à payer :</h3>
                <span className="font-bold text-black">{totalPrice.toFixed(2)} $</span>
              </div>
            </div>
            {/* Order Button */}
            <button 
              className="bg-[#42FACF] text-black hover:bg-[#3DE0B8] px-6 py-1.5 rounded-full transition-colors text-sm"
            ><a href="/commender">
              Commander</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Panier;
