import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/api';
import { useAuth } from '../../context/AuthContext';
import "./UserLoginPage.css"

const UserLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      setUser(data);
      localStorage.setItem('token', data.token);
      navigate('/'); // Use navigate instead of history.push
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className='login-container'>
      <h1>User Login</h1>
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
      <h3>Dont have an account <Link to={'/register'}>Register</Link></h3>
    </div>
  );
};

export default UserLoginPage;