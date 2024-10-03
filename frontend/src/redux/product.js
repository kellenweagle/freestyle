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
        const response = await csrfFetch(`/api/products/`);
        if (response.ok) {
            const products = await response.json();
            dispatch(getProducts(products));
        } else if (response.status <= 500) {
            const data = await response.json();
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
        // case SET_USER:
        //     return { ...state, user: action.payload };
        // case REMOVE_USER:
        //     return { ...state, user: null };
        case GET_PRODUCTS:
          newState = {...state}
          newState.products = action.payload;
          return newState;
        default:
            return state;
    }
}

export default productsReducer;
