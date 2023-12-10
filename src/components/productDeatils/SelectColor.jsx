import React, { useState } from 'react'

export default function SelectColor({ colors, handleImageSetting }) {
    const [currentColor, setCurrentColor] = useState(Object.keys(colors.at(0))[0])



    function handleColorSetting(color) {
        handleImageSetting(Object.values(color)[0])

        // Add current color to selected color in cart details
        setCurrentColor(Object.keys(color)[0])

    }

    return (
        <>
            <div className='padding-block-100'>
                <p className='fw-semi-bold fs-300'>Choose a color</p>
                <div className="colors-grid padding-block-50">

                    {colors.map(color => (
                        <button key={Object.keys(color)}
                            className={`color ${currentColor === Object.keys(color)[0] ? "active" : null}`}
                            style={{ backgroundColor: `${Object.keys(color)}` }}
                            onClick={() => handleColorSetting(color)}
                            title={Object.keys(color)}
                        ></button>
                    ))}

                </div>
            </div><hr />
        </>
    )
}
