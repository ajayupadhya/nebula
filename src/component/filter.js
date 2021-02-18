import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import ReactStars from "react-rating-stars-component";
const Filter = ({ datas, getFilter }) => {
  const [startdate, setstartdate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [oraganistion, setoraganistion] = useState("");
  const [rating, setrating] = useState(0);
  const [startpart, setstartpart] = useState(0);
  const [endpart, setendpart] = useState(5);

  const changeorg = (e) => {
    const org = datas?.filter((item) => item.organisation === e);

    getFilter(org);
  };

  const onChangerating = (newRating) => {
    getFilter([]);
    setrating(newRating);
    const rate = datas?.filter((item) => item.rating === newRating);

    getFilter(rate);
  };

  const datechange = (e) => {
    setstartdate(e);
    console.log(e.getTime());
    const ti = datas?.filter(
      (item) =>
        Date.parse(item.date) >= e.getTime() &&
        Date.parse(item.date) >= endDate.getTime()
    );
    getFilter(ti);
    console.log(ti);
  };
  const dateendChange = (e) => {
    setendDate(e);
    const ti = datas?.filter(
      (item) =>
        Date.parse(item.date) <= e.getTime() &&
        Date.parse(item.date) >= startdate.getTime()
    );
    getFilter(ti);
  };
  const rateFilter = () =>{
    const ti = datas?.filter((item) => item.rating >= startpart && item.rating <= endpart)
    getFilter(ti);
  }

  return (
    <div className="filter">
      <h2>Filter</h2>

      <div className="datefilter">
        <div>
          <span>From </span>{" "}
          <DatePicker onChange={(e) => datechange(e)} value={startdate} />
        </div>
        <div>
          <span>To </span>
          <DatePicker onChange={(e) => dateendChange(e)} value={endDate} />
        </div>
      </div>

      <div className="datefilter">
        <p>Select Organisation : </p>
        <select
          className="middleinp"
          onChange={(e) => changeorg(e.target.value)}
        >
          <option value="Reliance">Reliance</option>
          <option value="TCS">TCS</option>
          <option value="HP">HP</option>
          <option value="Dell">Dell</option>
          <option value="Google">Google</option>
          <option value="Microsoft">Microsoft</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <span>Rating :</span>
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          onChange={onChangerating}
        />
        Select Rating :
        <div className="selectRate">
          <input
            type="number"
            onChange={(e) => setstartpart(e.target.value)}
            value={startpart}
          />
          <input
            type="number"
            onChange={(e) => setendpart(e.target.value)}
            value={endpart}
          />
          <button
            className="btn btn-primary loginbtn"
            onClick={() => rateFilter()}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
