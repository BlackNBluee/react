import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";


const App = () => {

  const [courses, setCourses]= useState(null);
  const [loading, setLoading]= useState(true);
  const [category, setCategory]= useState(filterData[0].title);

  //FUNCTION TO FETCH DATA FROM URL
  const fetchData = async() => {
    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Some error occured");
    }
    setLoading(false);
  }

  //CALL FETCHDATA WHEN FIRST RENDERED
  useEffect(() => {
    fetchData();
  }, []);

  //RETURN
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <Filter  filterData={filterData}
                category={category} 
                  setCategory={setCategory}
                />
      <div className="mx-auto max-w-[1200px] justify-center items-center min-[50vh]:">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  );
};

export default App;
