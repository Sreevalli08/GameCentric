import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import Hero from "../Hero.png";
import IndiaFlag from "../IndiaFlag.png";

function Login (){

    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleSignIn = () => {

        if(phone.trim().length !== 10) {
            alert("Pleasr enter a valid 10-digit phone number");

            return;
        }

        navigate("/games");
    };


    return(

<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
  style={{
    height: "70px",
    background: "#111",
    borderBottom: "1px solid #222",
    display: "flex",
    alignItems: "center",
    padding: "0 30px",
    fontWeight: "700",
    fontSize: "22px",
    color: "#eff6f2",
  }}
>
  Vodacom
</div>

<div 
     style={{
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "160px",
        padding: "40px 80px",
        height: "100vh",
        background: "#0e0e0e",
        color: "#fff",
    
     }}>

 <div 
    style={{flex: 1.2,
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
             
   }}
   >
   <img src={Hero} alt="Game Centric"
   style={{
    width: "80%",
    
    objectFit: "contain",

   }}
   />
</div>

<div style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "40px",
}}
>
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px",
  }}
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

    <h2   style={{
    fontSize: "28px",
    fontWeight: "400",
     maxWidth: "320px",
  }}
  >
    Unlock the Possibility of <span  style={{ color: "#22c55e" }}>Gaming</span></h2>
    <p>Enter the Arena - Your Game Awaits...</p>


<div 
   style={{
    width: "420px",
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
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "0 12px",
      borderRight: "1px solid #333",
      flexShrink: 0,
    }}
  >
    <img
      src={IndiaFlag}
      alt="Flag"
      style={{
        width: "34px",
        height: "24px",
        objectFit: "cover",
      }}
    />

    <span>+91</span>
    <span>▼</span>
  </div>

  <input
    type="tel"
    maxLength={10}
    placeholder="Enter Your Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
    style={{
      flex: 1,
      padding: "12px",
      background: "transparent",
      border: "none",
      outline: "none",
      color: "#fff",
    }}
  />
</div>

<p style={{ maxWidth: "350px" }}>
  We will verify your subscription status with your phone number.
</p>


        <div
  style={{
    display: "flex",
    justifyContent: "end",
    gap: "12px",
    marginTop: "20px",
    width:"420",
    paddingRight:"60px",
   
  }}
>

        <button 
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
</div>

 );

}


export default Login;