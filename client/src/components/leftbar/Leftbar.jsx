import React from 'react'
import "./leftbar.css"
import IMG from '../Image/IMG'
export default function Leftbar() {
  return (
    <div className='leftBar'>
        <div className="menuIcon">
            <a href='/'className="menuicon">
            <IMG path="/general/logo.png" alt=""className="logo" />
            </a>
            <a href='/' className="menuicon">
            <IMG path="/general/home.svg" alt="" />
            </a>
            <a href='/' className="menuicon">
            <IMG path="/general/create.svg" alt="" />
            </a>
            <a href='/' className="menuicon">
            <IMG path="/general/updates.svg" alt=""/>
            </a>
            <a href='/' className="menuicon">
            <IMG path="/general/messages.svg" alt=""/>
            </a>
            
        </div>
        <a href='/' className="menuicon">
            <IMG path="/general/settings.svg" alt="" />
            </a>
    
    </div>
  )
}
