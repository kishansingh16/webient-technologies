import React, { useEffect, useState } from "react";

function Timer(){
    const [counter,setCounter]=useState(300);

    // useEffect(()=>{
    //     if(counter>0){
    //         setCounter(counter-1);
    //         setTimeout(()=>setCounter(counter-1),1000)
    //     }
    // },[counter])
    // console.log(counter)
    return(
        <>
        
            <div>counter</div>
        </>
    )
}
export default Timer;