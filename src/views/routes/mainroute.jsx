import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../main/components/header/header'
import Footer from '../main/components/footer/footer'

function MainRoute() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MainRoute