import React,{useState, useEffect} from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props){
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    //
    function clickHandler() {
        if(likedCourses.includes(course.id)){
            //IF ALREADY LIKE
            setLikedCourses((prev) => prev.filter((cid)=>(cid !==course.id)));
            toast.warning("like removed");
        }
        else{
            //IF NOT LIKED
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("liked Successfully");
        }
    }


    return(
        <div className="w-[300px] bg-bgDark rounded-sm overflow-hidden bg-opacity-80">
            <div className="relative ">
                <img src={course.image.url} ></img>
                <div className="w-30px h-30px bg-white rounded-full absolute right-2 bottom-3 ">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike />):(<FcLikePlaceholder/>)
                        }
                        
                    </button>
                </div>
            </div>

            <div className="text-white p-4">
                <p className="text-xl leading-6">{course.title}</p>
                <p className="mt-4">
                    {
                        course.description.length>100 ? (course.description.substring(0,100))+"..." : (course.description)
                    }
                </p>
            </div>
        </div>
    );
}
export default Card;