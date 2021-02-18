import React, { useState, useContext } from "react";
import DatePicker from "react-date-picker";
import "./createdata.css";
import ReactStars from "react-rating-stars-component";
import { Context } from "../contextApi/authContext";
import Nav from "./nav";
const Createdata = () => {
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [phone, setphone] = useState("");
  const [oraganistion, setoraganistion] = useState("");
  const [rating, setrating] = useState("");
  const ratingChanged = (newRating) => {
    setrating(newRating);
  };
  const { createData } = useContext(Context);
  const create = () => {
    createData(name, date, phone, oraganistion, rating);
    setdate("");
    setname("");
    setphone("");
    setoraganistion("");
    setrating("");
  };
  return (
    <div className="container bg-white">
      <Nav />
      <div className="createmiddle">
        <div className="middlename">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            Name :{" "}
            <input
              type="text"
              className="middleinp"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            Number{" "}
            <input
              type="number"
              className="middleinp"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
        </div>
        <div className="middlename">
          <div className="middledate">
            <p>Select Date : </p>
            <DatePicker onChange={(e) => setdate(e)} value={date} />
          </div>
          <div className="listdrop">
            <p>Select Organisation : </p>
            <select
              id="cars"
              name="cars"
              className="middleinp"
              value={oraganistion}
              onChange={(e) => setoraganistion(e.target.value)}
            >
              <option value="Reliance">Reliance</option>
              <option value="TCS">TCS</option>
              <option value="HP">HP</option>
              <option value="Dell">Dell</option>
              <option value="Google">Google</option>
              <option value="Microsoft">Microsoft</option>
            </select>
          </div>
        </div>
        <div className="middlename">
          <div className="rating">
            <p> Rating : </p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
        </div>

        <button
          type="submit"
          class="btn btn-primary listbtn "
          onClick={() => create()}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Createdata;
