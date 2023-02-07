import "../components/head.css"
import React from "react";
import { useState } from "react";
import { add } from 'date-fns';
import Timer from "./Timer";
let crown=require('../Images/golden.png')
let lastresult=require("../Images/crown.jpeg")


function Head(){
   
    let currTime=new Date().toLocaleTimeString();
    let currDate=new Date().toLocaleDateString();
    let added = add(new Date(), {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 5,
        seconds: 0,
      })

    const [ctime,setCtime]=useState(currTime);
    const [cdate,setCdate]=useState(currDate);
    const [addtime,setaddtime]=useState(added);

    const UpdateTime=()=>{
        currTime=new Date().toLocaleTimeString();      
        setCtime(currTime);
    };

    const UpdateDate=()=>{
        currDate=new Date().toLocaleDateString();      
        setCdate(currDate);
    };

    const TimeAdded=()=>{
        added=add(new Date(), {
            years: 0,
            months: 0,
            weeks: 0,
            days: 0,
            hours: 0,
            minutes: 5,
            seconds: 0,
          })
        setaddtime(added );
    };

    setInterval(UpdateTime,1000)
    setInterval(UpdateDate,1000)
    setInterval(TimeAdded,1000)
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
                    <p className="time-added">{ctime}</p>                    
                    <div className="timer">
                        <div className="count-timer"><Timer/></div>
                    </div>               
                </div>

                <div className="lastresult">    
                <p className="time">{ctime}</p>
                    <div className="lastelement">
                        <p className="result" >1</p>
                            <div className="result-map-1">
                                <p>data</p>
                             </div>
                             <div className="result-map-1">
                                <p>data</p>
                            </div>
                            <div className="result-map-1">
                                <p>data</p>
                            </div>
                    </div>
                </div>                
            </div>
                        
        </>
    )
}
export default Head;