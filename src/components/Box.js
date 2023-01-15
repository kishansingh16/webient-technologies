import React from "react";
import NavBar from "./NavBar";
import Body from "./Body";
import Head from "./Head"
import Bottom from "./Bottom";
function Box(){
    return(
        <>
           <NavBar/>
           <Head/>
           <Body/>
           <Bottom/>
        </>
    )
}
export default Box;