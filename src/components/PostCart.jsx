import React from 'react';
import Button from './buttonPrimary';
import ButtonPrimary from './buttonPrimary';

function PostCart({ userName, onViewMore, onAddPhoto }) {
  return (
    <div className='flex justify-center items-center flex-row border-5 w-2/3 h-2/3 border-gray-400 rounded-3xl bg-white'>
      <div className='flex justify-center gap-5 items-center flex-col w-1/2 h-full'>
        <p className='bold text-2xl'>{userName}</p>
        <Button
          text="Voir Plus"
          className="pt-2 pb-2 pl-5 pr-5 bg-[#42FACF] rounded-2xl cursor-pointer"
          onClick={onViewMore}
        />
      </div>
      <div className='flex justify-center items-center flex-col w-1/2 h-full'>
        <div className='flex justify-evenly items-center flex-col w-4/5 h-4/5 p-3 gap-5 text-center rounded-2xl bg-[#42c0fa85]'>
          <p className='text-xl'>Partagez votre expérience ou posez une question</p>
          <Button
            text="Ajouter une photo"
            className="pt-2 pb-2 pl-5 pr-5 bg-[#3785AA] rounded-2xl cursor-pointer"
            onClick={onAddPhoto}
          />
        </div>
      </div>
    </div>
  );
}

export default PostCart;