import React, { useEffect, useState } from "react";
import "./listdata.css";
import Filter from "./filter";
import Card from "./card";
import Nav from "./nav";
const Listdata = () => {
  const [data, setdata] = useState([]);
  const [filtered, setfiltered] = useState([]);
  
  useEffect(() => {
    const tok = localStorage.getItem("Token");
    const id = JSON.parse(localStorage.getItem("UserData"));
    fetch(`https://warm-journey-07484.herokuapp.com/api/data/${id._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${tok}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setdata(data.datas)
        setfiltered(data.datas)
      });
  }, []);

 
  const allFilter = (fil) => {
    setfiltered([])
    setfiltered(fil);
  };

  return (
    <div className="data">
      <div className="listnav">
        <Nav />
      </div>
      <div className="whole">
        <div className="left">
          <Filter datas={data} getFilter={(fil) => allFilter(fil)} />
        </div>
        <div className="right">
          {filtered.length > 0 ? (
            filtered.map((item) => {
              return (
                <Card
                key = {item.phone}
                  name={item.name}
                  phone={item.phoneNumber}
                  org={item.organisation}
                  date={item.date}
                  rating={item.rating}
                />
              );
            })
          ) : (
            <div style={{display:"flex" , alignItems:"center" , justifyContent:"center"  , width:400}}>
              <p>No records Found With this Filter</p>
              </div>
          
          )}
        </div>
      </div>
    </div>
  );
};

export default Listdata;
