import supabase from 'config/supabaseClient'
import { useState, useEffect } from 'react'


export default function useFetchSupabase({ table, select, inc, eq, range, neq }) {
    const [fetchError, setFetchError] = useState(null)
    const [allData, setAllData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            let query = supabase.from(table).select(select)

            if (inc) {
                const { column, value } = inc || {}
                query = query.in(column, value)
            }

            if (range) {
                const [from, to] = range
                query = query.range(from, to)
            }

            if (neq) {
                const { column, value } = neq || {}
                query = query.neq(column, value)
            }

            if (eq) {
                const { column, value } = eq || {}
                query = query.eq(column, value)
            }

            const { data, error } = await query

            if (error) {
                setFetchError(error)
                console.log(error)
                setAllData(null)
            } else {
                setFetchError(null)
                setAllData(data)
            }
        }

        fetchData()
    }, [])

    return { allData, fetchError }
}
