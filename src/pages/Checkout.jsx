import React, { useContext } from 'react'
import Context from 'context';
import Loader from 'components/shared/Loader';
import useFetchSupabase from 'hooks/useFetchSupabase';

export default function Checkout() {
    let value = useContext(Context)
    let { state: { cartVariants } } = value;


    let cartProductIds = []
    for (let i = 0; i < cartVariants?.length; i++) {
        cartProductIds.push(cartVariants[i].id)
    }


    let { allData } = useFetchSupabase({ table: "products", select: "*", inc: { column: "id", value: cartProductIds } })


    return (
        <div>
            Checkout
            {allData ? <div>
                {allData?.map(prodcut => <div key={prodcut?.id}>
                    <img style={{ width: "100px" }} src={prodcut.images[0]} alt="" />
                    <p>{prodcut.brand} {prodcut.model}</p>
                    <p>${prodcut.price}</p>
                    <p>{prodcut.description}</p>
                </div>)}
            </div> : <Loader />}
        </div>
    )
}
