import React, { useContext } from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";


import { NavLink } from 'react-router-dom'
import Context from 'context';

export default function CartButton() {
    let value = useContext(Context);
    const { state: { cartVariants } } = value;


    return (
        <>
            <NavLink to={"/cart"} className="cart-button">
                <MdOutlineShoppingBag className='header-icons' />
                {cartVariants.length > 0 && <div className='notification-badge'>
                    <span>{cartVariants.length}</span>
                </div>}
            </NavLink>
        </>
    )
}
