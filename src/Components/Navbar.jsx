import React, { useState } from 'react'

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
         
          <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
              <div className="container">
                  <div className="row gx-0 align-items-center" style={{height: "45px"}}>
                      <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                          <div className="d-flex flex-wrap">
                              {/* <a href={settingData.map1} className="text-muted me-4"><i className="fas fa-map-marker-alt text-primary me-2"></i><span className='btn btn-light btn-sm-square rounded-circle me-3'></span></a>
                              <a href={`mailto:${settingData.email}`} className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i><span className='btn btn-light btn-sm-square rounded-circle me-3'></span></a>
                              <a href={`tel:${settingData.phone}`} className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i><span className='btn btn-light btn-sm-square rounded-circle me-3'></span></a>
                              <a href={settingData.whatsapp} className="text-muted me-4"><i className="fab fa-whatsapp text-primary me-2"></i><span className='btn btn-light btn-sm-square rounded-circle me-3'></span></a> */}
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
              <div className="container">
                  <nav className="navbar navbar-expand-lg navbar-light">
                      <a href="" className="navbar-brand p-0">
                          <h1 className="display-6 text-primary"><i className="fas fa-car-alt me-3"></i>{settingData.siteName}</h1>
                       {/* <img src="img/logo.png" alt="Logo"/> */}
                      </a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                          <span className="fa fa-bars"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarCollapse">
                          <div className="navbar-nav mx-auto py-0">
                              <a href="index.html" className="nav-item nav-link active">Home</a>
                              <a href="about.html" className="nav-item nav-link">About</a>
                              <a href="service.html" className="nav-item nav-link">Service</a>
                              <a href="blog.html" className="nav-item nav-link">Blog</a>

                              <div className="nav-item dropdown">
                                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                  <div className="dropdown-menu m-0">
                                      <a href="feature.html" className="dropdown-item">Our Feature</a>
                                      <a href="cars.html" className="dropdown-item">Our Cars</a>
                                      <a href="team.html" className="dropdown-item">Our Team</a>
                                      <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                      <a href="404.html" className="dropdown-item">404 Page</a>
                                  </div>
                              </div>
                              <a href="contact.html" className="nav-item nav-link">Contact</a>
                          </div>
                          <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Get Started</a>
                      </div>
                  </nav>
              </div>
          </div>

       
   </>
  )
}
