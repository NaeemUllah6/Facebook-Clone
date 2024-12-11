import React from 'react'
import userProfile from '../../images/USER-PROFILE.jpg'
import Gallery from '../../images/gallery.png'
import Reel from '../../images/reel.png'
import Swipper from './swipper'
import Post from './user-post'

function Home() {
    return (
       <>
        <div className='mt-[-15px] md:mt-4 bg-white p-4  mx-auto rounded-xl shadow shadow-#0000001a z-0'>
            <div className='flex gap-3 items-center '>
                <img className='rounded-full ' width='40px' height='40px' src={userProfile} alt="" />
                <div className='relative w-full'>
                    <input className='w-full focus:border-0 ps-4 focus:outline-none actvie:border-0 rounded-3xl h-[40px] bg-[#f0f0f0] placeholder-[#65686c]' type="text" placeholder="What's on your Mind" />
                </div>
                <hr className='pt-2 pb-3' />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 mt-4'>
                <button className='hover:bg-[#fff7f6] py-2 flex gap-2 items-center justify-center rounded-md'>
                    <i class="text-2xl text-red-500 fa-solid fa-video"></i>
                    <p>Live Video</p>
                </button>
                <button className='hover:bg-[#fff7f6] py-2 flex gap-2 items-center justify-center rounded-md'>
                   <img loading='lazy' width='24px' height="24px" src={Gallery} alt="gallwry" />
                    <p>Photo/Video</p>
                </button>
                <button className='hover:bg-[#fff7f6] py-2 flex gap-2 items-center justify-center rounded-md'>
                <img width='34px' height="34px" src={Reel} alt="gallwry" />
                    <p>Live Video</p>
                </button>
            </div>

        </div>
        <div className='mt-4   mx-auto '>
            <Swipper/>
        </div>
        <div className=' mx-auto mt-4 rounded-lg bg-white'>
            <Post/>
        </div>
       </>
    )
}

export default Home
