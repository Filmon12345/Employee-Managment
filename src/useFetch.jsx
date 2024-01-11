import {useState,useEffect} from 'react';

const useFetch = (url)=>{
   
    const [products, setProducts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError]=useState(null);

    useEffect(() => {

     
        setTimeout(() => {
          fetch(url)
            .then(res => {
          if(!res.ok){
            throw Error('Could not fetch the data from the server');
            
          }
             return res.json()
            })
            .then((data) => {
              setProducts(data);
             
              setIsPending(false);
              setError(null);
            })
            .catch(err=>{
              setIsPending(false);
             setError(err.message);
            })
        }, 1000);
    
       
        }, [url]);

        return {products ,isPending ,error};
    
} 
export default useFetch;