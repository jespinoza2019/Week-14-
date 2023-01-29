import React, { useState } from "react";
import Rating from "react-rating";

function App() {

  const [rating3, setRating3] = useState(0);

  return (
    <div className="App">
      <h3>Rating </h3>



      <strong>Example 3</strong>
      <Rating
        fractions={2}
        emptySymbol="fa fa-star-o fa-2x star"
        fullSymbol="fa fa-star fa-2x star"
        initialRating={rating3}
        onClick={rate => setRating3(rate)}
      />
      <p>Rating: {rating3}</p>

    </div>
  );
}

export default App;