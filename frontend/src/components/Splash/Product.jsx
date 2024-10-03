import React from 'react'
import './Product.css'

export const Product = ({product}) => {
  return (
    <div className='product_card'>
      <h1>{product.productName}</h1>
      <img src={product.ProductImages[0].url} alt={product.desc} />
      <p>{product.desc}</p>
      <p>{product.price}</p>
    </div>
  )
}