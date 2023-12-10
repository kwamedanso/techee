import React from 'react'
import navlinks from 'const/navlinks'
import { NavLink } from 'react-router-dom'

export default function NavLinks() {
    return (
        <nav className='nav-links-wrapper'>
            <ul className='nav-links'>
                {navlinks.map((navLink) => (
                    <li key={navLink.id} className='nav-link-wrapper'>
                        <NavLink to={navLink.path} className={"nav-link"}>{navLink.title}</NavLink>
                    </li>))}

            </ul>
        </nav>
    )
}
