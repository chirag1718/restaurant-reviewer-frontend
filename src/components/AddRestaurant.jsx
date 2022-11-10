import React, { useState } from "react";
import { useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const {addRestaurants} = useContext(RestaurantsContext)
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
     const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange
      })
      addRestaurants(response.data.data.restaurant)
      // console.log(response)
      setName("")
      setLocation("")
      setPriceRange("Price Range")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container mb-4">
      <form action="" className="">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col ">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="form-select mb-1 mr-sm-2"
            >
              <option disabled>
                Price Range
              </option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col">
            <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100 ">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
