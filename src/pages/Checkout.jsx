import React, { useContext } from 'react'
import Loader from 'components/shared/Loader';
import Context from 'context';
import "components/checkout/styles/checkout.css"
import ScrollToTop from 'components/shared/ScrollToTop';
import PaymentInfo from 'components/checkout/PaymentInfo';
import OrderOverview from "components/checkout/OrderOverview";
import useFetch from 'hooks/useFetch';


export default function Checkout() {
    let value = useContext(Context)
    let { state: { cartVariants } } = value;


    let cartProductIds = []
    for (let i = 0; i < cartVariants?.length; i++) {
        cartProductIds.push(cartVariants[i].id)
    }



    let { data: allData } = useFetch()



    return (
        <>
            <ScrollToTop />
            <div className='section-margin checkout-page'>
                <p className='fs-600 fw-semi-bold'>Checkout</p>

                {allData ? (
                    <>
                        <div className='checkout-grid margin-block-600'>
                            <PaymentInfo />
                            <OrderOverview allData={allData} cartVariants={cartVariants} />
                        </div>
                    </>) : <Loader />
                }
            </div>
        </>
    )
}
