import "../components/head.css"
import React from "react";
import { useState } from "react";

let crown=require('../Images/crown.jpeg')

function Head(){
    let currTime=new Date().toLocaleTimeString();
    let currDate=new Date().toLocaleDateString();

    const [ctime,setCtime]=useState(currTime);
    const [cdate,setCdate]=useState(currDate);


    const UpdateTime=()=>{
        currTime=new Date().toLocaleTimeString();      
        setCtime(currTime);
    };

    const UpdateDate=()=>{
        currDate=new Date().toLocaleDateString();      
        setCdate(cdate);
    }

    setInterval(UpdateTime,1000)
    setInterval(UpdateDate,1000)
    return(
        <>
        
            <div className="boxes">
                <div className="top">
                <div className="box1">PLAY</div>
                <div className="box2"></div>
                <div className="box3">WIN</div>
                <div className="box4"></div>
            </div>

                <div className="image">
                     <img src={crown} alt="images" ></img>
                </div>
                <div className="date-time">
                    <p className="date">{cdate}</p>
                    <p className="time">{ctime}</p>
                </div>
            </div>
                        
        </>
    )
}
export default Head;