import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'
import Inventory from '../pages/Inventory'
import Orders from '../pages/Orders'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/customer' element={<Customers />} />
    </Routes>
  )
}

export default AppRouter