import {useJson} from "../../business/TimerContext.jsx";
import {useNavigate} from "react-router-dom";
import CheckAuth from "../../business/CheckAuth.js";
import Navbar from "../navbar/Navbar.jsx";
import "./Main.css"


function ProgressBar({ progresso }) {
    console.log(progresso)
    return (
        <div className="progress-container">
            <div className="progress-fill" style={{ width: progresso + "%" }}></div>
        </div>
    );
}

function TableItem(props) {
    const { id,nome,progresso } = props;
    console.log(props);
    return(
        <div id={id} className={"item-container"}>
            <div className="item-info">
                <div className={"item-title"}>
                    {nome}
                </div>
                <div className={"item-progress"}>
                    {ProgressBar({ progresso })}
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

function Main() {

    const { user, setUser } = useJson();
    const navigate = useNavigate();
    let checkAuth = CheckAuth();
    checkAuth = true;
    if (!checkAuth) {
        navigate('/login');
    }


    if(checkAuth) {
        return (
            <>
                <Navbar/>
                <div className={"container"}>
                    <div className={"items-container"}>
                        {user.timers.map((timer) => (
                            <TableItem key={timer.id} {...timer} />
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Main;
