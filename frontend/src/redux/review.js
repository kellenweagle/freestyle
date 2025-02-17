import { csrfFetch } from './csrf';

//Constants
const GET_REVIEWS = 'reviews/all';
const CREATE_REVIEWS = 'reviews/create'
const DELETE_REVIEWS = 'reviews/delete'

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  payload: reviews
})

const createReviews = (review) => ({
  type: CREATE_REVIEWS,
  payload: review,
});

const deleteReview = (deletedReview) => ({
  type: DELETE_REVIEWS,
  payload: deletedReview,
});


export const getReviewsThunk = () => async (dispatch) => {
    try{
      console.log("we are in the thunk for review")
        const response = await csrfFetch('/api/reviews');
        if (response.ok) {
            const reviews = await response.json();
            dispatch(getReviews(reviews));
            return reviews
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

export const createReviewThunk = (reviewForm) => async (dispatch) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewForm),
    };

    const res = await csrfFetch("/api/reviews", options);
    if (res.ok) {
      const data = await res.json();
      dispatch(createReviews(data));
      return data;
    } else {
      throw res;
    }
  } catch (e) {
    return e;
  }
};

export const deleteReviewThunk = (review) => async (dispatch) => {
  try {
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    };
    const res = await csrfFetch(`/api/reviews/${review.id}`, options);
    console.log("we are in the delete review thunk")
    if (res.ok) {
      const data = await res.json();
      dispatch(deleteReview(data));
      return data;
    } else {
      throw res;
    }
  } catch (error) {
    return error;
  }
};

const initialState = { reviews: [], byId: {} };

function reviewsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
                byId: action.payload.reduce((acc, review) => {
                    acc[review.id] = review;
                    return acc;
                }, {})
            };

        case CREATE_REVIEWS: {
            return { 
                ...state, 
                reviews: [action.payload, ...state.reviews], 
                byId: { ...state.byId, [action.payload.id]: action.payload }
            };
        }

        case DELETE_REVIEWS: {
          newState = { ...state };
          newState.reviews = newState.reviews.filter(
            (review) => review.id !== action.payload.id
          );
          newState.userReviews = newState.userReviews?.filter(
            (review) => review.id !== action.payload.id
          );
          delete newState.byId[action.payload.id];
          return newState;
        }

        
        default:
            return state;
    }
}

export default reviewsReducer;
