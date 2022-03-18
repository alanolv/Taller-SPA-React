import { useState } from "react";
import axios from "axios";
import pokea from './pokearray.json';
function useEffect(pokea){
    const [data, setData] = useState =(null);
    const [loading, setLoading] = useState =(false);
    const [error, setError] = useState =(false);
    useEffect(()=>{
        axios.get(pokea)
        .then((response)=>{
            setData(response.data);
        })
        .catch((err)=>{
            setError(err);
        }).finally(()=>{
            setLoading(false);
        });
    },[pokea]);
    return{data, loading, error};
}
export default useEffect;