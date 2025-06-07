import React from 'react'
import Galleryitem from '../components/Galleryitem/Galleryitem'
import "./gallery.css"

export default function Gallery() {
  //temp
const items = [
  {
    id: 1,
    media: "/pin/pin1.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 2,
    media: "/pin/pin2.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 3,
    media: "/pin/pin3.jpeg",
    width: 1260,
    height: 1300,
  },
  {
    id: 4,
    media: "/pin/pin4.jpeg",
    width: 1260,
    height: 1900,
  },
  {
    id: 5,
    media: "/pin/pin5.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 6,
    media: "/pin/pin6.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 7,
    media: "/pin/pin7.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 8,
    media: "/pin/pin8.jpeg",
    width: 1260,
    height: 1300,
  },
  {
    id: 9,
    media: "/pin/pin9.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 10,
    media: "/pin/pin10.jpeg",
    width: 1260,
    height: 1000,
  }
];

  return (
    <div className='gallery'>
    {
      items.map((i)=>{
        return <Galleryitem key={i.id}
        item={i}
        ></Galleryitem>
      })
    }
    </div>
  )
}
