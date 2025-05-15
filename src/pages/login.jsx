import React from "react";
import { login } from "../apiCalls";

export default function Login(){
    return(
        <div>
            <div className="inputContainer">
                <form className="formularioLogin" onSubmit={login}>
                    <input type="text" name="username" className="username" placeholder="Email ou Username" required />
                    <input type="password" name="password" className="password" placeholder="*******" required />
                    <button type="submit" className="loginButton">Login</button>
                </form>
            </div>
        </div>
    )
}