import React from 'react'
import './ProductPage.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductThunk, getProductsThunk } from '../../redux/product'
import { useNavigate } from 'react-router-dom'

export const ProductPage = () => {
  const { id } = useParams()
  const product = useSelector((state) => state.productsState.byId[id])
  const user = useSelector((store) => store.session.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = async (e) => {
      e.preventDefault();
      await dispatch(deleteProductThunk(product))
      await dispatch(getProductsThunk())
      navigate('/')
    };

    const updateProduct = (e) => {
      e.preventDefault();
      navigate(`/products/${product.id}/update`);
    }

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
    {user !== null ? user.id === 1 ? <button onClick={handleDelete}>Delete</button> : null : null}
    {user !== null ? user.id === 1 ? <button onClick={updateProduct}>Update</button> : null : null}
  </div>
  )
}

export default ProductPage;