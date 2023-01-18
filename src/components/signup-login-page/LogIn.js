import React from "react";
import "../signup-login-page/login.css";

function LogIn(){

    return(
        <>
            <div className="login-container">
                <div className="login-form">
                    <form >
                        <div>
                            <label htmlFor="email">Username</label>
                            <input type="email" name="email" id="email" placeholder="username" />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="password"/>                        
                        </div>
                        <button className="btn-submit" type="login">Login</button>
                    </form>
                    <div className="reset">Forget Password! <a href="window.location"> Reset </a></div>
                </div>
            </div>
        </>
    )
}
export default  LogIn;
