import React from 'react'
import { ReactDOM } from 'react-dom/client'
import "../../src/index.css"  
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import PrivateRouter from './PrivateRouter'
import { Outlet } from 'react-router-dom'
import { navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { useResolvedPath } from 'react-router-dom'
import { useOutlet } from 'react-router-dom'
import { useRoutesMatch } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import NotFound from '../pages/NotFound'




const AppRouter = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter/>}>
          <Route path="" element={<Home />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail/>} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>

      </BrowserRouter>
    </>
  )
}

export default AppRouter