import { useState, useEffect } from "react"
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag(){
    

   
    const[tag, setTag] = useState("");
    const{gif, loading, fetchData} = useGif(tag);

    function clickHandler(){
        fetchData();
    }

    function changeHandler(event){
        setTag(event.target.value);
    }

    return(
        <div className="bg-blue-500 w-1/2 rounded-lg border border-black flex flex-col items-center gap-[10px]">
            <h1 className="text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
            }
            <input 
                className="bg-white-200 w-[90%] mb-2 rounded-sm p-2 text-center "
                onChange={changeHandler}
                value={tag}

            />
            <button onClick={clickHandler}
                className="bg-yellow-500 w-[90%] mb-2 rounded-sm p-2 uppercase">
                Generate
            </button>
        </div>
    )
}