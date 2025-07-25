import React from 'react'
import CircularGallery from '../ReactBits/CircularGallery'

const Product = () => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.05}/>
</div>
  )
}

export default Product