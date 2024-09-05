import React from 'react'
import Image from 'next/image'
import A1 from '@/assets/images/properties/a1.jpg'

const PropertyImage = ({image}) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={A1}
            alt=""
            className="object-cover h-[400px] w-full"
            width={110}
            height={110}
            sizes='100vw'
          />
        </div>
      </div>
    </section>
  )
}

export default PropertyImage