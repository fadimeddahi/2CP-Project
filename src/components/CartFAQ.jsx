import React from 'react'

function CartFAQ(props) {
  return (
    <div className=' ' 
    style={{
        background: '#fff'  , 
        height: '200%',
        width: '200%',
        margin: '9px',
    }}>
        <p className='text-white'>{props.text1}</p>
        <p>{props.text2}</p>
    </div>
  )
}

export default CartFAQ