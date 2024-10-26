import React, { useState } from 'react'
import { assets } from '../assets/assets'
const BgSlider = () => {
    const [sliderBar, setSliderBar] = useState(50);

    const handleSlider = (e) => {
        setSliderBar(e.target.value);
    }
    return (
        <div className='pb-10 md:pb-20 mx-2'>
            <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 py-2 pb-8 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Remove Background With High <br /> Quality and Accuracy</h1>

            <div className='relative w-full max-w-3xl m-auto rounded-xl overflow-hidden'>
                {/* backgroung image */}
                <img src={assets.image_w_bg} style={{ clipPath: `inset(0 ${100.2 - sliderBar}% 0 0) ` }} alt="" />
                {/* without image background */}
                <img className='absolute left-0 top-0 h-full w-full' src={assets.image_wo_bg} style={{ clipPath: `inset(0 0 0 ${sliderBar}%) ` }} alt="" />

                {/* slider change value */}
                <input type="range" className='absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 z-10 slider' min={0} max={100} value={sliderBar} onChange={handleSlider} />
            </div>
        </div>

    )
}

export default BgSlider