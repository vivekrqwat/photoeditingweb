import React from 'react'
import"./Topbar.css"
import UserBtn from '../Userbtn/UserBtn'

export default function Topbar() {
  return (
    <div className="Topbar">
        {/* search */}
        <div className='search'>
            <img src="/general/search.svg" alt="" />
            <input type="text" placeholder='search' />
        </div>
        {/* user */}
        <UserBtn></UserBtn>

    </div>
  )
}
