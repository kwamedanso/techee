import React, { useContext, useEffect, useState } from 'react'
import Context from 'context';
import supabase from 'config/supabaseClient';
import Loader from 'components/shared/Loader';
export default function Checkout() {
    const [allProducts, setAllProducts] = useState(null);
    const [fetchError, setFetchError] = useState(null)

    let value = useContext(Context)
    let { state: { cart }, actions: { setCart } } = value;

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("products")
                .select()
                .in("id", cart)

            if (error) {
                console.log("Could not fetch data")
                setFetchError(error)
                setAllProducts(null)
            } else {
                setFetchError(null)
                setAllProducts(data)
            }
        }

        fetchData();
    }, [])


    return (
        <div>
            {allProducts ? <div>
                {allProducts?.map(prodcut => <div key={prodcut?.id}>
                    <img style={{ width: "100px" }} src={prodcut.images[0]} alt="" />
                    <p>{prodcut.brand} {prodcut.model}</p>
                    <p>${prodcut.price}</p>
                    <p>{prodcut.description}</p>
                </div>)}
            </div> : <Loader />}
        </div>
    )
}
