import './App.css';
import account from './images/account.png'
import lock from './images/mbrilock_99595.png'


function App() {
  return (
    <div className="App">
        <div className={"app-login-box"}>
            <h1 className={"Title"}>Sign In</h1>
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
async function login(){
    var password = document.getElementById('password').value;
    var username = document.getElementById('name').value;

}

export default App;
