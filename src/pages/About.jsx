import Faq from 'components/shared/Faq'
import ScrollToTop from 'components/shared/ScrollToTop'
import React from 'react'
import { FaShieldAlt, FaUsers, FaGlobeAmericas, FaAward, FaHeart, FaRocket, FaMobile, FaLaptop, FaHeadphones, FaClock, FaCheckCircle } from 'react-icons/fa';
import "../components/about/styles.css"

export default function About() {
    const stats = [
        { number: '100K+', label: 'Happy Customers', icon: <FaUsers /> },
        { number: '50+', label: 'Tech Brands', icon: <FaAward /> },
        { number: '5+', label: 'Years Experience', icon: <FaClock /> },
        { number: '99%', label: 'Customer Satisfaction', icon: <FaCheckCircle /> }
    ];

    const values = [
        {
            icon: <FaShieldAlt />,
            title: 'Quality Assurance',
            description: 'Every product undergoes rigorous testing to ensure premium quality and reliability for our customers.'
        },
        {
            icon: <FaHeart />,
            title: 'Customer First',
            description: 'We prioritize customer satisfaction with exceptional service, easy returns, and comprehensive support.'
        },
        {
            icon: <FaRocket />,
            title: 'Innovation',
            description: 'We stay ahead of technology trends to bring you the latest and most innovative gadgets.'
        },
        {
            icon: <FaGlobeAmericas />,
            title: 'Global Reach',
            description: 'Serving customers worldwide with fast shipping and localized support in multiple regions.'
        }
    ];

    const categories = [
        { icon: <FaMobile />, name: 'Smartphones', count: '200+' },
        { icon: <FaLaptop />, name: 'Laptops', count: '150+' },
        { icon: <FaHeadphones />, name: 'Headphones', count: '100+' },
        { icon: <FaClock />, name: 'Smart Watches', count: '80+' }
    ];

    return (
        <>
            <ScrollToTop />
            <div className="about-page">
                {/* Header Section */}
                <div className="about-header">
                    <div className="container">
                        <div className="header-content">
                            <h1>About Techee</h1>
                            <p>Your trusted destination for premium tech gadgets and innovative solutions</p>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h2>Bringing Technology Closer to You</h2>
                                <p>
                                    Welcome to Techee, your ultimate destination for cutting-edge technology.
                                    We've been at the forefront of the tech revolution, curating the finest
                                    collection of smartphones, laptops, headphones, and smartwatches from
                                    the world's most trusted brands.
                                </p>
                                <p>
                                    Our mission is simple: to make premium technology accessible to everyone
                                    while providing an exceptional shopping experience that exceeds expectations.
                                </p>
                            </div>
                            <div className="hero-image">
                                <div className="tech-showcase">
                                    <div className="floating-device device-1">📱</div>
                                    <div className="floating-device device-2">💻</div>
                                    <div className="floating-device device-3">🎧</div>
                                    <div className="floating-device device-4">⌚</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section">
                    <div className="container">
                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card">
                                    <div className="stat-icon">{stat.icon}</div>
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="values-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>What Sets Us Apart</h2>
                            <p>Our commitment to excellence drives everything we do</p>
                        </div>
                        <div className="values-grid">
                            {values.map((value, index) => (
                                <div key={index} className="value-card">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Products Categories */}
                <section className="categories-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Our Product Categories</h2>
                            <p>Discover our extensive range of premium tech gadgets</p>
                        </div>
                        <div className="categories-grid">
                            {categories.map((category, index) => (
                                <div key={index} className="category-card">
                                    <div className="category-icon">{category.icon}</div>
                                    <h3>{category.name}</h3>
                                    <span className="product-count">{category.count} Products</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="story-section">
                    <div className="container">
                        <div className="story-content">
                            <div className="story-text">
                                <h2>Our Story</h2>
                                <p>
                                    Founded with a passion for technology and a vision to democratize access
                                    to premium gadgets, Techee began as a small startup with big dreams.
                                    We recognized the gap between cutting-edge technology and everyday consumers.
                                </p>
                                <p>
                                    Today, we've grown into a trusted platform that serves customers globally,
                                    partnering with leading brands like Apple, Samsung, Sony, Dell, and many more.
                                    Our journey is driven by innovation, customer satisfaction, and the belief
                                    that everyone deserves access to the latest technology.
                                </p>
                                <div className="story-highlights">
                                    <div className="highlight">
                                        <FaCheckCircle />
                                        <span>Trusted by 100,000+ customers worldwide</span>
                                    </div>
                                    <div className="highlight">
                                        <FaCheckCircle />
                                        <span>Official partnerships with top tech brands</span>
                                    </div>
                                    <div className="highlight">
                                        <FaCheckCircle />
                                        <span>Award-winning customer service</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Faq />

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Ready to Explore?</h2>
                            <p>Discover our latest collection of premium tech gadgets</p>
                            <button className="cta-button">Shop Now</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
