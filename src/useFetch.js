import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = () => {
  const [loading, setLoading] = useState()
  const [data, setData] = useState()
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      axios
        .get('https://dummyjson.com/products')
        .then((res) => {
          setData(res.data)
          setErrors(false)
        })
        .catch((error) => {
          console.error(error)
          setErrors(true)
        })
        .finally(() => setLoading(false))
    }

    fetchData()
  }, [])

  return { loading, data, errors }
}
