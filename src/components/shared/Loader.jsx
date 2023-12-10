import React from 'react'
import "components/shared/styles/loader.css"

export default function Loader() {
    return (
        <div className='loader'>
            <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}
