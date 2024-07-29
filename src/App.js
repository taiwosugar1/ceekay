import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from "./components/navbar/Navbar";
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import UserLoginPage from './pages/LoginAndRegister/UserLoginPage';
import AdminLoginPage from './pages/adminLogin/AdminLoginPage';
import RegistrationForm from './pages/LoginAndRegister/RegistrationForm';
import AdminPage from './pages/adminPage/AdminPage';
import FeedbackPage from './components/feedback/FeedbackPage';
// import ErrorBoundary from './ErrorBoundry';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* <ErrorBoundary> */}
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
        {/* </ErrorBoundary> */}
      </AuthProvider>
    </div>
  );
}

export default App;