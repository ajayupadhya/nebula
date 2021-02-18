import React, { useEffect, useState } from "react";

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Card = ({ name, date, org, rating, phone }) => {
  
  

  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>Name</span> : {name}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>Date : </span>
        {date.substr(0, 10)}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>Phone Number :</span>
        {phone}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>Oraganisation :</span>
        {org}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>Rating : </span>

        <div className = "rate">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend"></Typography>
            <Rating name="simple-controlled" value={rating} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Card;
