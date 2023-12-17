import React, { useState } from 'react'

export default function SelectColor({ colors, handleImageSetting, images }) {
    const [currentColor, setCurrentColor] = useState(colors?.[0])



    function handleColorSetting(color, index) {
        handleImageSetting(images?.at(index))

        // Add current color to selected color in cart details
        setCurrentColor(color)

    }

    return (
        <>
            <div className='padding-block-100'>
                <p className='fw-semi-bold fs-300'>Choose a color</p>
                <div className="colors-grid padding-block-50">

                    {colors?.map((color, index) => (
                        <button key={color}
                            className={`color ${currentColor === color ? "active" : null}`}
                            style={{ backgroundColor: `${color}` }}
                            onClick={() => handleColorSetting(color, index)}
                            title={color}
                        ></button>
                    ))}

                </div>
            </div > <hr />
        </>
    )
}
