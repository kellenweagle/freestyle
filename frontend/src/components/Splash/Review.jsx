import React from 'react'
import './Review.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteReviewThunk, getReviewsThunk } from '../../redux/review';


export const Review = ({review}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((store) => store.session.user);

   const handleDelete = async (e) => {
      e.preventDefault();
      await dispatch(deleteReviewThunk(review))
      await dispatch(getReviewsThunk())
    };

  return (
      <div className='review_card'>
        <p>{review.User.firstName}</p>
        <p>{review.review}</p>

        {user !== null ? user.id === review.userId ? <button onClick={handleDelete}>Delete</button> : null : null}
      </div>
  )
}

export default Review;