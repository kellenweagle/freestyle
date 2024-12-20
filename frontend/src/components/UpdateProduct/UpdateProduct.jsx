import "./UpdateProduct.css";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProductThunk } from "../../redux/product";
import { getProductsThunk } from "../../redux/product";

function UpdateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector((state) => state.productsState.byId[id]);

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
  });

  const isLoaded = useRef(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!isLoaded.current) {
        await dispatch(getProductsThunk(id));
        isLoaded.current = true;
      }
    };

    fetchProduct();
  }, [dispatch, id]);

  const url = product.ProductImages?.[0]?.url;

  useEffect(() => {
    if (product) {
      setForm({
        productName: product.productName || "",
        desc: product.desc || "",
        category: product.category || "",
        price: product.price || "",
        previewImage: url || "",
        image1: product.image1 || "",
        image2: product.image2 || "",
        image3: product.image3 || "",
      });
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(updateProductThunk(id, form));
    if (res?.ok || res?.ok === undefined) {
      console.log("update successful");
      navigate(`/products/${id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="full-form">
      <div className="section-one">
        <h1>Update an Item</h1>
        <h3>Photos</h3>
        <input
          placeholder="Cover photo"
          value={form.previewImage}
          onChange={(e) => setForm({ ...form, previewImage: e.target.value })}
        />
        <br />
        <input
          placeholder="Front"
          value={form.image1}
          onChange={(e) => setForm({ ...form, image1: e.target.value })}
        />
        <br />
        <input
          placeholder="Back"
          value={form.image2}
          onChange={(e) => setForm({ ...form, image2: e.target.value })}
        />
        <br />
        <input
          placeholder="Detail"
          value={form.image3}
          onChange={(e) => setForm({ ...form, image3: e.target.value })}
        />
      </div>
      <div className="section-two">
        <h3>Description</h3>
        <textarea
          className="description-textarea"
          placeholder="Item description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />
      </div>
      <div className="section-three">
        <h3>Item Price</h3>
        <input
          placeholder="0.00"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
      </div>
      <div className="section-four">
        <h3>Info</h3>
        <input
          placeholder="Item Name"
          value={form.productName}
          onChange={(e) => setForm({ ...form, productName: e.target.value })}
        />
        <br />
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="">--Choose a category--</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="section-five">
        <button className="create-item-button">Update Item</button>
      </div>
    </form>
  );
}

export default UpdateProduct;
