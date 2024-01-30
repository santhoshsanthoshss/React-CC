import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetch(url) {

    let [apiData,setApiData] = useState([])
    let [isLoading,setIsLoading] = useState(true)
    let [isError,setIsError] = useState(false)

    async function getApiData()
    {
        try
        {
            let {data} = await axios.get(url)
            setApiData(data)
            setIsLoading(false)
            setIsError(false)
        }
        catch(err)
        {
            console.log(err.message);
            setIsLoading(false)
            setIsError(true)
        }
    }
    useEffect(()=>
    {
        setIsLoading(true)
        getApiData()
    },[])

  return {apiData,isLoading,isError}
}

export {useFetch}