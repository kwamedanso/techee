import React from 'react'

export default function OrderOverview({ allData, cartVariants }) {


    return (
        <>
            <div className='checkout-overview'>
                <p className='fs-200 fw-semi-bold margin-block-100'>Order Priview</p>
                <div>
                    <div className="cart-items">
                        {allData?.map((product) => <div key={product?.id} className="cart-item">
                            <div className="cart-item__image">
                                {/* find the index of the cart item color in the allProducts current item colors array */}
                                <img src={product?.images[product?.colors.findIndex(color => color === cartVariants.find(item => item.id === product.id)?.color)]} alt={product?.model} />
                            </div>

                            <div className="cart-item__desc">
                                <div className='cart-item_flex'>
                                    <p className='fs-250'>{product.brand} {product?.model}</p>
                                </div>

                                <div className='cart-item__color_storage margin-block-100'>
                                    <div className='cart-item-border'>
                                        <span className='fw-semi-bold' title={cartVariants?.find(item => item.id === product?.id)?.color}>Color:</span>
                                        <div
                                            className='cart-item__color'
                                            style={{ backgroundColor: cartVariants.find(item => item.id === product?.id)?.color }}
                                            title={cartVariants.find(item => item.id === product?.id)?.color}
                                        ></div>
                                    </div>

                                    {product.storage && <p className='cart-item-border'>
                                        <span className='fw-semi-bold'>Size:</span>
                                        {cartVariants.find(item => item.id === product?.id)?.storage} GB
                                    </p>}
                                </div>

                                <div className='cart-item_fle'>
                                    <p className='fw-semi-bold fs-300'>${product?.price}</p>
                                    <p className='flex ai-center' style={{ gap: ".3rem" }}>
                                        <span>Quantity:</span>
                                        <span className='fw-semi-bold'>{cartVariants.find(item => item.id === product?.id)?.quantity}</span>
                                    </p>
                                </div>

                            </div>
                        </div>)}

                    </div>
                </div>
            </div>
        </>
    )
}
