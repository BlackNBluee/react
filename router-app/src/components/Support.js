import { useNavigate } from "react-router-dom";

function Support(){

    const navigate = useNavigate();
    function clickHandler(){
        navigate("/");
    }

    return (
        <div>
            Support Page
            <br/>
            <button onClick={clickHandler}>
                Go to Home Page
            </button>
        </div>
    )
}

export default Support;