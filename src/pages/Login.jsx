import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import Hero from "../Hero.png";
import IndiaFlag from "../IndiaFlag.png";
//import Subscribe from "./Subscribe";
import "./Login.css";


function Login (){

    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
   // const [subscribe, setSubscribe] = useState("");

    const handleSignIn = () => {

        if(phone.trim().length !== 10) {
            alert("Pleasr enter a valid 10-digit phone number");

            return;
        }

        navigate("/games");
    };

    const handleSubscribe = () => {

    navigate("/subscribe")

    };


    return(
      <>

<div className="page-wrapper"
>
  Vodacom
</div>

<div className="login-container">
   

 <div className="hero-section"
   >

   <img src={Hero} alt="Game Centric"

   />
</div>

<div className="form-section"
>
<div className="logo-section"
>
  {/* G Logo */}
  <div
    style={{
      width: 34,
      height: 34,
      borderRadius: 8,
      background: "#1a1a1a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <span
      style={{
        color: "#4ade80",
        fontSize: 40,
        fontStyle: "italic",
        fontWeight: 700,
        lineHeight: 1,
      }}
    >
      G
    </span>
  </div>

  <h1
    style={{
      fontSize: "22px",
      margin: 0,
      lineHeight: 1.1,
    }}
  >
    GAME <br />
    CENTRIC
  </h1>
</div>

    <h2 className="form-heading"
  >
    Unlock the Possibility of <span  style={{ color: "#22c55e" }}>Gaming</span></h2>
    <p>Enter the Arena - Your Game Awaits...</p>


<div 
   style={{
    maxWidth: "420px",
    width: "100%",
   }}
   >
    <label>Phone Number</label>

<div
  style={{
    display: "flex",
    alignItems: "center",
    border: "1px solid #333",
    borderRadius: "8px",
    overflow: "hidden",
    maxWidth: "420px",
    width: "100%",
    marginTop: "8px",
  }}
>
  <div
    className="country-code"
  >
    <img
      src={IndiaFlag}
      alt="Flag"
  
    />

    <select className="country-select">
  <option value="+91">+91</option>
</select>
    
  </div>

  <input
    type="tel"
    className="phone-input"
     inputMode="numeric"
    maxLength={10}
    placeholder="Enter Your Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}

  />
</div>

<p style={{ maxWidth: "350px" }}>
  We will verify your subscription status with your phone number.
</p>


        <div className="action-buttons"
>

        <button 
        onClick={handleSubscribe}
        style={{
      background: "#f97316",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600"
      }}
     >
     Subscribe </button>  

        <button onClick={handleSignIn}
           style={{
      background: "#22c55e",
      color: "#211e1e",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
    }} >
        Sign in
        
        </button>
        </div>

        <hr style={{
          marginTop: "25px"
        }} />

        <p>By logging in, you agree to our <span style={{color: "#22cb0c", textDecoration:"underline"}}>Privacy Policy </span> 
        and <span style={{color: "#22cb0c", textDecoration:"underline"}}>Terms of <br />Service.</span>
        </p>
</div>
</div>
</div>
</>

 );

}


export default Login;