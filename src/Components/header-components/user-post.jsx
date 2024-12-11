import React, { useState } from 'react'
import userProfile from '../../images/USER-PROFILE.jpg'
import userPost from '../../images/story.jpg'
function UserPost() {
    const posts = [
        {
            id: 1,
            UserName: 'NaeemUllah',
            postedTime: '2 hours ago',
            Likes:0,
            No_of_comments: '50',
            comment: 'Comments',
            no_of_shares: '100',
            userPost: userPost,
            Like_icon: 'Like',
            comment_icon: 'Comments',
            Share_icon: 'shares'
        },
        {
            id: 2,
            UserName: 'NaeemUllah',
            postedTime: '2 hours ago',
            Likes:0,
            No_of_comments: '50',
            comment: 'Comments',
            no_of_shares: '100',
            userPost: userPost,
            Like_icon: 'Like',
            comment_icon: 'Comments',
            Share_icon: 'shares'
        },

        {
            id: 3,
            UserName: 'NaeemUllah',
            postedTime: '2 hours ago',
            Likes:0,
            No_of_comments: '50',
            comment: 'Comments',
            no_of_shares: '100',
            userPost: userPost,
            Like_icon: 'Like',
            comment_icon: 'Comments',
            Share_icon: 'shares'
        },

        {
            id: 4,
            UserName: 'NaeemUllah',
            postedTime: '2 hours ago',
            Likes:0,
            No_of_comments: '50',
            comment: 'Comments',
            no_of_shares: '100',
            userPost: userPost,
            Like_icon: 'Like',
            comment_icon: 'Comments',
            Share_icon: 'shares'
        },

        {
            id: 5,
            UserName: 'NaeemUllah',
            postedTime: '2 hours ago',
            Likes: 0,
            No_of_comments: '50',
            comment: 'Comments',
            no_of_shares: '100',
            userPost: userPost,
            Like_icon: 'Like',
            comment_icon: 'Comments',
            Share_icon: 'shares'
        },
    ]
    // ------------------handle likes---------------------
    const [likes, setLikes] = useState(posts.map(post => post.Likes));
    const handleLike = (index) => {
        const updatedLikes = [...likes];
        updatedLikes[index] = parseInt(updatedLikes[index]) + 1;
        setLikes(updatedLikes);
    };
    // ------------------disappear the post--------------------
    const [clicked, setClick] = useState(false);
    const disappear = () => {
        setClick(!clicked);
    };
    
   
    


    return (
        <>
            <div className='grid grid-cols-1 gap-y-6 bg-[#f0f0f0]'>
                {
                    posts.map((post, index) => (

                        <div className={`${clicked[index] ? 'hidden' : 'block'}`}>
                            <div className='flex items-center justify-between p-4 bg-white rounded-lg'>
                                <div className='flex items-center gap-2'>
                                    <img className='rounded-full w-full h-auto' src={userProfile} alt="Profile" />
                                    <div>
                                        <h2>{post.UserName}</h2>
                                        <span>{post.postedTime}</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <i class=" fa-solid fa-ellipsis text-[#65686c]"></i>
                                    <button onClick={disappear}><i className='fa fa-xmark text-[#65686c]'></i></button>
                                </div>
                            </div>

                            <div className=' py-0'>
                                <img src={userPost} alt="" />
                            </div>
                            <div className='flex items-center justify-between bg-white w-full px-3 py-2'>
                                <div className='flex gap-1 px-1'>
                                    <div className='border rounded-full px-1 flex items-center justify-center bg-blue-700'><i class=" fa-solid fa-thumbs-up text-white text-[12px]"></i></div>
                                    {/* <div className='flex px-[6px] items-center rounded-full justify-center bg-red-500'><i className='fa fa-heart text-white  text-[12px]'></i></div> */}
                                    <p className='font-medium text-[#65686c]'>{likes}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <p className='font-medium text-[#65686c]'>{post.No_of_comments}</p>
                                    <p className='font-medium text-[#65686c]'>{post.comment}</p>
                                    <p className='font-medium text-[#65686c]'>{post.no_of_shares}</p>
                                    <p className='font-medium text-[#65686c]'>Share</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex items-center justify-between py-3  px-4 bg-white rounded-lg rounded-tr-none rounded-tl-none'>
                                <div className='flex gap-1 items-center'>
                                    <button onClick={() => handleLike(index)}><i class={`fa-regular fa-heart ${clicked[index] ? "text-red-600" : "text-[#65686c]"}`}></i></button>
                                    <p className='font-medium text-[#65686c]'>{post.Like_icon}</p>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <div><i class="text-[#65686c] fa-regular fa-comment"></i></div>
                                    <p className='font-medium text-[#65686c]'>{post.comment_icon}</p>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <div><i class="text-[#65686c] fa-solid fa-share"></i></div>
                                    <p className='font-medium text-[#65686c]'>{post.Share_icon}</p>
                                </div>
                            </div>
                            <hr />
                        </div>


                    ))}
            </div>
        </>
    )
}

export default UserPost
