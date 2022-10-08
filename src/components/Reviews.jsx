import React from "react";
import StarRating from "./StarRating";
import App from '../App.css'

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {reviews.map((review) => {
        return (
          <div key={review.id} className="col" style={{ maxWidth: "25%", }}>
            <div className="card  text-white bg-warning mr-4">
              <div className="card-header d-flex justify-content-between">
                <span>{review.name}</span>
                <span>
                  <StarRating rating={review.rating} />
                </span>
              </div>
              <div className="card-body">
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Reviews;
