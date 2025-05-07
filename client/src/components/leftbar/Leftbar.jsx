import React from 'react'
import "./leftbar.css"
export default function Leftbar() {
  return (
    <div className='leftBar'>
        <div className="menuIcon">
            <a href='/'className="menuicon">
            <img src="/general/logo.png" alt=""className="logo" />
            </a>
            <a href='/' className="menuicon">
            <img src="/general/home.svg" alt="" />
            </a>
            <a href='/' className="menuicon">
            <img src="/general/create.svg" alt="" />
            </a>
            <a href='/' className="menuicon">
            <img src="/general/updates.svg" alt=""/>
            </a>
            <a href='/' className="menuicon">
            <img src="/general/messages.svg" alt=""/>
            </a>
            
        </div>
        <a href='/' className="menuicon">
            <img src="/general/settings.svg" alt="" />
            </a>
    
    </div>
  )
}
