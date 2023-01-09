import React, {useState, useEffect} from "react";





const useFetchData = (url) =>{

	 const  [data,setData ]= useState([])
   const  [error, setError] =  useState(false)
   const[isLoading, setIsLoading] = useState(false)
		
	

   async function fetchData() {
    setIsLoading(true)
    const res = await fetch(url);
    res
      .json()
      .then(res => setData(res))
     
      .then(isLoading => setIsLoading(false))
      .catch(error => setError(error.message));
      
  }

  useEffect(() => {
    fetchData();
  }, []);

	

		return  {data, isLoading, error} 
	

}
export {useFetchData}
