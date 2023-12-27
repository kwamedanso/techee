import Context from 'context'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddToCart({ id, varianInfo, setVariantInfo }) {
    const [isActive, setIsActive] = useState(false)

    let value = useContext(Context);
    const { state: { cartVariants }, actions: { setCartVariants } } = value;
    const navigate = useNavigate()

    // const elementExist = cart.includes(id)
    let itemExist = cartVariants.some(item => item.id === id)

    function handleCheckout(productId) {
        addToCart(productId);
        navigate(`/checkout`)
    }

    function addToCart(productId) {
        let itemExist = (item) => item.id === productId

        if (!cartVariants.some(itemExist)) {
            if (varianInfo.storage || varianInfo.color) {
                setCartVariants(prev => [...prev, { id: productId, color: varianInfo.color, storage: varianInfo.storage, quantity: 1 }])
                setIsActive(false)
            } else {
                setIsActive(true)
            }
        }
    }


    function removeFromCart() {
        setCartVariants(prev => {
            let newCartVariant = prev.filter(item => item.id !== id)
            return [...newCartVariant]
        })

        setVariantInfo({ color: "", storage: "" })
    }

    return (
        <>
            {isActive && <div className='variant-not-selected'>
                <p>Please choose a color or storage option</p>
            </div>}
            <div className='padding-block-100 cart-checkout'>
                <button className='button add-cart' data-type="white" onClick={() => handleCheckout(id, "checkout")}>
                    Checkout Now
                </button>
                {itemExist ? <button className='button' data-type="bg-red" onClick={removeFromCart}>Remove from cart</button> : <button className='button' data-type="bg-blue" onClick={() => addToCart(id)}>
                    Add to Cart
                </button>}
            </div><hr />
        </>
    )
}
