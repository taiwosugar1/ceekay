import React from 'react'
import ProductList from '../../components/products/ProductList'
import AdminDashboard from '../../components/admin/AdminDashboard'

const Home = () => {
  return (
    <div>
        <ProductList/>
        <AdminDashboard/>
    </div>
  )
}

export default Home