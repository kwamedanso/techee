import React, { useState } from 'react'
import { BsChevronDown } from "react-icons/bs"
import faqs from 'const/faq'
import SectionTitle from './SectionTitle'
import "components/shared/styles/faq.css"

export default function Faq() {
    const [currentFaq, setCurrentFaq] = useState(1)

    function handleFaq(id) {
        if (id === currentFaq) {
            setCurrentFaq(0)
        } else {
            setCurrentFaq(id)
        }
    }

    return (
        <>
            <section className='padding-block-600'>
                <SectionTitle
                    mini="FAQ"
                    title='Frequently Asked Questions'
                    desc="Find answers to common questions about our products, shipping, returns, and more in our FAQ section."
                />

                <div className="faq-wrapper section-margin">
                    {faqs.map(faq => <div key={faq.id} className='faq-item'>
                        <div
                            className={`faq-question ${faq.id === currentFaq ? "active" : null}`}
                            onClick={() => handleFaq(faq.id)}>
                            <p>{faq.question}</p>
                            <BsChevronDown />
                        </div>
                        <div className={`faq-answer ${faq.id === currentFaq ? "active" : null}`}><p>{faq.answer}</p></div>
                    </div>)}
                </div>
            </section>
        </>
    )
}
