import { useState } from "react";
import {toast} from "react-toastify";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from "react-router-dom";


 


function SignupForm({setIsLoggedIn}){

    const navigate = useNavigate();

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [accountType, setAccountType] = useState('student');

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        console.log(formData.password+" "+formData.confirmPassword)
        event.preventDefault();
        if(formData.password !== formData.confirmPassword ){
            toast.error("Password don't match");
            console.log("Password don't match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("account created");
        navigate("/dashboard");
    }

    return(
        <div className="">
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button
                    className={`${accountType === "student" ?
                    "bg-richblack-900 text-white" : "bg-transparent text-richblack-200 "}
                    py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={()=>setAccountType("student")}>
                    Student
                </button>
                <button
                    className={`${accountType === "instructor" ?
                    "bg-richblack-900 text-white" : "bg-transparent text-richblack-200 "}
                    py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={()=>setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex flex-row gap-x-4">
                    <label>
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading[1.375rem">
                        First Name<sup className="text-pink-200">*</sup>
                    </p>
                        <input 
                            required
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>

                    <label>
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading[1.375rem">
                        Last Name<sup className="text-pink-200">*</sup>
                    </p>
                        <input 
                            required
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                </div>

                <div>
                    <label>
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading[1.375rem">
                        Email Address<sup className="text-pink-200">*</sup>
                    </p>
                        <input 
                            required
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            placeholder="Enter Email Address"
                            className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                </div>

                <div className="flex flex-row gap-x-4">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading[1.375rem">
                            Create Password<sup className="text-pink-200">*</sup>
                        </p>
                        <input 
                            required
                            type={showPassword1 ? ("text"):("password")}
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                        <span onClick={()=>{setShowPassword1(!showPassword1)}}
                            className="absolute right-3 top-[38px] cursor-pointer">
                            {
                                showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                            }
                        </span>
                    </label>
                    
        
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading[1.375rem">
                            Confirm Password<sup className="text-pink-200">*</sup>
                        </p>
                        <input 
                            required
                            type={showPassword2 ? ("text"):("password")}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                        <span onClick={()=>{setShowPassword2(!showPassword2)}}
                            className="absolute right-3 top-[38px] cursor-pointer">
                            {
                                showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                            }
                        </span>
                    </label>
                    
                </div>
                <br></br>

                <button type="submit" className="bg-yellow-50 rounded-[8px] w-full font-medium text-richblack-900 px-[12px] py-[8px]">
                    Create Account
                </button>
            </form>
        </div>
    );
}
export default SignupForm;