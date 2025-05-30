import React from 'react'
import LogoImage from '/icons/logo-icon.svg'

function Logo({className}) {
    return (
        <div className={`flex items-end -space-x-3 ${className}`}>
            <h2 className=' text-white font-Montserrat font-bold tracking-[5px] text-6xl'>ATHEL</h2>
            <img src={LogoImage} alt='logo image' width={83} height={65}></img>
        </div>
    )
}

export default Logo
