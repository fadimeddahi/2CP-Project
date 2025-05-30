import React from 'react'
import ButtonPrimary from './buttonPrimary';


function PostCart2() {
  return (
    <div className='flex justify-center items-center flex-row  border-5 w-2/3 h-2/3 border-gray-400 rounded-3xl  bg-white' 
    style={{
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)",}}>
        <div className='flex justify-center gap-5  items-center flex-col w-1/2  h-full'>
            <p className='bold text-2xl'>Nom de L'utilisateur </p>
            <div className="bg-primary py-2 px-4 mt-15 mx-auto w-fit rounded-full">
            <a
              href="#"
              className="font-Poppins font-medium text-lg tracking-wider"
            >
             Répondre
            </a>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col w-1/2  h-full'>
           <div className='flex justify-evenly items-center flex-col w-4/5 h-4/5 p-3  gap-5 text-center rounded-2xl bg-[#42c0fa85]'>
                <p className=' text-xl'>Partagez votre expérience ou posez une question </p>
                <div className="bg-primary py-2 px-4 mt-15 mx-auto w-fit rounded-full">
            <a
              href="#"
              className="font-Poppins font-medium text-lg tracking-wider"
            >
            AJOUTER UNE PHOTO
            </a>
          </div>
            </div>
        </div>
    </div>
  )
}

export default PostCart2