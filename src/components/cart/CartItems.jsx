import React from 'react'
import { RxCrossCircled } from "react-icons/rx"
import { Link } from 'react-router-dom';


export default function CartItems({ allProducts, cartVariants, removeFromCart }) {


    return (
        <div className="cart-items">
            {allProducts.length === 0 ? <>
                <h2>No products added to cart</h2>
                <Link to={"/products"}>View all products</Link>
            </> : <> {allProducts?.map((product) => <div key={product?.id} className="cart-item">
                <div className="cart-item__image">
                    <Link to={`/productdetails/${product.id}`}>
                        <img src={product?.images[0]} alt={product?.model} />
                    </Link>
                </div>
                <div className="cart-item__desc">
                    <div className='cart-item_flex'>
                        <p className='fs-250'>{product?.brand} {product?.model}</p>
                        <div className="remove-from-cart" onClick={() => removeFromCart(product?.id)}><RxCrossCircled /></div>
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

                    <div>
                        <p className='fw-semi-bold fs-300'>${product?.price}</p>
                        <div className="quantity-buttons"></div>
                    </div>
                </div>
            </div>)}
            </>}
        </div>
    )
}