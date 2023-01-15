import React from "react";
import "../components/navBar.css"


function NavBar(){
    return(
        <>
           
                <div className="navbar">
                     
                    <div className="luckydraw">LUCKY DRAW</div>
                    <div className="ambusement">FOR AMBUSEMENT ONLY</div>
                    <div className="username">
                    <h3>UserName</h3>
                    </div>
                    <div className="ticket-number">ticket number</div>
                    <div className="check"><input  type="checkbox" /> PRINT TICKET </div>
                    <div className="claim">
                        <form><input type="text"/></form>
                        <button className="claim-btn">CLAIM</button>
                    </div>
                    <div className="balance-show">                    
                    <div className="balance">BALANCE </div>
                        <div><h2 className="value">10000</h2></div>
                        </div>                    
                </div>                
        </>
    )
}
export default NavBar;