import Home from "./components/Home"
import React from "react";
import "./App.css"
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <> 
     <div className="box"> 
     <BrowserRouter>
        <Home/>
    </BrowserRouter>
      </div> 
    </>
  );
}

export default App;
