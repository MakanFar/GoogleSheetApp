import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';


const AddItem = () => {


  const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [salary, setSalary] = useState('');
	const [hobby, setHobby] = useState('');
  const API = process.env.REACT_APP_API_SHEET;

  const handleSubmit = (e) => {
		e.preventDefault();

		const objt = { name, age, salary, hobby };

		axios
			.post(
				API,
				objt
			).then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/" 
        alert("Item was added!")
      }).catch(function (error) {
        if (error.response) {
          
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
         
          console.log(error.request);
        } else {
          
          console.log('Error', error.message);
        }
        console.log(error.config);
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

export default AddItem;