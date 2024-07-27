import React, { useState } from 'react';
import { registerUser } from '../api/api';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert('Registration successful');
    } catch (err) {
      alert('Error registering');
    }
  };

  return (
    <div  className='login-container'>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
    <h3> Have an account  ? <Link to={'/login'}>Login</Link></h3>
    </div>
  );
};

export default RegisterForm;