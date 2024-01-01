

import { useState } from 'react';
import './login.css';
import Home from './home';
export default function Login(){
    const [setusername,Setusername]=useState("");
    const validate=()=>{
        let userName = document.getElementById('username').value;
        let password =document.getElementById("password").value;
        if(userName==="" || password==="") {
            alert("Please fill out all fields");

            return false;
            } else {
                Setusername(userName);
                Home(setusername);
                // alert("Login Successful!");
            }
}
    return(
        <div class='center-div'>
            <h1>Login</h1>
            <form  onSubmit={validate}>
                <table>
                    <tr>
                        <td><label for='username'>Username: </label></td>
                        <td><input type='text' id='username' placeholder='Email'/></td>
                    </tr>
                    <tr>
                        <td>Password :</td>
                        <td><input type='password' name='password' id='password'  placeholder='Password'/></td>
                    </tr>
                    <tr>
                        <td colSpan='5'>
                            <button type='submit'>Log In</button>
                        </td>
                    </tr>
                </table>
                
                
            </form>
        </div>
    )
    
}


