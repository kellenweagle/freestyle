import { csrfFetch } from './csrf';

//Constants
// const SET_USER = 'session/setUser';
const GET_PRODUCTS = 'products/all';

const DELETE_PRODUCT = "product/deleteProduct"


// const setUser = (user) => ({
//     type: SET_USER,
//     payload: user
// });

const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products
})

const deleteProduct = (deletedProduct) => ({
    type: DELETE_PRODUCT,
    payload: deletedProduct
  })

export const getProductThunk = () => async (dispatch) => {
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

export const deleteProductThunk = (product) => async(dispatch) => {
    try {
            const options = {
                method: 'DELETE',
                header: {'Content-Type': 'application/json'},
                body: JSON.stringify(product)
            };
  
            const res = await csrfFetch(`/api/products/${product.id}`, options);
            console.log(res)
            if(res.ok){
                const data = await res.json();
                dispatch(deleteSpot(data));
              return data;
            } else{
                throw res;
            }
  
    } catch (error) {
        return error;
    }
  }

const initialState = { 
    products: null,
    userProducts: null,
    byId: {}
 };

function productsReducer(state = initialState, action) {
    let newState;
    switch (action.type) {

        case GET_PRODUCTS:
          console.log("get_products is being triggered")
          newState = {...state}
          newState.products = action.payload;
          return newState;
        
        case DELETE_PRODUCT: {
          newState = {...state};
    
          const filteredProducts = newState.products.filter((product)=> {
            return product.id !== action.payload.id
          })
          const filteredUserProducts = newState.userProducts.filter((product)=> {
            return product.id !== action.payload.id
          })
           newState.products = filteredProducts;
           newState.userProducts = filteredUserProducts;
    
           const newById = {...newState.byId};
           delete newById[action.payload.id];
           newState.byId = newById;
    
          return newState;
          }

        default:
          console.log("default is being triggered")
          return state;
    }
}

export default productsReducer;
