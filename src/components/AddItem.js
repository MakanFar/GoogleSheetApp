import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';


const AddItem = () => {


  const [کالا, setProduct] = useState('');
	const [تاریخ, setDate] = useState('');
	const [مشتری, setName] = useState('');
	const [خریدلیر, setTRY] = useState('');
  const [تبدیل, setRate] = useState('');
  const [فروش, setSell] = useState('');
  const [پرداخت, setPaid] = useState('');
  const API = process.env.REACT_APP_API_SHEET;

  const handleSubmit = (e) => {
		e.preventDefault();

		const objt = { کالا, تاریخ, مشتری, خریدلیر, تبدیل, فروش,پرداخت };

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
      Product Name:
        <input
          name="کالا"
          type="string"
          value={کالا}
          onChange={e => setProduct(e.target.value)}
          required />
      </label>

      <label>
      Customer Name:
        <input
          name="مشتری"
          type="string"
          value={مشتری}
          onChange={e => setName(e.target.value)}
          required />
      </label>

      <label>
      Date:
        <input
          name="تاریخ"
          type="Date"
          value={تاریخ}
          onChange={e => setDate(e.target.value)}
          required />
      </label>

      <label>
        BoughtTRY:
        <input
          name="خریدلیر"
          type="number"
          value={خریدلیر}
          onChange={e => setTRY(e.target.value)}
          required />
      </label>

      <label>
      Exchange Rate:
        <input
          name="تبدیل"
          type="number"
          value={تبدیل}
          onChange={e => setRate(e.target.value)}
          required />
      </label>


      <label>
      Sold:
        <input
          name="فروش"
          type="number"
          value={فروش}
          onChange={e => setSell(e.target.value)}
          required />
      </label>


      <label>
      Paid:
        <input
          name="پرداخت"
          type="number"
          value={پرداخت}
          onChange={e => setPaid(e.target.value)}
          required />
      </label>


      <button color="blue" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default AddItem;