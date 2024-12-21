import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux';
import { deleteProductThunk, getProductsThunk } from '../../redux/product';
import { useNavigate } from 'react-router-dom';


export const Product = ({product}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const updateProduct = (e) => {
    e.preventDefault();
    navigate(`/products/${product.id}/update`);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteProductThunk(product))
    await dispatch(getProductsThunk())
  };

  return (
    <div className='product_card'>
      <h1>{product.productName}</h1>
      <img src={product.previewImage} alt={product.desc} />
      <img src={product.image1} alt={product.desc} />
      <img src={product.image2} alt={product.desc} />
      <img src={product.image3} alt={product.desc} />
      <p>{product.desc}</p>
      <p>${product.price}</p>
      <button onClick={updateProduct}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}