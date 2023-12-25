import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"
import navlinks from 'const/navlinks'
import FavoriteButton from './FavoriteButton'
import "components/shared/header/styles/header.css"
import CartButton from './CartButton'

export default function Header() {
    const [hamburger, setHamburger] = useState(false)

    return (
        <header className='header'>
            <div className="header-wrapper section-margin" >
                <div className="logo" onClick={() => setHamburger(false)}>
                    <NavLink to={"/"}>techee.</NavLink>
                </div>

                <nav className={`nav-links-wrapper ${hamburger ? "active" : null}`}>
                    <ul className='nav-links'>
                        {navlinks.map((navLink) => (
                            <li key={navLink.id} className='nav-link-wrapper' onClick={() => setHamburger(!hamburger)}>
                                <NavLink to={navLink.path} className={"nav-link"}>{navLink.title}</NavLink>
                            </li>))}

                    </ul>
                </nav>

                <div className="favs-cart-ham">
                    <FavoriteButton />
                    {/* <NavLink to={"/cart"} className="cart-button">
                        <AiOutlineShoppingCart className='header-icons' />
                        <div className='notification-badge'>
                            <span>{7}</span>
                        </div>
                    </NavLink> */}
                    <CartButton />
                    <div className={`hamburger ${hamburger ? "active" : null}`} onClick={() => setHamburger(!hamburger)}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}
