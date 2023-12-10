import React from 'react'

export default function ShowImage({ currentImage, model, colors, handleImageSetting }) {

    return (
        <div className='details-content-image-section'>
            <div className="full-image">
                <img src={currentImage} alt={model} />
            </div>
            {colors.length > 1 && (
                <div
                    style={{ gridTemplateColumns: `repeat(${colors.length}, 1fr)` }} className="grid-images">
                    {colors.map(image => (
                        <img key={Object.values(image)[0]}
                            src={Object.values(image)[0]}
                            alt={model}
                            onClick={() => handleImageSetting(Object.values(image)[0])}
                            title={`${model} ${Object.keys(image)}`}
                        />
                    ))}
                </div>)}
        </div>
    )
}
