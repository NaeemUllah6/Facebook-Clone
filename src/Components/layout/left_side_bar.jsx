import React from 'react'
import home from '../../images/story.jpg'

function Left_side_bar() {
    const Side_bar = [
        {
            id: 1,
            icon: home,
            text: 'Muhammad NaeemUllah',
        },
        {
            id: 2,
            icon: home,
            text: 'Muhammad NaeemUllah',
        },
        {
            id: 3,
            icon: home,
            text: 'Muhammad NaeemUllah',
        },
        {
            id: 4,
            icon: home,
            text: 'Muhammad NaeemUllah',
        },
        {
            id: 5,
            icon: home,
            text: 'Muhammad NaeemUllah',
        },
        {
            id: 6,
            icon: home,
            text: 'Muhammad NaeemUllah',
        },
        {
            id: 7,
            icon: home,
            text: 'Muhammad NaeemUllah',
        },
    ]
    return (
        <div>
            <div className=' flex flex-col gap-4'>
                {Side_bar.map((item) => (
                    <div className='flex gap-2 items-center hover:bg-blue-500 hover:text-white py-2 px-3 rounded-md transition all duration-200' key={item.id}>
                        <img className='rounded-full' src={item.icon} alt="icon" style={{ width: '30px', height: '30px' }} />
                        <p className='font-medium'>{item.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Left_side_bar
