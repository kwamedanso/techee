import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url);
                const json = await response.json();
                setLoading(false)
                setData(json)
                setError(null)
            } catch (error) {
                setError(error);
                setLoading(false)
            }
        }

        fetchData();
    }, [url])

    return { loading, data, error }
}
