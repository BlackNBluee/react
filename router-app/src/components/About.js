import { useNavigate } from "react-router-dom";

function About(){

    const navigate = useNavigate();
    function clickHandler(){
        navigate("/support");
    }

    return (
        <div>
            About Page
            <br/>
            <button onClick={clickHandler}>Go to Support page</button>
        </div>
    )
}

export default About;