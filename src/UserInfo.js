// src/UserInfo.js
import React, { useState } from 'react';
import './UserInfo.css';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate(); // useNavigate hook for navigation


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted successfully! Please do not refresh.');
    navigate('/order-confirmation'); // Navigate correctly using useNavigate
  };

  return (
    <div className="user-info worst-ui-ever">
      <h1>Fill in this Super Important Form!</h1>
      <form onSubmit={handleSubmit}>
        {/* Confusing order and field names */}
        <label>
          Enter Your Postal Zone (aka Name):
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Your Username Here"
            required
            style={{ border: '2px dotted red' }}
          />
        </label>
        <br />
        <label>
          Where You Reside Permanently (Email Address):
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g., ABC Street, Some City"
            required
            style={{ color: 'grey', backgroundColor: 'lightyellow' }}
          />
        </label>
        <br />
        <label>
          Your Private Line (Address):
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="e.g., someone@example.com"
            required
            style={{ border: '1px solid purple', marginTop: '20px' }}
          />
        </label>
        <br />
        <label>
          Country Code - Last (Phone):
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Last 7 digits"
            required
            style={{ border: '3px dashed blue' }}
          />
        </label>
        <br />
        <label>
          Check to Acknowledge You Did Not Read:
          <input type="checkbox" required style={{ marginLeft: '20px' }} />
        </label>
        <br />
        {/* Camouflaged submit button */}
        <button
          type="submit"
          style={{
            background: 'none',
            color: 'transparent',
            border: 'none',
            cursor: 'none',
            marginTop: '50px',
          }}
        >
          Submit
        </button>
        <p style={{ fontSize: '8px', color: '#ff0000' }}>
          Click here to maybe submit something... if you can find it!
        </p>
      </form>
    </div>
  );
};

export default UserInfo;
