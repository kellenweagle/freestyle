import React, { useEffect, useState } from 'react';
import { updateUserThunk } from '../../redux/session';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from './Product';
import { getProductThunk } from '../../redux/product';


const Splash = () => {
  const dummyProducts = [
    {
      id: 1,
      productName: 'Demo Product',
      desc: "Dummy Desc",
      category: "demo",
      price: 20,
      img: 'https://media-photos.depop.com/b1/43131288/2055295605_a680ccaa2e2344649fda98eed236ea93/P0.jpg'
    },
    {
      id: 2,
      productName: 'Dummy Product',
      desc: "Dummy Desc",
      category: "demo",
      price: 30,
      img: 'https://media-photos.depop.com/b1/43131288/2055295605_a680ccaa2e2344649fda98eed236ea93/P0.jpg'
    },
    {
      id: 3,
      productName: 'Demo Dummy Product',
      desc: "Dummy Desc",
      category: "demo",
      price: 40,
      img: 'https://media-photos.depop.com/b1/43131288/2055295605_a680ccaa2e2344649fda98eed236ea93/P0.jpg'
    },
  ]
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)
  const productsState = useSelector((state) => state.productsState.products)

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
      const res = await dispatch(getProductThunk()) //handle error messages dynamically
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
        <h1>Welcome</h1>
        <form onSubmit={handleSubmit}>
          <div>
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
          </div>
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