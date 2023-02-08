import Info from "./Info";
import Print from "../Info-page/Print.js";
import "../Info-page/result.css"
import React from "react";

function Result(){
    return(
        <>
        <Info/>
        <div className="result">
            <div className="res-head">
                <h3 className="res-single-head">Draw Time</h3>
                <h3 className="res-single-head">Result</h3>
                <h3 className="res-single-head">X</h3>
                <h3 className="res-single-head">Winning</h3>
                <h3 className="res-single-head">Claim</h3>
            </div>


            <div className="res-value">
                <h3 id="draw"> 12-23-34 12:12:12</h3>
                <h3 id="ress"> 1</h3>
                <h3 id="x"> x </h3>
                <h3 id="win"> 1 </h3>
                <h3 id="claim"> claimed</h3>
            </div>

            <div className="res-value">
                <h3 id="draw"> 12-23-34 12:12:12</h3>
                <h3 id="ress"> 1</h3>
                <h3 id="x"> x </h3>
                <h3 id="win"> 1 </h3>
                <h3 id="claim"> claimed</h3>
            </div>

            <div className="res-value">
                <h3 id="draw"> 12-23-34 12:12:12</h3>
                <h3 id="ress"> 1</h3>
                <h3 id="x"> x </h3>
                <h3 id="win"> 1 </h3>
                <h3 id="claim"> claimed</h3>
            </div>

            <div className="res-value">
                <h3 id="draw"> 12-23-34 12:12:12</h3>
                <h3 id="ress"> 1</h3>
                <h3 id="x"> x </h3>
                <h3 id="win"> 1 </h3>
                <h3 id="claim"> claimed</h3>
            </div>

            <div className="res-value">
                <h3 id="draw"> 12-23-34 12:12:12</h3>
                <h3 id="ress"> 1</h3>
                <h3 id="x"> x </h3>
                <h3 id="win"> 1 </h3>
                <h3 id="claim"> claimed</h3>
            </div>
            <Print/>
        </div>
        
        </>
    )
}
export default Result;