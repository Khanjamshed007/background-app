import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
    return (
        <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 py-2 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Steps to remove background <br /> image in seconds</h1>
            <div className='flex items-center gap-4 mt-16 xl:mt-24 justify-center flex-wrap md:flex-nowrap'>
                <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-2xl hover:scale-105 transition-all duration-500'>
                    <img className="max-w-9" src={assets.upload_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Upload Image</p>
                        <p className='text-sm text-neutral-500'>Easily remove backgrounds from your images with our powerful background removal tool. Just upload your image, and let our app do the rest!</p>
                    </div>
                </div>
                <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-2xl hover:scale-105 transition-all duration-500'>
                    <img className="max-w-9" src={assets.remove_bg_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Remove Background</p>
                        <p className='text-sm text-neutral-500'>Easily remove the background from your images using our powerful tool. Upload your image and watch the background disappear in seconds!</p>
                    </div>
                </div>
                <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-2xl hover:scale-105 transition-all duration-500'>
                    <img className="max-w-9" src={assets.download_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Download Image</p>
                        <p className='text-sm text-neutral-500'>Once your image is processed, download the high-quality, background-free version with just one click. Its that simple!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Steps