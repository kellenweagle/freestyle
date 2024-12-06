import { csrfFetch } from './csrf';

//Constants
// const SET_USER = 'session/setUser';
const GET_PRODUCTS = 'products/all';


// const setUser = (user) => ({
//     type: SET_USER,
//     payload: user
// });

const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products
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

const initialState = { products: null };

function productsReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_PRODUCTS:
          console.log("get_products is being triggered")
          newState = {...state}
          newState.products = action.payload;
          return newState;
        default:
          console.log("default is being triggered")
          return state;
    }
}

export default productsReducer;
