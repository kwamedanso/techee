import React from 'react'
import { RxCrossCircled } from "react-icons/rx"
import { Link } from 'react-router-dom';


export default function CartItems({ allProducts, cartVariants, setCartVariants, removeFromCart }) {

    let testproduct = { "id": 1, "brand": "Apple", "category": "Phones", "price": 936.34, "description": "Get ready to be blown away by this incredible phone that combines style, performance and cutting-edge technology. It's a game changer!.", "model": "iPhone 14 Pro Max", "starRating": 5, "storage": [{ "128": 0 }, { "256": 100 }], "colors": [{ "purple": "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14pro-purple.png" }, { "black": "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14pro_black.png" }, { "white": "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14pro_white.png" }, { "yellow": "https://raw.githubusercontent.com/kwamedanso/productsDataAPI/main/allProducts/phones/iphone14pro-yellow.png" }] }

    // console.log(testproduct.colors.find((color) => ))
    // console.log(allProducts)
    // function findUrl() {
    //     product.colors.find(color => Object.keys(color).at(0) == cartVariants.find((variant) => variant.id == product.id).color)
    // }
    // findUrl()
    // let currentProduct = allProducts.find((product) => product.id === 2)
    // console.log()

    function quantityIncrement(id) {
        setCartVariants(cartVariants.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            } else {
                return item
            }
        }))
    }

    function quantityDecrease(id) {
        if (cartVariants.find(item => item.id === id).quantity === 0) return

        setCartVariants(cartVariants.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            } else {
                return item
            }
        }))
    }


    return (
        <>
            <div className="cart-items">
                {allProducts?.map((product) => <div key={product?.id} className="cart-item">
                    <div className="cart-item__image">
                        <Link to={`/productdetails/${product?.id}`}>
                            {/* find the index of the cart item color in the allProducts current item colors array */}
                            {/* <img src={product?.images[product?.colors.findIndex(color => color === cartVariants.find(item => item.id === product.id)?.color)]} alt={product?.model} /> */}
                            {/* <img src={product.colors.find(color => Object.keys(color)[0] === cartVariants.color)} alt="" /> */}
                            {/* <img src={product.colors.find(color => Object.keys(color)[0] === cartVariants.color)[cartVariants.color]} alt="" /> */}
                            {console.log(product.colors.find(color => Object.keys(color)[0] === cartVariants.color)[cartVariants.color])}
                        </Link>
                    </div>

                    <div className="cart-item__desc">
                        <div className='cart-item_flex'>
                            <p className='fs-250'>{product?.model}</p>
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

                        <div className='cart-item_flex'>
                            <p className='fw-semi-bold fs-300'>${product?.price}</p>
                            <div className="quantity-buttons">
                                <button onClick={() => quantityDecrease(product?.id)}>-</button>
                                <span>{cartVariants.find(item => item.id === product?.id)?.quantity}</span>
                                <button onClick={() => quantityIncrement(product?.id)}>+</button>
                            </div>
                        </div>

                    </div>
                </div>)}

            </div>
        </>
    )
}