import { useDispatch } from "react-redux"
import { useState, useEffect, useCallback } from "react"
import axios from 'axios'

const useAxios = (url, ...dispatchFunctions) => {
  const dispatch = useDispatch()
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = useCallback(async () => {

      try {
          setIsLoading(true)

          const { data } = await axios.get(url)
          dispatchFunctions.forEach(
            func => dispatch(func(data))
          )

          setIsLoading(false)
      } catch (error) {
          setFetchError(error.message);
          return;
      } 
  }, [url])  //// Since url is not declared as a react state it has to be a dependency in the useCallback function.

  useEffect(() => {
      fetchData()
  }, [fetchData])
 
  return {isLoading, fetchError}
}

export default useAxios