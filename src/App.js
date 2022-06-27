import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const path = require('path')


require('dotenv').config({path:'../../.env'})
console.log(process.env)

function App() {

  const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [salary, setSalary] = useState('');
	const [hobby, setHobby] = useState('');
  const API = process.env.API_KEY;

  const handleSubmit = (e) => {
		e.preventDefault();

		const objt = { name, age, salary, hobby };

		axios
			.post(
				API,
				objt
			)
			.then((response) => {
				console.log(response);
			});
	};

  return (
    <form onSubmit={handleSubmit}>
      <h1>Import Product</h1>

      <label>
      name:
        <input
          name="name"
          type="string"
          value={name}
          onChange={e => setName(e.target.value)}
          required />
      </label>

      <label>
        age:
        <input
          name="age"
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
          required />
      </label>

      <label>
      salary:
        <input
          name="salary"
          type="number"
          value={salary}
          onChange={e => setSalary(e.target.value)}
          required />
      </label>

      <label>
      hobby:
        <input
          name="hobby"
          type="string"
          value={hobby}
          onChange={e => setHobby(e.target.value)}
          required />
      </label>
      {/*
      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label>*/}

      <button color="blue" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default App;