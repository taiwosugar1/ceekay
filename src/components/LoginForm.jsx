import React, { useState } from 'react';
import { loginUser } from '../api/api';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      alert('Login successful');
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      alert('Error logging in');
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;