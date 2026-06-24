import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicePage from './Pages/ServicePage'
import TermsAndConditions from './Pages/TermsAndConditions'
import ContactUsPage from './Pages/ContactUsPage'
import FeaturesPage from './Pages/FeaturesPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import TestimonialPage from './Pages/TestimonialPage'
import CarsPage from './Pages/CarsPage'
import CarDetailsPage from './Pages/CarDetailsPage'
import ErrorPage from './Pages/ErrorPage'

{/*Admin import route */}
import AdminHomePage from './Pages/Admin/AdminHomePage'
import AdminCategoryPage from './Pages/Admin/Category/AdminCategoryPage'
import AdminBrandPage from './Pages/Admin/Brand/AdminBrandPage'
import AdminCreateCategoryPage from './Pages/Admin/Category/AdminCreateCategoryPage'
import AdminUpdateCategoryPage from './Pages/Admin/Category/AdminUpdateCategoryPage'
import AdminCreateBrandPage from './Pages/Admin/Brand/AdminCreateBrandPage'
import AdminUpdateBrandPage from './Pages/Admin/Brand/AdminUpdateBrandPage'
import AdminCarPage from './Pages/Admin/Car/AdminCarPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/feature' element={<FeaturesPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/car' element={<CarsPage />} />
        <Route path='/car/:id' element={<CarDetailsPage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/tc' element={<TermsAndConditions />} />

        {/* Admin Routes */}
        <Route path='/admin' element={<AdminHomePage/>} />

        <Route path='/admin/category' element={<AdminCategoryPage />} />
        <Route path='/admin/category/create' element={<AdminCreateCategoryPage />} />
        <Route path='/admin/category/update:id' element={<AdminUpdateCategoryPage />} />
        
        <Route path='/admin/brand' element={<AdminBrandPage/>} />
        <Route path='/admin/brand/create' element={<AdminCreateBrandPage/>} />
        <Route path='/admin/brand/update' element={<AdminUpdateBrandPage/>} />

        <Route path='/admin/car' element={<AdminCarPage />} />

        
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
