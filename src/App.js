import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import ProductPage from './pages/ProductPage';
import FeedbackPage from './pages/FeedbackPage';
import NotFoundPage from './pages/NotFoundPage';
import UserLoginPage from './pages/LoginAndRegister/UserLoginPage';
import AdminLoginPage from './pages/LoginAndRegister/AdminLoginPage';
import RegistrationForm from './components/RegistrationForm';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/register" element={<RegistrationForm />} />

            {/* Private Routes */}
            <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="/admin" element={<PrivateRoute adminOnly><AdminPage /></PrivateRoute>} />
            <Route path="/products" element={<PrivateRoute><ProductPage /></PrivateRoute>} />
            <Route path="/feedback" element={<PrivateRoute><FeedbackPage /></PrivateRoute>} />

            {/* Fallback Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;