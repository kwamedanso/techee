import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CartCheckout({ id }) {
    const navigate = useNavigate()

    function handleCheckout(productId, nextPage) {
        navigate(`/${nextPage}`)
    }
    return (
        <>
            <div className='padding-block-100 cart-checkout'>
                <button className='button add-cart' data-type="white"
                    onClick={() => handleCheckout(id, "checkout")}
                >
                    Checkout Now
                </button>
                <button className='button' data-type="bg-blue"
                    onClick={() => handleCheckout(id, "cart")}
                >
                    Add to Cart
                </button>
            </div><hr />
        </>
    )
}
