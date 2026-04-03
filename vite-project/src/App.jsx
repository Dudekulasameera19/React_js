import './App.css'
// import Header from './components/header'
// import Greet from './components/greet'
// import Image from './components/image'
// import Count from './state/Count'
// import Button from './state/Button'
// import Hii from './state/Loginstatus'
// import Password from './Tasks/Password'
// import Cards from './Tasks/Cards'
import Form from './Tasks/Form'


function App() {
  return (
    <>

      <div style={{border:"2px solid grey",width:"200px",padding:"10px"}}>
        <Form
        label="Email"
        type="email"
        id="email"
        placeholder="Enter your email"
      />

      <Form
        label="Password"
        type="password"
        id="password"
        placeholder="Enter your password"
      />
      <button>Sign Up</button>
      </div>
      {/* <Cards />
      <Cards name="Card 1" color="red" /> */}
      {/* <Hii/> */}
      {/* <Password /> */}

      {/* <Count />
      <Button/>
      
      <Header name="hello" color="green" />
      <Greet name="login" color="green" />

      <div className="card">
        <Image
          image="https://images.pexels.com/photos/29308393/pexels-photo-29308393.jpeg"
          name="girl"
        />
        <button>Details</button>
        <button>Add to Cart</button>
      </div>

      <div className="card">
        <Image
          image="https://images.pexels.com/photos/35139492/pexels-photo-35139492.jpeg"
          name="animal"
        />
        <button>Details</button>
        <button>Add to Cart</button>
      </div> */}
    </>
  )
}

export default App
