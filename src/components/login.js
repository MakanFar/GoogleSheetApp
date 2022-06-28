import React, { useCallback, useContext } from "react";
import '../index.css';
import { AuthContext } from "../contexts/AuthContext";
import app from "../firebase-config";
import AddItem from './AddItem'


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert("Could not Login!");
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <AddItem />;
  }

  return (
    
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
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