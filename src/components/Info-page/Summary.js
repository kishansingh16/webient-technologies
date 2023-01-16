import React from "react";
import "../Info-page/Summary.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Info from "./Info";
const  Summary=()=>{
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    return(
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
            </div>
        </>
    )
}
export default Summary;