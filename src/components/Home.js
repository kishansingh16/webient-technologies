import { Route, Routes } from "react-router-dom";
import Box from "../components/Box";
import Info from "../components/Info-page/Info";
import Result from "../components/Info-page/Result";
import History from "./Info-page/History";
import React from "react";
import Netpay from "./Info-page/Netpay";

function Home(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Box/>}></Route>
            <Route path="/Info" element={<Info/>}></Route>
            <Route path="/" element={<Info/>}></Route>
            <Route path="/Result" element={<Result/>}></Route>
            <Route path="/History" element={<History/>}></Route>
            <Route path="/Netpay" element={<Netpay/>}></Route>
        </Routes>
        </>
    )
}
export default Home