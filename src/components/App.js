import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./login"
import AddItem from "./AddItem"
import '../index.css';
import PrivateRoute from "./PrivateRoute";

require('dotenv').config();

console.log(process.env)

function App() {
  return (
   
     
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<AddItem/>}/>
              </Route>
              <Route path="/login" element={<Login />} />  
            </Routes>
          </AuthProvider>
        </Router>
     
    
  )
}

export default App