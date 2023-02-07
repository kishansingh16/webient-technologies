import React from "react";
import "../components/navBar.css"
import { useNavigate } from "react-router-dom";

function NavBar(){
    const navigate=useNavigate();
    const registerpage=()=>{
        navigate("/LogIn")
    }
    return(
        <>          
                <div className="navbar">
                    <div className="luckydraw">LUCKY DRAW</div>
                    <div className="ambusement">FOR AMBUSEMENT ONLY</div>
                    <div className="username">
                        <h3>WEBIENT</h3>
                    </div>
                    <div className="ticket-number">12345</div>
                    <div className="check">
                        <input  type="checkbox"/> PRINT TICKET </div>
                    <div className="claim">
                        <form><input type="text"/></form>
                        <button className="claim-btn">CLAIM</button>
                    </div>
                    <div className="balance-show">                    
                    <div className="balance">BALANCE: </div>
                        <div className="value" >100000000</div>
                    </div>
                    <button className="signout" onClick={registerpage}>SIGNOUT</button>                    
                </div>                               
        </>
    )
}
export default NavBar;