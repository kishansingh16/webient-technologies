import React from "react";

function LogIn(){
    return(
        <>
        <div className="container">
            <form >
                    <div>
                        <label htmlFor="email">Username</label>
                        <input type="email" name="email" id="email" placeholder="username" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="password"/>                        
                    </div>
                    
                    <input className="btn-submit" type="submit" value="Submit" />

                     <button  className="reset">Reset</button>
            </form>
            </div>
        </>
    )
}
export default  LogIn;