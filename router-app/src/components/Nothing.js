import { useNavigate } from "react-router-dom";

function Nothing(){

    const navigate = useNavigate();
    function clickHandler(){
        navigate("/");
    }

    return (
        <div>
            Nothing Page
            <br/>
            <button onClick={clickHandler}>Go back to Home</button>
        </div>
    )
}

export default Nothing;