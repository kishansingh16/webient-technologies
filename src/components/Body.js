import "../components/body.css";
import React, { useState, useEffect } from "react";
let photo=require("../Images/golden.png");

function Body(){
   const ImageData = [
    { count: 1 },
    { count: 2 },
    { count: 3 },
    { count: 4 },
    { count: 5 },
    { count: 6 },
    { count: 7 },
    { count: 8 },
    { count: 9 },
    { count: 10},
    { count: 11},
    { count:12 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < 12) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

    return(
   <div className="container">
    <div className="inner-container">
      {ImageData.map((item, index) => {
        return (
          <div>
            {index !== 0 && index === currentIndex ? (
              <h1>{item.count}</h1>
            ) : (
              <div className="photo">
                <img src={"photo"} alt="BigCo" />
              </div>
            )}
          </div>
        );
      })}
      </div>
    </div>
  );
}
export default Body;