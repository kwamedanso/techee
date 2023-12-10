import React from 'react'
import "components/home/styles/hero.css"
import background from "assets/allProducts/3.png"
import { useNavigate } from 'react-router-dom'


export default function Hero() {
    const navigate = useNavigate();
    return (
        <section id='hero'>
            <div className='hero-section'>
                <div className="hero-content section-title">
                    <h1 className='fs-800'>Find everything you need with ease.</h1>
                    <p className='margin-block-100'>Welcome to the ultimate tech destination! Explore our vast collection of top-notch phones,laptops, and more. Find the perfect gadget to elevate your digital experience. Shop now and stay ahead in the tech game!</p>

                    <div className="hero-button-wrapper">
                        <button onClick={() => navigate("/products")} data-type="bg-blue" className='button'>Shop Now</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={background} alt="hero background" />
                </div>
            </div>

        </section>
    )
}
