import { useState } from "react";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import "./style.css";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div className="application">      
        <SignUpForm token={token} setToken={setToken} className="sign-up-form"/>
            
        <Authenticate token={token} setToken={setToken} className="authenticate"/>
      </div> 
    </>
  );
}