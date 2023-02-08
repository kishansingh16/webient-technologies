import React from "react";
import Box from "../Box";
import {useNavigate} from "react-router-dom";

function Exit(){
    const navigate =useNavigate();
    const redirect=()=>{
        navigate("/Box");
    }
    return(
        <> 
           <button onClick={redirect}></button>
        </>
    )
}
export default Exit;
