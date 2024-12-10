import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux';
import { deleteProductThunk, getProductThunk } from '../../redux/product';


export const Product = ({product}) => {
  const dispatch = useDispatch()

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteProductThunk(product))
    await dispatch(getProductThunk())
  };

  return (
    <div className='product_card'>
      <h1>{product.productName}</h1>
      <img src={product.ProductImages[0].url} alt={product.desc} />
      <p>{product.desc}</p>
      <p>${product.price}</p>
      <button>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}