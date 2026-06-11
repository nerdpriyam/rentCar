import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import Service from '../Components/Service'
import Stats from '../Components/Stats'
import Testimonial from '../Components/Testimonial'
import Banner from '../Components/Banner'

export default function ServicePage() {
  return (
    <>
    <Breadcrum title="Services"/>
    <Service/>
    <Stats/>
    <Testimonial/>
    <Banner/>
    </>
  )
}
