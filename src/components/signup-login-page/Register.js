import React from "react";

function Register(){
    return(
        <>
           
            <div className="container">
                <div className="register-form">
                    <form >
                        <div>
                            <label htmlFor="email">Username</label>
                            <input type="email" name="email" id="email" placeholder="username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="password"/>                        
                        </div>
                        <button className="btn-register" type="register">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;