import React from 'react'
import { Side_bar } from './lef-side-bar-data'
// import Side_bar from '' 
function Right_side_bar() {

    return (
        <div>
            <div className=' flex flex-col gap-2'>
                {Side_bar.map((item, index) => (
                    <React.Fragment key={Side_bar.id}>
                        <div className='flex gap-2 items-center hover:bg-[#e2e5e9]  py-2 px-3 rounded-md transition all duration-200' key={item.id}>
                            <img className={`w-9 h-9 ${item.className || ''}`} src={item.icon} alt="icon" />
                            <p className='font-medium'>{item.text}</p>
                        </div>
                        {index === Side_bar.length - 1 && <hr className="my-4 border-t border-gray-300" />}
                    </React.Fragment>
                ))}
            </div>

        </div>
    )
}

export default Right_side_bar
