import "./App.css"
import account from '../../images/account.png'
import lock from '../../images/mbrilock_99595.png'

import { createContext} from "react";


const JsonContext = createContext();

let counter = 0;
function  App() {

    return (
        <div className="App">
            <div className={"app-login-box"}>
                <h1 className={"Title"}>Sign In Version 0.6</h1>
                <div className={"textbox margine"}>
                    <img className={"app-icon"} src={account}/>
                    <input className={'app-input-text'} type={"text"} placeholder={"Username"} id={"name"}/>
                </div>
                <div className={"textbox"}>
                    <img className={"app-icon"} src={lock}/>
                    <input className={'app-input-text'} type={"password"} placeholder={"Password"} id={"password"}/>
                </div>
                <div className={"register"}>

                    forgot password?
                </div>
                <button onClick={login} className={"login-button"}>
                    Sign In
                </button>

                <div className={"register"} onClick={goToRegister}>or Register</div>

            </div>
        </div>
    );
}





function goToRegister(){
    console.log("ciao")
    window.location.href = "https://google.com";
}




async function login() {
    var password = document.getElementById('password').value;
    var username = document.getElementById('name').value;

    const credentials =btoa(`${username}:${password}`); // Codifica in Base64
    console.log(credentials);
    if (counter===0) {
        console.log(counter+" auth")
        console.log("Version 2")
        try {
            var response = await fetch('http://localhost:8080/user/id', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': `Basic ${credentials}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);

        }
        counter++;
    }else{
        try {
            console.log("SONO QUI")
            const response1 = await fetch('http://localhost:8080/user/id', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },

            });

            if (!response1.ok) {
                throw new Error('Login 2 failed');
            }

            const data = await response1.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);

        }
    }
    console.log(counter)
}



export default App;
