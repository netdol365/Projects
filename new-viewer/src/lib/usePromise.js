import { useEffect, useState } from "react";

export default function usePromise(promiseCreator,deps){
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState();
    const [error, setError] = useState();

    useEffect(()=>{
        const process = async () =>{
            setLoading(true);
            try{
                const resolved = await promiseCreator();
                setResolved(resolved);
            }catch(e){
                console.log(e.message);
            }
            setLoading(false);
        };
        process();
    },deps);

    return[loading,resolved,error];
}