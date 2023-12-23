import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const PrivateRouter = () => {
  return true ? (
    <>
     <Navbar />
      <Outlet navigate to="/" />

    </>



  )
  : (
    <h1>Not found</h1>
  )
}

export default PrivateRouter