import React from 'react'

function Image({image, name}) {
  return (
    <>
    <div>
        <img style={{ width: 200, height: 200 }} src={image} alt=" " />
        <p>{name}</p>
    </div>
    
    </>
  )
}
export default Image