import React, { useContext, useEffect, useState } from 'react'
import Loader from 'components/shared/Loader';
import Context from 'context';
import "components/checkout/styles/checkout.css"
import ScrollToTop from 'components/shared/ScrollToTop';
import PaymentInfo from 'components/checkout/PaymentInfo';
import OrderOverview from "components/checkout/OrderOverview";


export default function Checkout() {
    const [allProducts, setAllProducts] = useState(null)
    let value = useContext(Context)
    let { state: { cartVariants } } = value;


    let cartProductIds = []
    for (let i = 0; i < cartVariants?.length; i++) {
        cartProductIds.push(cartVariants[i].id)
    }



    useEffect(() => {
        async function fetchCartProducts() {
            try {
                const response = await fetch("/allProducts.json");
                if (!response.ok) {
                    console.log("Unable to fetch fetch the cart items.")
                }
                const data = await response.json();
                let cartProductList = data.filter((product) => cartProductIds.includes(product.id))
                setAllProducts(cartProductList)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchCartProducts();
    }, [cartVariants])


    return (
        <>
            <ScrollToTop />
            <div className='section-margin checkout-page'>
                <p className='fs-600 fw-semi-bold'>Checkout</p>

                {allProducts ? (
                    <>
                        <div className='checkout-grid margin-block-600'>
                            <PaymentInfo />
                            <OrderOverview allData={allProducts} cartVariants={cartVariants} />
                        </div>
                    </>) : <Loader />
                }
            </div>
        </>
    )
}
