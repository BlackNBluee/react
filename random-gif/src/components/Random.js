import { useState, useEffect } from "react"
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";



export default function Random(){

    const {gif, loading, fetchData} = useGif();


    function clickHandler(){
        fetchData();
    }

    return(
        <div className="bg-green-500 w-1/2 rounded-lg border border-black flex flex-col items-center gap-[10px]">
            <h1 className="text-2xl underline uppercase font-bold">Random Gif</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
            }
            <button onClick={clickHandler}
                className="bg-yellow-500 w-[90%] mb-2 rounded-sm p-2 uppercase">
                Generate
            </button>
        </div>
    )
}