import React from "react";
import NavBar from "./NavBar";
import Body from "./Body";
import Head from "./Head"
import Bottom from "./Bottom";
import "../components/box.css";

function Box(){
    return(
        <>
        <div className="box">
            <div className="nav"><NavBar/></div>
           
           <Head/>
           <Body/>
           <Bottom/>
           </div>
        </>
    )
}
export default Box;