import React from 'react'
import Leftbar from '../components/leftbar/Leftbar'
import Topbar from '../components/Topbar/Topbar'
import Gallery from '../Gallery/Gallery'
import { Outlet } from 'react-router'

export default function Layouts() {
  return (
     <div className='app'>  <Leftbar>
      </Leftbar>
      <div className="content">
    <Topbar>
    </Topbar>
    {/* <Gallery></Gallery> */}
    <Outlet></Outlet>
      </div>
      </div>
  )
}
