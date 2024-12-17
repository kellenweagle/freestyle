import "./CreateProductForm.css"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProductThunk } from "../../redux/product";

function CreateProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = ["Tops", "Bottoms", "Coats and Jackets", "Footwear"];

  const [form, setForm] = useState({
    productName: "",
    desc: "",
    category: "",
    price: "",
    previewImage: "",
    image1: "",
    image2: "",
    image3: "",
    description: ""
  });

  // CUSTOM FUNCS 

  const updateForm = (val, key) => {
    return setForm((prev) => {
      const newPrev = { ...prev };
      newPrev[key] = val
      return newPrev
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(createProductThunk(form))
    if(res.ok || res.ok === undefined){
      navigate(`/products/${res.id}`)
    }
  }

  // JSX
  return (
    <>
      <form 
      onSubmit={handleSubmit}
      className='full-form'
      >
        <div className='section-one'>
          <h1>List an item</h1>
          <h3>Photos</h3>
          <p>Add at least one photo to publish your item</p>
          <input
            placeholder='Cover photo'
            value={form.previewImage}
            onChange={(e) => updateForm(e.target.value, "previewImage")}
          />
          <br />
          <input
            placeholder='Front'
            value={form.image1}
            onChange={(e) => updateForm(e.target.value, "image1")}
          />
          <br />
          <input
            placeholder='Back'
            value={form.image2}
            onChange={(e) => updateForm(e.target.value, "image2")}
          />
          <br />
          <input
            placeholder='Detail'
            value={form.image3}
            onChange={(e) => updateForm(e.target.value, "image3")}
          />
          <br />
        </div>
        <div className='section-two'>
          <h3>Description</h3>
          <textarea
            className='description-textarea'
            placeholder='eg. small blue Urban Outfitters top, only worn a few times.'
            value={form.desc}
            onChange={(e) => updateForm(e.target.value, "desc")}
          />
        </div>
        <div className='section-three'>
          <h3>Item Price</h3>
          <div className='section-four-price'>
            <span className='dollar-sign'>US$</span>
            <input
              placeholder='0.00'
              value={form.price}
              onChange={(e) => updateForm(e.target.value, "price")}
            />
          </div>
        </div>
        <div className='section-four'>
         <h3>Info</h3>
         <p>Item Name</p>
           <input
             placeholder="Item Name"
             value={form.productName}
             onChange={(e) => updateForm(e.target.value, "productName")}
           />
         <p>Category</p>
          <select
           id="category"
           value={form.category}
           onChange={(e) => updateForm(e.target.value, "category")}
          >
         <option value="">--Choose a category--</option>
         {categories.map((category, index) => (
         <option key={index} value={category}>
            {category}
          </option>
          ))}
         </select>
        </div>
      <div className='section-five'>
        <button className='create-item-button'>Post Item</button>
      </div>
      </form>
    </>
  )
}

export default CreateProductForm;

