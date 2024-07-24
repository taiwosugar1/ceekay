import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './pages/home/Home';
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProductList from "./components/products/ProductList";
import SingleProduct from "./components/products/SingleProduct";

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/product/:id" exact element={<SingleProduct />} />
        <Route path="admin" exact element={<AdminDashboard />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
