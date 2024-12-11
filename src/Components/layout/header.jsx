import React, { useState } from 'react'
import facebookLogo from '../../images/communication_15047435.png'
import { Link } from 'react-router-dom';
import userProfile from '../../images/USER-PROFILE.jpg'
function Header() {
    const [ , setNavbar] = useState (false)
    const color_bar = () => {
        setNavbar(true)
    }
    return (
        <nav className={`fixed w-full top-0 z-50 ${color_bar ? 'bg-black' : 'bg-white'}`}>
            <div className='flex items-center justify-between p-3 bg-white'>
                <div className='flex gap-3 items-center'>
                    <img width='40px' height='40px' src={facebookLogo} alt="" />
                    <div className='relative '>
                        <i class="block lg:hidden px-[12px] py-[10px] bg-[#e2e5e9] rounded-full fa-solid fa-magnifying-glass text-[#65686c] text-[20px]"></i>
                        <input className='hidden lg:block focus:border-0 ps-10 focus:outline-none actvie:border-0 rounded-3xl h-[40px] bg-[#f0f0f0] placeholder-[#65686c]' type="text" placeholder='Search Facebook' />
                        <div className='hidden lg:block absolute top-[9px] left-4'>
                            <i className='fa-solid fa-magnifying-glass text-[#65686c]'></i>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between lg:min-w-[500px] mx-auto  gap-10'>
                    {/* <Link to=''></Link>
                    <Link to=''></Link>
                    <Link to=''></Link>
                    <Link to=''></Link> */}
                    <Link to='/'> <i class=" hidden md:block fa-solid fa-house text-[20px] text-[#0866ff] border-[#0866ff] pb-2 border-b-2"></i></Link>
                    <Link to='/user'><i class=" hidden md:block fa-solid text-[#65686c] fa-user text-[20px]"></i></Link>
                    <Link to='/videos'><i class=" hidden md:block fa-brands text-[#65686c] fa-youtube text-[20px]"></i></Link>
                    <Link to='games'> <i class=" hidden md:block fa-solid text-[#65686c] fa-gamepad text-[20px]"></i></Link>
                    <img src='' alt="" />
                </div>
                <div className='flex gap-3'>
                    <i class="hidden sm:block px-[13px] pt-[12px] bg-[#e2e5e9] rounded-full fa-solid fa-list-ul text-[#65686c] text-[20px] "></i>
                    <i class="px-[14px]  py-[14px] bg-[#e2e5e9] rounded-full fa-brands text-[#65686c] fa-facebook-messenger"></i>
                    <i class="px-[14px] pt-[12px] hidden sm:block bg-[#e2e5e9] rounded-full fa-solid fa-bell text-[#65686c] text-[20px]"></i>
                    <img width='42px' height='40px' src={userProfile} className="rounded-full w-full h-auto" alt='user-profile' />
                </div>
            </div>
        </nav>
    )
}

export default Header