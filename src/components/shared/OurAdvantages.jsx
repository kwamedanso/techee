import React from 'react'
import benefits from 'const/benefits';

export default function OurAdvantages() {
    return (
        <div className="benefits text-align">
            {benefits.map((benefit) => (
                <div key={benefit.id} className='benefit-item'>
                    <div className="icon">{benefit.icon}</div>
                    <p className='fs-300 fw-semi-bold'>{benefit.title}</p>
                    <p className='fs-200 op-100'>{benefit.desc}</p>
                </div>))}
        </div>
    )
}
