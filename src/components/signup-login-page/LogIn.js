import axios from "axios";
import React from "react";
import { useState } from "react";
import "../signup-login-page/login.css";

function LogIn(){

    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    console.log({username,password});

    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({username,password})
        axios.post("https://reqres.in/api/login",{
            username:username,
            password:password
        })
        .then(result=>{
            console.log(result)
        })
    }

    return(
        <>
            <div className="login-container">
                <div className="login-form">
                    <form >
                        <div>
                            <label htmlFor="email">Username</label>
                            <input value={username}  onChange= {handleUsername} type="email" name="email" id="email" placeholder="username" />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input value={password}  onChange={handlePassword} type="password" name="password" id="password" placeholder="password"/>                        
                        </div>
                        <button onClick={handleSubmit} className="btn-submit" type="login">Login</button>
                    </form>
                    <div className="reset">Forget Password! <a href="window.location"> Reset </a></div>
                </div>
            </div>
        </>
    )
}
export default  LogIn;
