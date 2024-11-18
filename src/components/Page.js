import React from 'react'
import Button from './Button'
import Navbar from './Navbar'
import KartaFig from './KartaFig'

const Page = () => {
  return (
    <div className="container">
      <Navbar/>
      <h4 className="signature" leading-none>Signature</h4>
      <h1 className="text-5xl font-bold mt-3 mb-5" style={{padding:20}}>Best trending Now!</h1>
      <div className="d-flex justify-content-center">
      <Button className="ml-8"/>
      </div>
      <KartaFig/>
    </div>
  )
}

export default Page
