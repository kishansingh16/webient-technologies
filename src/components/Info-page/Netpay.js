import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Info from "./Info";
import "../Info-page/netPay.css";
const Netpay = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const datestart=()=>{
        setStartDate(startDate)
    }
    const dateend=()=>{
        setEndDate(endDate);
    }
    return (
        <>
            <Info/>
            
            <div className="datepicker">
                <div className="date"><h3>Date:</h3></div>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                />                
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                />
                <button className="showReport">SHOW REPORT</button>
            </div>
            <div className="data">
                <h4>UserId:{}</h4>
                <h4>Sales Report</h4>
                <h4>Date From:{datestart}</h4>
                <h4>Date To:{dateend}</h4>
            </div>           
        </>
    );
};
export default Netpay;