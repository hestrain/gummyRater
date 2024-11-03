import React from 'react'
import StarRating from '@mil-rlib/reactjs-star-rating'

const Star = () => {
  const handleStarClick = (starCount) => {
    console.log('Clicked star index:', starCount)
  }

  return <StarRating activeStars={3} totalStars={5} onClick={handleStarClick} />
}

export default Star