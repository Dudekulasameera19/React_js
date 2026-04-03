import React from 'react'
import { useState } from 'react'

function Password() {
    const [initial, updated] = useState(false)
    function button(){
       updated (true)
    }
  return (
    <div>
        <input type={initial?"text":"password"} />
        <button onClick={button}>Click</button>
    </div>
  )
}
export default Password
