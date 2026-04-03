import React from 'react'

function Header(hii) {

  return (
   <>
    <div>
        <h1 style={{color:hii.color}}>header {hii.name}</h1>
        
    </div>
   </>

  )
}
export default Header