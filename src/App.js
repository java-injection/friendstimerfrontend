import './App.css';

function App() {
  return (
    <div className="App">
        <div className={"app-login-box"}>
            <h1 className={"Title"}>Sign In</h1>
            <div>
                <input className={"textbox"} type={"text"} placeholder={"Username"} name={"username"} />
            </div>
            <div>
                <input className={"textbox"} type={"password"} placeholder={"Password"} name={"password"} />
            </div>
            <div>
                <input type={"button"} className={"btn"} value={"Sign In"} />
            </div>
        </div>
    </div>
  );
}

export default App;
