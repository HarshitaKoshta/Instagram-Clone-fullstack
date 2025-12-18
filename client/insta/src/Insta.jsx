import React, { useState } from "react";
import axios from "axios";
import img1 from "./landing-2x.png";
import { useNavigate } from "react-router-dom";


const Insta = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const navigate = useNavigate();


  const loginUser = async () => {
    if (!email || !passWord) {
      alert("Please enter both fields");
      return;
    }

    try {
      const res = await axios.post("https://instagram-fullstack-d71b.onrender.com/login", {
        email,
        passWord
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");
      console.log("User:", res.data.user);


    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div>
      <div className="body-div">
        {/* image */}
        <div className="imagee">
          <img className="image" src={img1} alt="" />
        </div>

        <div className="form">
          {/* login */}
          <div className="login">
            <h1>Instagram</h1>
            <br />

            <input
              type="text"
              placeholder="Phone number, username or email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <input
              type="password"
              placeholder="Password"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
            />
            <br />

           <button className="login-btn" onClick={() => {loginUser(); navigate("/Home");}}>
           Log In
          </button>
            <br />
            <br />

            <h4>---------- OR ----------</h4>
            <br />
          </div>

          <div>
            <h3>Login with Facebook</h3>
            <h2>Forgotten your password?</h2>
            <br />
            <br />
            <div className="signup">
              <p className="account">Don't have an account?</p>
             <p className="sign" onClick={() => navigate("/signup")} 
             style={{ cursor: "pointer" }}
             > Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insta;
