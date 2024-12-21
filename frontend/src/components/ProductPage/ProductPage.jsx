import React from 'react'
import './ProductPage.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams()
  const product = useSelector((state) => state.productsState.byId[id])

  console.log(product)
  return (
    <div className='product_card'>
    <h1>{product.productName}</h1>
    <img src={product.previewImage} alt={product.desc} />
    <img src={product.image1} alt={product.desc} />
    <img src={product.image2} alt={product.desc} />
    <img src={product.image3} alt={product.desc} />
    <p>{product.desc}</p>
    <p>${product.price}</p>
    {/* <button onClick={updateProduct}>Update</button>
    <button onClick={handleDelete}>Delete</button> */}
  </div>
  )
}

export default ProductPage;