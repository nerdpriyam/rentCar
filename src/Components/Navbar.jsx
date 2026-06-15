import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    let [settingData, setSettingData] = useState({
        siteName: import.meta.env.VITE_APP_SITE_NAME,
        map1: import.meta.env.VITE_APP_MAP1,
        map2: import.meta.env.VITE_APP_MAP2,
        address: import.meta.env.VITE_APP_ADDRESS,
        phone: import.meta.env.VITE_APP_PHONE,
        email: import.meta.env.VITE_APP_EMAIL,
        facebook: import.meta.env.VITE_APP_FACEBOOK,
        twitter: import.meta.env.VITE_APP_TWITTER,
        instagram: import.meta.env.VITE_APP_INSTAGRAM,
        whatsapp: import.meta.env.VITE_APP_WHATSAPP,
        linkedin: import.meta.env.VITE_APP_LINKEDIN,
        youtube: import.meta.env.VITE_APP_YOUTUBE
    });

    return (
        <>

            <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100 ">
                <div className="container">
                    <div className="row gx-0 align-items-center" style={{ height: "45px"}}>
                        <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <div className="d-flex align-items-center justify-content-end">
                                    <a href={settingData.map1} target='_blank' className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fas fa-map-marker-alt"></i></a>
                                    <a href={`mailto:${settingData.email}`} target="_blank" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fas fa-envelope"></i></a>
                                    <a href={`tel:${settingData.phone}`} target="_blank" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fas fa-phone"></i></a>
                                    <a href={`https://wa.me/${settingData.whatsapp}`} target="_blank" className="btn btn-light btn-sm-square rounded-circle me-0"><i className="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href={settingData.facebook} target="_blank" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-facebook-f"></i></a>
                                <a href={settingData.twitter} target="_blank" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-twitter"></i></a>
                                <a href={settingData.instagram} target="_blank" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-instagram"></i></a>
                                <a href={settingData.linkedin} target="_blank" className="btn btn-light btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
                <div className="container" >
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a href="" className="navbar-brand p-0">
                            <h1 className="display-6 text-primary"><i className="fas fa-car-alt me-3"></i>{settingData.siteName}</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-auto py-0">
                                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                                <NavLink to="/car" className="nav-item nav-link">Our Cars</NavLink>
                                <div className="nav-item dropdown">
                                    <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/feature" className="dropdown-item">Our Feature</NavLink>
                                        <NavLink to="/privacy-policy" className="dropdown-item">Privacy Policy</NavLink>
                                        <NavLink to="/faq" className="dropdown-item">FAQ</NavLink>
                                        <NavLink to="/tc" className="dropdown-item">Terms & Conditions</NavLink>
                                        <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                        <NavLink to="*" className="dropdown-item">404 Page</NavLink>                                       
                                    </div>
                                </div>
                                <NavLink to="/contactus" className="nav-item nav-link">Contact</NavLink>

                                <a href="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Priyam</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/logout" className="dropdown-item">Logout</NavLink>
                                </div>    
                            </div>
                            {/* <a href="#" className="btn btn-primary rounded-pill py-2 px-4 ">Get Started</a> */}
                        </div>
                    </nav>
                </div>
            </div>


        </>
    )
}
