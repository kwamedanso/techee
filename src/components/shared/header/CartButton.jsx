import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import Context from 'context';

export default function CartButton() {
    let value = useContext(Context);
    const { state: { cartVariants } } = value;


    return (
        <>
            <NavLink to={"/cart"} className="cart-button">
                <AiOutlineShoppingCart className='header-icons' />
                {cartVariants.length > 0 && <div className='notification-badge'>
                    <span>{cartVariants.length}</span>
                </div>}
            </NavLink>
        </>
    )
}
