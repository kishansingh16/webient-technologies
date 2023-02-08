import "../components/body.css";
import React, { useState, useEffect } from "react";
let photo=require("../Images/golden.png");

function Body(){
    const boxImage=[
        {count: 1},
        {count: 2},
        {count: 3} ,
        {count: 4},
        {count: 5},
        {count: 6},
        {count: 7} ,
	    {count: 8},
        {count: 9},
        {count: 10},
        {count: 11} ,
	    {count: 12}  
    ]

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
        const currentImages = boxImage;
        console.log(currentImages);
        if(index === 0){
            currentImages[index].showImage = true
            index +=1
        }else{
            currentImages[index+1].showImage = true
            currentImages[index-1].showImage = false
            index +=1;
        }
           setboxImages(currentImages)        
        }, 1000);

        return () => clearInterval(interval);
}, []);

    return(
        <>
           <div className="outer-box">
                    <div className="container">
                        {
                    boxImage.map((item) => <div>
                   {item.showImage ? item.image : item.count}
</div>)}
                        {/* <div className="item">1</div>
                        <div className="item">2</div>
                        <div className="item">3</div>
                        <div className="item">4</div>
                        <div className="item">5</div>
                        <div className="item">6</div>
                        <div className="item">7</div>
                        <div className="item">8</div>
                        <div className="item">9</div>
                        <div className="item">10</div>
                        <div className="item">11</div>
                        <div className="item">12</div>    */}
                    </div>
                
           </div>
        </>
    )
}
export default Body;