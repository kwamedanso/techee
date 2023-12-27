import React from 'react'

export default function CartSubtotal({ cartVariants, allProducts }) {

    const delivery = 20.45;
    const tax = 5.00;

    let totalPrice = allProducts?.reduce((acc, curr) => acc + (curr.price * cartVariants?.find(item => item.id === curr.id)?.quantity), 0)

    const totalSum = (totalPrice + delivery + tax).toFixed(2)


    return (
        <>
            <div className="cart-subtotal">

                <div className="order-summary">
                    <div className=' order-padding'>
                        <p className='fs-250 fw-semi-bold'>Order Summary</p>
                    </div>

                    <div className="ordered-products">
                        <div className=' order-padding'>
                            {allProducts?.map(product => (
                                <p key={product?.id} className='ordered-produc cart-summary-flex'>
                                    <span>
                                        x{cartVariants?.find(item => item.id === product?.id)?.quantity} {product?.model}
                                    </span>
                                    <span>${(product?.price * cartVariants?.find(item => item.id === product?.id)?.quantity)?.toFixed(2)}
                                    </span>
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="delivery">
                        <div className=" order-padding">
                            <p className='cart-summary-flex'>
                                <span>Deliver today with</span>
                                {allProducts.length === 0 ? <span>$0</span> : <span>${delivery}</span>}
                            </p>
                            <p>Shipping Express</p>
                            <p><span className='op-20'>Deliver to</span> Paris, France</p>
                        </div>
                    </div>

                    <div className="amount-and-tax">
                        <div className='order-padding'>
                            <p className='cart-summary-flex'>
                                <span>Amount</span>
                                {allProducts.length === 0 ? <span>$0</span> : <span>${(totalPrice + delivery).toFixed(2)}</span>}
                            </p>
                            <p className='cart-summary-flex'>
                                <span>Tax</span>
                                {allProducts.length === 0 ? <span>$0</span> : <span>${tax.toFixed(2)}</span>}
                            </p>
                        </div>
                    </div>

                    <div className="order-total">
                        <div className='order-padding'>
                            <p className='cart-summary-flex fs-30'>
                                <span>Order Total</span>
                                {allProducts.length === 0 ? <span>$0</span> : <span className='fs-250 fw-semi-bold'>${totalSum}</span>}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
