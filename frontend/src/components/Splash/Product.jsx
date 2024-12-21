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

  const productPage = (e) => {
    e.preventDefault();
    navigate(`/products/${product.id}`)
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteProductThunk(product))
    await dispatch(getProductsThunk())
  };

  return (
    <div className='product_card'>
      <img onClick={productPage} src={product.previewImage} alt={product.desc} />
      <p>${product.price}</p>
      <button onClick={updateProduct}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}