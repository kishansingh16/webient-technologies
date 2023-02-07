import React from "react";
import "../components/bottom.css";
import {useNavigate } from "react-router-dom";

function Bottom(){
    const navigate = useNavigate();
    const InfoPage = () => {
    //Redirect to the Info page
    navigate("/Info");
    };
    
    return(
        <>
            <div className="bottom-box">
                <div className="coins">
                    <button >2</button>
                    <button>5</button>
                    <button>10</button>
                    <button>20</button>
                    <button>50</button>
                    <button>100</button>
                    <button>500</button>
                </div>
                <div className="welcome">
                    <div className="box-welcome-text">
                        <div className="welcome-text">WELCOME TO PLAY GAME</div>
                    </div>   
                </div>
                <div className="bottomright">
                    <button class="info" onClick={InfoPage}>INFO</button>
                    <button class="double-up">DOUBLE UP</button>
                    <button class="repeat">REPEAT</button>
                    <button class="clear">CLEAR</button>
                    <button className="bet">BET</button>
                </div>
            </div>
        </>
    )
}
export default Bottom;