import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import About from '../Components/About'
import Feature from '../Components/Feature'
import Process from '../Components/Process'
import Banner from '../Components/Banner'
import Stats from '../Components/Stats'

export default function AboutPage() {
  return (
    <>
      <Breadcrum title="About Us"/>
      <About/>
      <Stats/>
      <Feature/>
      <Process/>
      <Banner/>
    </>
  )
}
