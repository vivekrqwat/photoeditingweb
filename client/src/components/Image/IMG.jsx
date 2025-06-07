import React from 'react'
import { Image } from '@imagekit/react';
export default function IMG({path,alt,classname,h,w,}) {
  return (
 
       <Image 
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
    src={path}
    // transformation={[
    //   {width:w,
    //     height:h
    //   }

    // ]}
    alt={alt}
    className={classname}
    loading="lazy"
    lqip={{active:true,quality:20}}
      ></Image>
   
  )
}
