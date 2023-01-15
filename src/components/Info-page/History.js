import Info from "./Info";
import "../Info-page/history.css";
import React from "react";

function History(){
    return(
        <>  
            <Info/>
            <div className="history-tables">
                
                <div className="ticket">TICKET-ID</div>
                <div className="barcode">BARCODE</div>
                <div className="play">PLAY</div>
                <div className="manual">MANUAL</div>
                <div className="auto">AUTO</div>
                <div className="space">--</div>
                <div className="result">RESULT</div>
                <div className="draw-time">DRAW-TIME</div>    
                <div className="print-time">PRINT-TIME</div>
                <div className="re-print">RE-PRINT</div>
                <div className="cancel">CANCEL</div>
            </div>
            <div></div>         
        </>
    )
}
export default History;