import React from 'react'

export default function OrderOverview({ allData, cartVariants }) {


    return (
        <>
            <div className='checkout-overview'>
                <p className='fs-200 fw-semi-bold margin-block-100'>Order Priview</p>
                <div>
                    <div className="cart-items">
                        {allData?.map((product) => {
                            const cartVariant = cartVariants.find(variant => variant.id === product.id);

                            if (!cartVariant) {
                                return null;
                            }

                            const colorObject = product.colors.find(color =>
                                Object.keys(color)[0] === cartVariant.color
                            );

                            const imageUrl = colorObject ? Object.values(colorObject)[0] : '';
                            return (<div key={product?.id} className="cart-item">
                                <div className="cart-item__image">
                                    <img src={imageUrl} alt={product?.model} />
                                </div>

                                <div className="cart-item__desc">
                                    <div className='cart-item_flex'>
                                        <p className='fs-250'>{product?.model}</p>
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
                            </div>)
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}
