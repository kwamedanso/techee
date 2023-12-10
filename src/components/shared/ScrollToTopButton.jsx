import React, { useState, useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa6";
import scrollToTop from 'utils/SCROLLT0TOP';
import "components/shared/styles/scrollToTopButton.css"

export default function ScrollToTopButton() {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setIsActive(true)
            } else {
                setIsActive(false)
            }
        })
    }, [])
    return (
        <>
            {isActive && <button onClick={scrollToTop} className='scroll-to-top-button'><FaArrowUp /></button>}
        </>
    )
}
