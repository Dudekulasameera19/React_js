import { useState } from 'react'

function Button() {
  const [text, setText] = useState('Login ')

  function hii() {
    setText('Logout')
  }

  return (
    <div>
      <p >
        <button onClick={hii}>{text}
            
        </button>
      </p>

    </div>
  )
}

export default Button
