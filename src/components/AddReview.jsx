import React, { useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useNavigate, useParams, useLocation } from "react-router-dom";
const AddReview = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmitReview = async () => {
    try {
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      navigate("/");
      navigate(location.pathname);
    } catch (err) {}
  };
  return (
    <div className="container mb-4 mt-4">
      <form action="" className="">
        <div className="row">
          {/* Name */}
          <div className="col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/*Rating*/}
          <div className="col ">
            <label htmlFor="rating">Rating</label>
            <select
              className="form-select mb-1 mr-sm-2"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        {/* Reviews */}
        <div className="col mb-2">
          <label htmlFor="review">Reviews</label>
          <textarea
            className="form-control"
            id="review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>
        {/* Button */}
        <div className="col">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmitReview}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
