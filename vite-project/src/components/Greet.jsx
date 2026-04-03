import React from 'react'
// import image1 from './Assests/pexels-photo-2--7679720.jpeg'
function Greet(buttons) {
  return (
    <>
      <button style={{ color: buttons.color }}>{buttons.name}</button>

      {/* <div class="card">
        <img src={image1} alt="image1" />
        <p>card</p>
        <p>Price</p>
        <button>Add to cart</button>
        <button>Details</button>
      </div> */}
    </>
  )
}

export default Greet
