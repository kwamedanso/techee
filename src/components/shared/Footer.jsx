import React from 'react';
import footerLinks from 'const/footerLinks';
import { Link } from 'react-router-dom';
import "components/shared/styles/footer.css"


export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-wrapper section-margin">
                    {footerLinks.map(item => (
                        <div key={item.id} className='footer-menu'>
                            <p className='fs-300 fw-semi-bold'>{item.title}</p>

                            {item.description && <p className='fs-200 padding-block-300'>{item.description}</p>}

                            <div className="footer-social-icons">
                                {item.socialIcons?.map((icon, index) => <span key={index}>{icon}</span>)}
                            </div>

                            <ul>
                                {item.links && item.links.map(link => <Link key={link.id} to={link.path} className='footer-link op-100 fs-200 margin-block-100' target={item.title === "Socials" ? "_blank" : undefined}>{link.label}</Link>)}
                            </ul>
                        </div>
                    ))}
                </div>
                <hr className='section-margin' />
                <div className="copyright text-align">
                    <span className='fs-200 op-200'>Copyright &copy; 2005 - {new Date().getFullYear()} </span>
                    <span className='fs-200'>The techee group</span>
                </div>
            </footer>
        </>
    )
}
