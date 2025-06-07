import React from 'react'
import"./Galleryitem.css"
import { Link } from 'react-router'
import IMG from '../Image/IMG'


export default function Galleryitem({item}) {
  const ophieght=(372*item.height/item.width);
  return (
    <div className='galleryItem' 
    style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}
    >
     <IMG path={item.media} alt=""classname={''} height={ophieght} width={200} ></IMG>
        {/* <img src={item.media}></img> */}
        <Link to={`/pin/${item.id}`} className='overlay'></Link>
        <button className='save-btn'>save</button>
        <div className="overlayicon">
            <button>
                <img src="/general/share.svg"></img>
            </button>
             <button>
                <img src="/general/more.svg"></img>
            </button>
        </div>

    </div>
  )
}
