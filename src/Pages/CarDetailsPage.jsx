import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import CarSlider from '../Components/CarSlider'

export default function CarDetailsPage() {
  return (
   <>
   <Breadcrum title="Car Details" description="Detailed information about the selected car."/>
   <CarSlider/>
   </>
  )
}
