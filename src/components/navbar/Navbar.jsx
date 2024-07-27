import React from 'react';
import "./Navbar.css";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
       <header>
        <h1>Logo</h1>

        <ul>
            <Link to={'/'}><li>Home</li></Link>
           <Link><li>About Us</li></Link>
           <Link><li>Products</li></Link>
            <Link><li>Contact</li></Link>
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