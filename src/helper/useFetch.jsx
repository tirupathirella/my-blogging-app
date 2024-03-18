import { useEffect ,useState } from "react"
const useFetch = ( url ) =>{
    const [data , setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error , setError] = useState(null)

    useEffect ( ()=>{
        const abortCont = new AbortController();
        fetch(url , { signal : abortCont.signal})
         .then( res =>{
            if(!res.ok){
                throw Error('could fetch data for that resource');
            }
           return res.json();
         })
         .then(data=>{
            console.log(data)
            setTimeout(() => {
                setData(data);
                setIsPending(false)
                setError(null);
            }, 1000)
         })
         .catch(err=>{
            if(err.name == 'AbortError'){
                console.log('fetch abort');
            }else{
                setError(err.message);
                setIsPending(false)
            }
         })
         return () => abortCont.abort();
    },[url])

    return { data , isPending , error };
}

export default useFetch;