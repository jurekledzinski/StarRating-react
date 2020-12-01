import React, { useState } from "react";
import "./Rate.css";

const Rate = () => {
  const [rate, setRate] = useState(0);

  const rates = [1, 2, 3, 4, 5];

  const handleRating = (e) => {
    const rate = parseInt(e.target.dataset.value);
    console.log(rate);
    setRate(rate);
  };

  const stars = rates.map((item) => (
    <i
      key={item}
      data-value={item}
      className={item <= rate ? "fas fa-star active" : "far fa-star"}
      onClick={handleRating}
    ></i>
  ));

  return (
    <div className="App">
      <div className="rating-wrapper">{stars}</div>
    </div>
  );
};

export default Rate;
