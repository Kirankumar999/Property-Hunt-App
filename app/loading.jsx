'use client'
import React from 'react'
import { ClipLoader } from 'react-spinners'
const LoadingPage = () => {
    const override = {
        display: 'block',
        margin: '0 auto',
        borderColor: 'yellow'
    
    }
  return (
    <ClipLoader 
        size={150}
        color={'#123abc'}
        loading={true}
        cssOverride={override}
    ></ClipLoader>
  )
}

export default LoadingPage