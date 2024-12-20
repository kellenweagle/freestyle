import { csrfFetch } from './csrf';

// Constants
const CREATE_PRODUCT = "product/createProduct";
const GET_PRODUCTS = 'products/all';
const DELETE_PRODUCT = "product/deleteProduct";
const UPDATE_PRODUCT = "product/updateProduct";

// Action Creators
const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

const deleteProduct = (deletedProduct) => ({
  type: DELETE_PRODUCT,
  payload: deletedProduct,
});

const createProduct = (product) => ({
  type: CREATE_PRODUCT,
  payload: product,
});

const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

// Thunks
export const getProductsThunk = () => async (dispatch) => {
    try{
        console.log("we are in the thunk")
        const response = await csrfFetch('/api/products');
        console.log(response, "looking for response")
        if (response.ok) {
            console.log(response, "response is okay")
            const products = await response.json();
            dispatch(getProducts(products));
            return products
        } else if (response.status <= 500) {
            const data = await response.json();
            console.log("it bad")
            if (data.errors) {
                return data
            } else {
                throw new Error('An error occured. Please try again.')
            }
        }
        return response;
    } catch(e){
        return e
    }
}

export const createProductThunk = (productForm) => async (dispatch) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productForm),
    };

    const res = await csrfFetch("/api/products", options);
    if (res.ok) {
      const data = await res.json();
      dispatch(createProduct(data));
      return data;
    } else {
      throw res;
    }
  } catch (e) {
    return e;
  }
};

export const deleteProductThunk = (product) => async (dispatch) => {
  try {
    const options = {
      method: 'DELETE',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    };

    const res = await csrfFetch(`/api/products/${product.id}`, options);
    if (res.ok) {
      const data = await res.json();
      dispatch(deleteProduct(data));
      return data;
    } else {
      throw res;
    }
  } catch (error) {
    return error;
  }
};

export const updateProductThunk = (id, updatedProductForm) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/products/${id}/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProductForm),
    });
    
    if (res.ok) {
      const updatedProduct = await res.json();
      dispatch(updateProduct(updatedProduct));
      return updatedProduct;
    } else {
      throw res;
    }
  } catch (e) {
    console.error(e);
    return e;
  }
};

// Reducer
const initialState = { 
  products: [],
  userProducts: [],
  byId: {}
};

function productsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_PRODUCTS: {
      newState = { ...state };
      newState.products = action.payload;
      newState.byId = action.payload.reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
      }, {});
      return newState;
    }

    case CREATE_PRODUCT: {
      newState = { ...state };
      newState.products = [action.payload, ...newState.products];
      newState.byId[action.payload.id] = action.payload;
      return newState;
    }

    case DELETE_PRODUCT: {
      newState = { ...state };
      newState.products = newState.products.filter(
        (product) => product.id !== action.payload.id
      );
      newState.userProducts = newState.userProducts?.filter(
        (product) => product.id !== action.payload.id
      );
      delete newState.byId[action.payload.id];
      return newState;
    }

    case UPDATE_PRODUCT: {
      newState = { ...state };
      const updatedProducts = newState.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      newState.products = updatedProducts;

      if (newState.userProducts) {
        const updatedUserProducts = newState.userProducts.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
        newState.userProducts = updatedUserProducts;
      }

      newState.byId = { ...newState.byId, [action.payload.id]: action.payload };

      return newState;
    }

    default:
      return state;
  }
}

export default productsReducer;
