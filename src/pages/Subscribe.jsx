
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import "./Subscribe.css";



function Subscribe(){
    const [form, setForm] = useState({

        phone: "",
        subscription: "Daily",

    })

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const navigate = useNavigate();

    const handleSubmit = () => {

        navigate("/games");
    }


    return(

 <div
  className="subscribe-page"
>
      <div  className="subscribe-navbar"

>
    Vodacom

  <div>Homepage</div>
  <div>Terms & Conditions</div>
  <div>Privacy Policy</div>
  <div>FAQs</div>
  </div>

  <div 
  className="subscribe-content"
  >

    <div className="subscribe-card"
  >
        <h1>Sign Up</h1>

        <p>Hi, please input your phone number</p>

   <input className="subscribe-input"
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
         
        <p>Select subscription package</p>

           <select className="subscribe-select" name="subscription" value={form.subscription} onChange={handleChange}>
              <option value="">Daily(M1)</option>
              <option value="Daily">Daily(M1)</option>
              <option value="Weekly">Weekly(M7)</option>
              <option value="Monthly">Monthly(M30)</option>
            </select>


        <p>Click submit to receive a verification code</p>

        <button  className="subscribe-button"
           onClick={handleSubmit}
          >
            Submit
            </button>

           <p
             style={{ color: "white", cursor: "pointer" }}
             onClick={() => navigate("/login")}
          >
            or sign in if you already have an account
        </p>

    </div>

  </div>
</div>


    )
};

export default Subscribe ;