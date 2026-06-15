import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import Service from '../Components/Service'
import Stats from '../Components/Stats'
import Testimonial from '../Components/Testimonial'
import Banner from '../Components/Banner'

export default function ServicePage() {
  return (
    <>
      <Breadcrum title="Services" description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    <Service/>
    <Stats/>
    <Testimonial/>
    <Banner/>
    </>
  )
}
