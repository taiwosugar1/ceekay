import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../api/api';
import { useAuth } from '../../context/AuthContext';
import './AdminLoginPage.css';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginAdmin({ email, password });
      setUser(data);
      localStorage.setItem('token', data.token);
      navigate('/admin');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className='admin-login-container'>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginPage;