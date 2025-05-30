import React from 'react'

function Ellipse({width, height, left, top}) {
    return (
      <div
        className="rounded-full absolute -z-20 transform transition-opacity duration-300"
        style={{
          width: `clamp(200px, ${width/16}rem, 80vw)`,
          height: `clamp(200px, ${height/16}rem, 80vh)`,
          left: `clamp(-100px, ${left/16}rem, 100vw)`,
          top: `clamp(-100px, ${top/16}rem, 100vh)`,
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),radial-gradient(41.41% 41.36% at 50% 50%, #42C0FA 0%, #24B6EA 100%)`,
          filter: `blur(clamp(40px, 5vw, 73px))`,
          opacity: 0.3
        }}
      />
    );
}

export default Ellipse
