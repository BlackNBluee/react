
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Navbar(props){

    let isLoggedIn= props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return(
        <div className="flex flex-row justify-evenly items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            {console.log(isLoggedIn)}
            <div>
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </div>
            <nav>
                <ul className="flex gap-6 text-white ">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/">
                        About
                    </Link>
                    <Link to="/">
                        Contact
                    </Link>
                </ul>
            </nav>
            <nav className="flex gap-x-4 items-center">
                {  !isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px]  border-rounded-richblack-700">
                            Login
                        </button>
                    </Link>
                }
                {
                    !isLoggedIn&&
                    <Link to="/signup">
                        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px]  border-rounded-richblack-700">
                            SignUp
                        </button>
                    </Link>
                }
                {  isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{setIsLoggedIn(false)}} className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px]  border-rounded-richblack-700">
                            LogOut
                        </button>
                    </Link>
                }
                {
                    isLoggedIn&&
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px]  border-rounded-richblack-700">
                            Dashboard
                        </button>
                    </Link>
                }
            </nav>
        </div>
    );
}

export default Navbar;