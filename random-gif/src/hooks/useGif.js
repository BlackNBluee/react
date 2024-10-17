import react,{useEffect,useState} from 'react';
import axios from "axios";


function useGif(tag){

    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const randomUrl =  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=random&rating=g`;
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=g`;

    const[gif, setGif] = useState("");
    const[loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);

        const output = tag ? await axios.get(tagUrl) : await axios.get(randomUrl);
        const image = output.data.data.images.downsized_large.url;
        console.log(image);
        setGif(image);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return{gif, loading, fetchData};

}
export default useGif;