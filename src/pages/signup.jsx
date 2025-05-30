import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
    // Handle signup and store profile name
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullname.value.trim();
    if (name) {
      localStorage.setItem('profileName', name);
      // Set default role as customer (will be updated in role selection)
      localStorage.setItem('userRole', 'customer');
      // Notify Navbar to update
      window.dispatchEvent(new Event('profileCreated'));
      // Redirect to role selection page
      navigate('/role');
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-end relative overflow-hidden">
      {/* Background image with overlay */}
      <img src="/src/assets/car-hero.png" alt="Car" className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none" />
      <div className="absolute inset-0 w-full h-full z-10" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, #36D2D5 100%)', mixBlendMode: 'multiply' }} />
      {/* Signup Form */}
      <div className="relative z-20 w-full max-w-4xl h-full flex flex-col justify-center items-end pr-0 md:pr-32">
        <form onSubmit={handleSignup} className="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-4 md:p-8 flex flex-col gap-6 w-full max-w-3xl border-8 border-[#36D2D5] backdrop-blur-2xl my-8 md:my-12 overflow-visible box-border" style={{ boxShadow: '0 16px 64px 0 rgba(54,210,213,0.18)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
            <div className="flex flex-col items-start gap-1 w-full md:w-2/3">
              <h2 className="text-4xl font-extrabold text-black mb-1 tracking-tight drop-shadow-lg">Create Account</h2>
              <p className="text-xl text-black font-semibold">Sign up to access <span className="text-[#36D2D5] font-bold">exclusive car deals</span>, manage your rentals, and enjoy premium support.</p>
            </div>
            <div className="flex flex-col items-center gap-1 w-full md:w-1/3">
              <span className="text-2xl font-extrabold text-black">🚗</span>
              <span className="text-base text-black font-semibold">Auto Heaven Member</span>
            </div>
          </div>
          {/* Media signup logos row */}
          <div className="flex flex-row items-center justify-center gap-4 mb-2">
            <button type="button" className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#36D2D5] text-black font-bold text-xl bg-white hover:bg-[#36D2D5] hover:text-white transition shadow-md">
              {/* Google SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M21.805 10.023h-9.765v3.954h5.617c-.242 1.242-1.453 3.648-5.617 3.648-3.383 0-6.148-2.797-6.148-6.25s2.765-6.25 6.148-6.25c1.922 0 3.211.82 3.953 1.523l2.703-2.633c-1.664-1.547-3.828-2.5-6.656-2.5-5.523 0-10 4.477-10 10s4.477 10 10 10c5.773 0 9.594-4.055 9.594-9.773 0-.656-.07-1.156-.156-1.369z" fill="#212121"/><path d="M12.04 22c2.7 0 4.963-.89 6.617-2.42l-3.148-2.57c-.867.617-2.047 1.047-3.469 1.047-2.664 0-4.922-1.797-5.734-4.211h-3.203v2.633c1.664 3.281 5.203 5.521 9.937 5.521z" fill="#34A853"/><path d="M6.306 13.846c-.203-.617-.32-1.273-.32-1.946s.117-1.328.32-1.946v-2.633h-3.203c-.648 1.273-1.023 2.695-1.023 4.579s.375 3.305 1.023 4.578l3.203-2.632z" fill="#FBBC05"/><path d="M12.04 7.953c1.477 0 2.484.641 3.055 1.18l2.234-2.18c-1.008-.938-2.367-1.523-5.289-1.523-3.383 0-6.148 2.797-6.148 6.25 0 .703.117 1.328.32 1.946l3.203-2.633c.812-2.414 3.07-4.21 5.625-4.21z" fill="#EA4335"/></g></svg>
              Google
            </button>
            <button type="button" className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#36D2D5] text-black font-bold text-xl bg-white hover:bg-[#36D2D5] hover:text-white transition shadow-md">
              {/* Facebook SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24h-1.918c-1.504 0-1.797.715-1.797 1.763v2.314h3.594l-.468 3.622h-3.126v9.294h6.126c.73 0 1.322-.592 1.322-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" fill="#1877F2"/><path d="M16.671 24v-9.294h3.126l.468-3.622h-3.594v-2.314c0-1.048.293-1.763 1.797-1.763h1.918v-3.24c-.334-.044-1.472-.143-2.797-.143-2.766 0-4.659 1.688-4.659 4.788v2.672h-3.125v3.622h3.125v9.294h3.541z" fill="#fff"/></g></svg>
              Facebook
            </button>
            <button type="button" className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#36D2D5] text-black font-bold text-xl bg-white hover:bg-[#36D2D5] hover:text-white transition shadow-md">
              {/* YouTube SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="12" r="10" fill="#000"/><path d="M19.633 7.997c-.228-.84-.898-1.5-1.74-1.73C16.18 6 12 6 12 6s-4.18 0-5.893.267c-.842.23-1.512.89-1.74 1.73C4 9.72 4 12 4 12s0 2.28.367 4.003c.228.84.898 1.5 1.74 1.73C7.82 18 12 18 12 18s4.18 0 5.893-.267c.842-.23 1.512-.89 1.74-1.73C20 14.28 20 12 20 12s0-2.28-.367-4.003zM10.545 14.568V9.432L15.818 12l-5.273 2.568z" fill="#fff"/></g></svg>
              YouTube
            </button>
          </div>
          {/* Signup fields */}
          <div className="flex flex-col gap-8">
            <div className="flex-1 flex flex-col gap-4">
              <label className="block text-xl font-bold text-black mb-1">Full Name</label>
              <input name="fullname" type="text" className="w-full px-8 py-6 rounded-2xl border-2 border-[#36D2D5] focus:outline-none focus:ring-2 focus:ring-[#36D2D5] text-xl text-black bg-[#f8fafd] font-semibold transition" placeholder="Your Name" required />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <label className="block text-xl font-bold text-black mb-1">Email</label>
              <input type="email" className="w-full px-8 py-6 rounded-2xl border-2 border-[#36D2D5] focus:outline-none focus:ring-2 focus:ring-[#36D2D5] text-xl text-black bg-[#f8fafd] font-semibold transition" placeholder="you@email.com" required />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <label className="block text-xl font-bold text-black mb-1">Password</label>
              <input type="password" className="w-full px-8 py-6 rounded-2xl border-2 border-[#36D2D5] focus:outline-none focus:ring-2 focus:ring-[#36D2D5] text-xl text-black bg-[#f8fafd] font-semibold transition" placeholder="Create a password" required />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <label className="block text-xl font-bold text-black mb-1">Confirm Password</label>
              <input type="password" className="w-full px-8 py-6 rounded-2xl border-2 border-[#36D2D5] focus:outline-none focus:ring-2 focus:ring-[#36D2D5] text-xl text-black bg-[#f8fafd] font-semibold transition" placeholder="Confirm your password" required />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full mt-2 gap-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" id="terms" className="accent-[#36D2D5] w-6 h-6 rounded" required />
              <label htmlFor="terms" className="text-lg text-black font-semibold">I agree to the <a href="#" className="text-[#36D2D5] hover:underline font-bold">Terms & Conditions</a></label>
            </div>
          </div>
          <button type="submit" className="mt-8 px-16 py-6 rounded-full font-extrabold text-white text-3xl bg-[#36D2D5] hover:bg-[#0a3d62] transition duration-300 shadow-2xl tracking-wide uppercase drop-shadow-lg">Sign Up</button>
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-black text-lg font-semibold">Already have an account?</span>
              <a href="/login" className="text-[#0a3d62] font-bold hover:underline text-xl transition">Sign in</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
