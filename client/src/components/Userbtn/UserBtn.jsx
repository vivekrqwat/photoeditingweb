import React, { useState } from 'react'
import "./UserBtn.css"
export default function UserBtn() {
    const curuser=true;
    const[open,setopen]=useState(false);
  return curuser? (
    <div className='ubtn'>
        <img src="/general/noAvatar.png" alt="" />
        <img onClick={()=>setopen(p=>!p)} 
        src="/general/arrow.svg" alt="" className='arrow' />
        {open&&(<div className='userOptions'>
            <div className="userOption">Profile</div>
            <div className="userOption">setting</div>
            <div className="userOption">logout</div>


        </div>)}
    </div>
   
  ):(<a className='login'>
    login/signup+
  </a>)
}
