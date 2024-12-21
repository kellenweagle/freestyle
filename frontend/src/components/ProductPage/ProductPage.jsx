import React from 'react'
import './ProductPage.css'
import { useParams } from 'react-router-dom'

export const ProductPage = () => {
  const id = useParams()
  return (
    <div className='product_card'>
      <p>Hi</p>
    </div>
  )
}

export default ProductPage;