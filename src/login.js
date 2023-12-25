import React from 'react';


const login=()=>{
    return(
        <div>
            <h1>Login</h1>
            <form >
                <label htmlFor="username">
                    Username:
                    <input type="text" name="username" id="username"/>
                </label>
                <br/><br/>
                <label htmlfor="password">
                    Password:
                    <input type="password" name="password" id="password"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
    
}

export  default login;