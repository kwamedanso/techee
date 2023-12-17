import React from 'react'

export default function ShowImage({ currentImage, model, colors, handleImageSetting, images }) {

    return (
        <div className='details-content-image-section'>
            <div className="full-image">
                <img src={currentImage} alt={model} />
            </div>
            {colors?.length > 1 && (
                <div
                    style={{ gridTemplateColumns: `repeat(${colors?.length}, 1fr)` }} className="grid-images">
                    {images?.map((image, index) => (
                        <img key={image}
                            src={image}
                            alt={model}
                            onClick={() => handleImageSetting(image)}
                            title={`${model} ${colors[index]}`}
                        />
                    ))}
                </div>)}
        </div>
    )
}
