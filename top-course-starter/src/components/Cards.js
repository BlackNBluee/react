import React,{useState} from "react";
import Card from "./Card";

function Cards (props){

    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses(){
        let allCourses = [];
        if(category === "All"){
            //SHOW ALL COURSES
            Object.values(courses).forEach(array =>{
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            //SHOW SELECTED CATEGORY'S COURSES
             return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {
                getCourses().map((course) =>{
                    return (<Card key={course.id} 
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />)
                })
            }
        </div>
    );
}
export default Cards;