import React from "react";
import "../Info-page/info.css";
import {useNavigate } from "react-router-dom";

function Info(){
    const navigate = useNavigate();
    const result = () => {
    //Redirect to the Info page
    navigate("/Result");
    };

    const history=()=>{
        navigate("/History");
    };
    const netpay=()=>{
        navigate("/Netpay");
    };
    const summary=()=>{
        navigate("/Summary");
    };
    const exit=()=>{
        navigate("/Exit");
    };
    return(
        <>
           <div className="info-nav">
                <div className="nav-buttons">
                    <button onClick={result}>RESULT</button>
                    <button onClick={history}>HISTORY</button>
                    <button onClick={summary}>SUMMARY</button>
                    <button >LEDGER</button>
                    <button onClick={netpay}>NET TO PAY</button>
                    <button onClick={exit}>EXIT</button>
                </div>
                
           </div>
        </>
    )
}
export default Info;