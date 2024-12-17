import React, { useEffect, useState } from 'react';
import { updateUserThunk } from '../../redux/session';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from './Product';
import { getProductThunk } from '../../redux/product';
import './Splash.css'


const Splash = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)
  const productsState = useSelector((state) => state.productsState.products)
  console.log(productsState, "test")

  //image url to send to aws
  const [imgUrl, setImgUrl] = useState("");
  //telling us if we should show the image
  const [showUpload, setShowUpload] = useState(true);
  //img url we will load in react
  const [previewUrl, setPreviewUrl] = useState("");
  // const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getData = async() => {
      await dispatch(getProductThunk()) //handle error messages dynamically
      // setProducts(productsState);
      setIsLoaded(true);
    } 
    if(!isLoaded) {
      getData()
    }
   }, [dispatch, isLoaded]);

  //function to get image from local

  const updateImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setPreviewUrl(reader.result);
    }
    setImgUrl(file);
    setShowUpload(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const img_url = imgUrl;
    const form = {img_url};
    const updateUser = await dispatch(updateUserThunk(user.id, form))
  }


  if(!isLoaded) {
    return <h1>...loading</h1>
  }

  return (
    <div>
        {/* <img className='banner' src='https://64.media.tumblr.com/d1bbcf28f97cc3a0406722b2b1f24631/1f1d2a8945d240e3-2f/s540x810/9e37d5683da3cbb4d98d3b1a865861a66326dee4.pnj' /> */}
        <form onSubmit={handleSubmit}>
          {/* <div>
            {showUpload && (
              <label htmlFor='file-upload'> Select From Computer
                <input
                  type='file'
                  id='file-upload'
                  name="img_url"
                  onChange={updateImage}
                  accept='.jpg, .jpeg, .png, .gif'
                  />
                </label>
            )}
            {!showUpload && (
              <div>
                <img
                  src={previewUrl}
                  alt="preview"
                />
                <button>Change Profile</button>
              </div>
            )}
          </div> */}
        </form>
        <div style={{display: 'flex', }}>
          {productsState.length > 0 ? productsState.map((product) => (
            <div key={`${product.id}-${product.productName}`}>
              <Product product={product}/>
            </div>
          )): null}
        </div>
    </div>
  );
}

export default Splash;