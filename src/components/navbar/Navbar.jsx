import React from 'react';
import "./Navbar.css";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='navbar'>
       <header>
        <h1>Logo</h1>

        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
        <ul className="social">
            <a href="https://www.facebook.com/"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com"><FaInstagramSquare /></a>
        </ul>
       </header>
    </div>
  )
}

export default Navbar