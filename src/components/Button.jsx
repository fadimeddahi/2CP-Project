import React from 'react'

function Button(props) {
  return (
    <div className='flex justify-center items-center '>
        <button className={props.className} onClick={props.onClick}>
            {props.text}
        </button>
    </div>
  )
}

export default Button