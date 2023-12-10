import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function Expand({ title, children }) {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className='expand' >
            <div onClick={() => setIsActive(!isActive)}
                className={`expand-title fs-250 fw-semi-bold ${isActive ? "active" : ""}`}>
                <p>{title}</p>
                <div className={`collapse`}>
                    <IoIosArrowDown />
                </div>
            </div>
            {isActive && <div className="expand-body">{children}</div>}
        </div>
    )
}
