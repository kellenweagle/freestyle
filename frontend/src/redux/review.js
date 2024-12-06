import { csrfFetch } from './csrf';

//Constants
// const SET_USER = 'session/setUser';
const GET_REVIEWS = 'reviews/all';


// const setUser = (user) => ({
//     type: SET_USER,
//     payload: user
// });

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  payload: products
})

export const getReviewsThunk = (id) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/products/${id}/reviews`);
    if(res.ok) {
      const data = await res.json();
      await dispatch(getReviews(data))
      return data;

    } else {
      throw res;
    }
  } catch(e) {
    return e;
  }
}

const initialState = { reviews: null };

function reviewsReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        // case SET_USER:
        //     return { ...state, user: action.payload };
        // case REMOVE_USER:
        //     return { ...state, user: null };
        case GET_REVIEWS:
          newState = {...state}
          newState.reviews = action.payload;
          return newState;
        default:
            return state;
    }
}

export default reviewsReducer;
