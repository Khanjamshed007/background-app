import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
    return (
        <div className='pb-16 mt-32'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 py-2 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>See the magic. Try now</h1>

            <div className='text-center mb-24 mt-11'>
                <input type="file" name="" id="upload2" accept="image/*" hidden />
                <label className='inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white cursor-pointer m-auto hover:scale-105 transition-all duration-700' htmlFor="upload2">
                    <img width={20} src={assets.upload_btn_icon} alt="" />
                    <p className='font-bold text-sm'>Upload your image</p>
                </label>
            </div>
        </div>
    )
}

export default Upload