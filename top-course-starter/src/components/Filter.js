import { click } from "@testing-library/user-event/dist/click";
import React,{useState, useEffect} from "react";

function Filter(props){
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function clickHandler(title){
        setCategory(title);
    }

    return (
        <div className="flex max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                filterData.map((data)=>{
                    return(
                        <button className={`text-white bg-black hover:bg-opacity-50 border-2 rounded-md font-medium py-1 px-2 text-lg
                                            ${category === data.title ? "bg-opacity-80 border-white" : "bg-opacity-60 border-transparent"}`} 
                                onClick = { () => {clickHandler(data.title)}} >
                            {data.title}
                        </button>
                    );
                })
            }
        </div>
    );
}
export default Filter;