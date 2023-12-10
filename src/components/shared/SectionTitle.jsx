import React from 'react'

export default function SectionTitle({ mini, title, desc }) {
    return (
        <div className='section-title'>
            <p className='fs-200 fw-bold text-align' data-type='cl-blue'>{mini}</p>
            <h2 className='fs-650'>{title}</h2>
            <p className='fs-200 op-100 margin-block-100'>{desc}</p>
        </div>
    )
}
