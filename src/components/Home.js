import { Route, Routes } from "react-router-dom";
import Box from "../components/Box";
import Info from "../components/Info-page/Info";
import Result from "../components/Info-page/Result";
import History from "./Info-page/History";
import React from "react";
import Netpay from "./Info-page/Netpay";
import Summary from "../components/Info-page/Summary";
import Exit from "../components/Info-page/Exit";
import LogIn from "../components/signup-login-page/LogIn";
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
            <Route path="/Summary" element={<Summary/>}></Route>
            <Route path="/Exit" element={<Exit/>}></Route>
            <Route path="/LogIn" element={<LogIn/>}></Route>
        </Routes>
        </>
    )
}
export default Home