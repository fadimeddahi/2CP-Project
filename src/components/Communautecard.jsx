import React from 'react';
import { CgProfile } from "react-icons/cg";
import Button from './Button';
import CartIcon from './CartIcon';
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa6";
// import "../App.css";

function Communautecard({  Communautename,   Communautedescription,  className }) {
  return (
    <div className={`p-5 border-gray-400 border-6 rounded-2xl flex justify-center gap-3 items-center flex-col bg-white ${className ? className : "bg-white"}`}
    style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)",
        backdropFilter: " blur(2px)",
        height: "400px",
        width: "400px",
      }}>
      <div className='flex justify-center items-center'>
        <CgProfile className='text-[#42FACF] text-5xl' />
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl bold'>{ Communautename}</h1>
      </div>
      <div className='flex justify-center items-center w-2/3 text-center pl-5 pr-5 pt-3 pb-3 rounded-2xl bg-[#42c0fa94]'>
        <p>{ Communautedescription}</p>
      </div>
      <div className='flex justify-evenly items-center flex-row gap-3 w-full'>
        <div className='flex justify-between items-center flex-row gap-4'>
          <CartIcon text="0" icon={<BsFillSuitHeartFill className='text-[#42FACF]' />} />
          <CartIcon text="0" icon={<FaComment className='text-[#42FACF]' />} />
        </div>
        <div>
          <Button text="Répondre" className="bg-[#42FACF] pt-1 pb-1 pl-2 pr-2 rounded-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Communautecard;