import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ForgotPassword from './pages/Auth/ForgotPassword'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

import Dashboard from './pages/Admin/Dashboard'
import Cart from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import ComingSoonPage from './pages/ComingSoon'
import Favorite from './pages/Favorite'
import Home from './pages/Home'
import Notification from './pages/Notification/Notification'
import Order from './pages/Order'
import OrderCompletePage from './pages/Order/OrderComplete'
import OrderInfo from './pages/Order/OrderInfo'
import Product from './pages/Product'
import ProductInfo from './pages/Product/ProductInfo'
import ProductList from './pages/Product/ProductList'
import Profile from './pages/Profile'

import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { SearchProvider } from './context/SearchContext'
import PrivateRoute from './route/PrivateRoute'

import './App.css'
import ProductAdmin from './pages/Admin/Product'
import NotFoundPage from './pages/NotFound'


function App() {
    return (
        <div className='outfit text-brown bg-img'>
            <AuthProvider>
                <SearchProvider>
                    <CartProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path='/' exact element={<Home />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/reset-password' element={<ForgotPassword />} />
                                <Route path='/register' element={<Register />} />
                                <Route path='/product/:category' element={<Product />} />
                                <Route path='/product/product/:subcategory' element={<Product />} />
                                <Route path='/product/detail/:productid' element={<ProductInfo />} />                            
                                <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
                                <Route path='/order' element={<PrivateRoute><Order/></PrivateRoute>} />
                                <Route path='/favorite' element={<PrivateRoute><Favorite/></PrivateRoute>} />
                                <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>} />
                                <Route path='/profile/:username'element={<PrivateRoute><Profile/></PrivateRoute>} />
                                <Route path='/notification' element={<PrivateRoute><Notification/></PrivateRoute>} />
                                <Route path='/checkout' element={<PrivateRoute><CheckoutPage/></PrivateRoute>}/>
                                <Route path='/order-complete' element={<PrivateRoute><OrderCompletePage/></PrivateRoute>}/>
                                <Route path='/order/detail/:orderid' element={<PrivateRoute><OrderInfo/></PrivateRoute>}/>
                                <Route path='/coming-soon' element={<ComingSoonPage />} />
                                <Route path='/product/search' element={<ProductList />} />
                                <Route path='/admin' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                                <Route path='/admin/products' element={<PrivateRoute><ProductAdmin/></PrivateRoute>}/>
                                <Route path='/notfound' element={<NotFoundPage />} />
                            </Routes>
                        </BrowserRouter>
                    </CartProvider>
                </SearchProvider>
            </AuthProvider>
        </div>
    )
}

export default App
