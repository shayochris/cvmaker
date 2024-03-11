import { useEffect, useState } from "react"

export default function useFetch() {

  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:4000/Resumes")
        .then(res => {
          if (!res.ok) {
            setLoading(false)
            setError(true)
          } else {
            setError(false)
            setLoading(false)
            return res.json()
          }
        })
        .then(data => {
          setData(data)
          setLoading(false)
        })
        .catch(err => {
          setError(true)
          setLoading(false)
        })
    }, 2000)
  }, [])
  return { data, loading, error }
}
