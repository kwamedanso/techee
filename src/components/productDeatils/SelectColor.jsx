import React, { useState, useEffect } from 'react'

export default function SelectColor({ colors, handleImageSetting, images, variantInfo, setVariantInfo }) {
    const [currentColor, setCurrentColor] = useState(Object.keys(colors[0]).at(0))

    useEffect(() => {
        setVariantInfo({ ...variantInfo, color: Object.keys(colors[0]).at(0) })
    }, [])

    function handleColorSetting(color, index) {
        handleImageSetting(Object.values(color).at(0))

        // Add current color to selected color in cart details
        setCurrentColor(Object.keys(color).at(0))
        setVariantInfo({ ...variantInfo, color: Object.keys(color).at(0) })
    }


    return (
        <>
            <div className='padding-block-100'>
                <p className='fw-semi-bold fs-300'>Choose a color</p>
                <div className="colors-grid padding-block-50">

                    {colors?.map((color, index) => (
                        <button key={Object.keys(color).at(0)}
                            className={`color ${currentColor == Object.keys(color) ? "active" : null}`}
                            style={{ backgroundColor: `${Object.keys(color)}` }}
                            onClick={() => handleColorSetting(color, index)}
                            title={Object.keys(color)}
                        ></button>
                    ))}

                </div>
            </div > <hr />
        </>
    )
}
