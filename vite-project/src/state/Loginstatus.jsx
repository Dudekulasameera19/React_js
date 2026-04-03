import { useState } from "react";

function Loginstatus() {
  const [loggedIn, setLoggedIn] = useState(false);

  function Login() {
    setLoggedIn(!loggedIn);
  }

  return (
    <div>
      <h3>{loggedIn ? "Welcome User" : "Please Login"}</h3>
      <button onClick={Login}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Loginstatus;
