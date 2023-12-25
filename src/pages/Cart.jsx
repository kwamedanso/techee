import React, { useContext, useState, useEffect } from 'react'
import Context from 'context';
import supabase from 'config/supabaseClient';
import "components/cart/cart.css"
import CartItems from 'components/cart/CartItems';
import CartSubtotal from 'components/cart/CartSubtotal';
import Loader from 'components/shared/Loader';
import ScrollToTop from 'components/shared/ScrollToTop';



export default function Cart() {
    const [allProducts, setAllProducts] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    let value = useContext(Context)
    let { state: { cartVariants }, actions: { setCartVariants } } = value;


    useEffect(() => {
        let cartProductIds = []
        for (let i = 0; i < cartVariants.length; i++) {
            cartProductIds.push(cartVariants[i].id)
        }
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("products")
                .select()
                .in("id", cartProductIds)

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
    }, [cartVariants])


    function removeFromCart(id) {
        setCartVariants(prev => prev.filter(item => item.id !== id))
    }

    return (
        <>
            <ScrollToTop />
            <div className='cart-page section-margin'>
                {allProducts ? <>
                    <CartItems allProducts={allProducts} cartVariants={cartVariants} setCartVariants={setCartVariants} removeFromCart={removeFromCart} />
                    <CartSubtotal />
                </> : <Loader />
                }

            </div>
        </>

    )
}
