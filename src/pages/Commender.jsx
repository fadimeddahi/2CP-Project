import React from 'react'
import ButtonPrimary from '../components/buttonPrimary'
import Footer from '../components/Footer'
import OrderSummaryPage from '../components/SubtotalDisplay'
import Header2 from '../components/Header2'
import SubtotalDisplay from '../components/SubtotalDisplay'

function Commender  ()  {
  return (
    
<div>
      <Header2  isConnected={true}/>
  <div  
        style={{
          height: '123px',
          width: '100%',
          padding: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <p className="text-6xl font-bold bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition duration-300">

          PAIEMENT
        </p>
      
      </div>
      <div>
       <button className="mt-6 bg-emerald-400 text-teal-900 font-bold py-2 px-4 rounded-md text-sm">    Retourner au panier
        </button>
      </div>


        <div style={ {
             display : 'flex' , 
             justifyContent : 'center' , 
             padding :  '20px'
            
        }}>
             
             <div className=" p-6 rounded-lg flex flex-col md:flex-row gap-6 max-w-5xl" style={{
            backgroundColor: 'rgba(66, 250, 207, 0.17)' , 
             
             }}>
      
      <div className="flex-1 space-y-4" style={{ marginTop: '40px', gap: '10px' }}>
        <input
          type="text"
          placeholder="Nom"
          className="w-full text-white placeholder-white/70 p-3 rounded-md mb-4" // Added mb-4 for spacing
          style={{
            backgroundColor: 'rgba(66, 192, 250, 0.4)',
            borderRadius: '30px',
          }}
        />

        <input
          type="text"
          placeholder="Prénom"
          className="w-full bg-teal-700/60 text-white placeholder-white/70 p-3 rounded-md mb-4" // Added mb-4 for spacing
          style={{
            backgroundColor: 'rgba(66, 192, 250, 0.4)',
            borderRadius: '30px',
          }}
        />

        <input
          type="email"
          placeholder="Adresse e-mail"
          className="w-full bg-teal-700/60 text-white placeholder-white/70 p-3 rounded-md mb-4" // Added mb-4 for spacing
          style={{
            backgroundColor: 'rgba(66, 192, 250, 0.4)',
            borderRadius: '30px',
          }}
        />

        <input
          type="text"
          placeholder="Adresse complète"
          className="w-full bg-teal-700/60 text-white placeholder-white/70 p-3 rounded-md" // No mb-4 for the last input
          style={{
            backgroundColor: 'rgba(66, 192, 250, 0.4)',
            borderRadius: '30px',
          }}
        />
      </div>

    
      <div className=""style={{
        display:'grid',}}
         >
    <SubtotalDisplay amount={0}message="Suos-total:"></SubtotalDisplay>
 <SubtotalDisplay amount={0} message="Fais de les livraison:"></SubtotalDisplay>
 
   <SubtotalDisplay amount={0} message="reduction:"></SubtotalDisplay>
    <SubtotalDisplay amount={0} message="Total a payer">  </SubtotalDisplay>



      </div>
   </div>
  
</div>

 <div style={ {
    display : 'flex' , 
    justifyContent : 'center' , 
   
 }}>
     <button className="mt-6 bg-emerald-400 text-teal-900 font-bold py-2 px-4 rounded-md text-sm">
       Confirmer la commande
        </button>
   </div>
    <Footer></Footer>


</div>
  )
}

export default Commender