import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Review } from './Review';
import { Product } from './Product';
import { getProductsThunk } from '../../redux/product';
import './Splash.css'
import { getReviewsThunk } from '../../redux/review';


const Splash = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState.products)
  const reviewsState = useSelector((state) => state.reviewState.reviews)
  console.log(productsState, "test")

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getData = async() => {
      await dispatch(getProductsThunk()) //handle error messages dynamically
      await dispatch(getReviewsThunk())
      // setProducts(productsState);
      setIsLoaded(true);
    } 
    if(!isLoaded) {
      getData()
    }
   }, [dispatch, isLoaded]);

  if(!isLoaded) {
    return <h1>...loading</h1>
  }

  return (
    <div>
        <div style={{display: 'flex', }}>
          {productsState.length > 0 ? productsState.map((product) => (
            <div key={`${product.id}-${product.productName}`}>
              <Product product={product}/>
            </div>
          )): null}
        </div>
        <div className='review_container'>
        <h2>FreeStyle Reviews</h2>
          {reviewsState.length > 0 ? reviewsState.map((review) => (
            <div key={`${review.id}-${review.review}`}>
              <Review review={review}/>
            </div>
          )): null}
        </div>
    </div>
  );
}

export default Splash;