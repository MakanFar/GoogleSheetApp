import React from "react";
import {useLocation,useNavigate,useParams} from "react-router-dom";
import '../index.css';


const Login = () => {

  return (
    
      <form >
        <h1>Log in</h1>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Login</button>
      </form>
   
  );
};

export default Login;