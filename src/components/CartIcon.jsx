import React from 'react'


function CartIcon(props) {
  return (
    <div className='flex justify-center items-center flex-col cursor-pointer'>
        {props.icon}
        <p>{props.text}</p>
    </div>
  )
}

export default CartIcon