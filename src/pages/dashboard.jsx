import React from 'react';

const Dashboard = () => {  return (
    <div className="w-screen h-screen flex items-center justify-center" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, #36D2D5 100%)' }}>
      <div className="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-12 flex flex-col gap-10 w-full max-w-2xl border-8 border-[#0a3d62] backdrop-blur-2xl items-center">
        <h2 className="text-4xl font-extrabold text-black mb-2 tracking-tight drop-shadow-lg text-center">Partner Dashboard</h2>
        <p className="text-xl text-black font-semibold text-center">Welcome, Partner! Here you can manage your cars, view bookings, and access exclusive partner tools.</p>
      </div>
    </div>
  );
};

export default Dashboard;
