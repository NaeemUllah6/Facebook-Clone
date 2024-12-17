import React, { useEffect, useState } from 'react'
import userProfile from '../../assets/images/USER-PROFILE.jpg'
import userPost from '../../assets/images/story.jpg'
import images from '../../assets/index'
function UserPost() {
    const posts = [
        {
            id: 1,
            UserName: 'NaeemUllah',
            postedTime: '2 hours ago',
            Likes: 0,
            No_of_comments: '50',
            comment: 'Comments',
            no_of_shares: '100',
            userPost: userPost,
            Like_icon: 'Like',
            comment_icon: 'Comments',
            Share_icon: 'shares',
            isLiked: false
        },
        {
            id: 2,
            UserName: 'NaeemUllah',
            postedTime: '2 hours ago',
            Likes: 0,
            No_of_comments: '50',
            comment: 'Comments',
            no_of_shares: '100',
            userPost: userPost,
            Like_icon: 'Like',
            comment_icon: 'Comments',
            Share_icon: 'shares',
            isLiked: false
        },

        {
            id: 3,
            UserName: 'NaeemUllah',
            postedTime: '2 hours ago',
            Likes: 0,
            No_of_comments: '50',
            comment: 'Comments',
            no_of_shares: '100',
            userPost: userPost,
            Like_icon: 'Like',
            comment_icon: 'Comments',
            Share_icon: 'shares',
            isLiked: false
        },

        {
            id: 4,
            UserName: 'NaeemUllah',
            postedTime: '2 hours ago',
            Likes: 0,
            No_of_comments: '50',
            comment: 'Comments',
            no_of_shares: '100',
            userPost: userPost,
            Like_icon: 'Like',
            comment_icon: 'Comments',
            Share_icon: 'shares',
            isLiked: false
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
            Share_icon: 'shares',
            isLiked: false
        },
    ]
    // ------------------handle States---------------------
    let [hidden, setHidden] = useState(posts)

    useEffect(() => {
        console.log(hidden)
    }, [hidden])

    let disappear = (id) => {
        let newPosts = hidden.filter((post) => post.id !== id);
        setHidden(newPosts);
        alert('Post disappear, You will see a few post from')
    };
    //    -------------------------Like button-------------------------
    let [likes, setLikes] = useState(0)
    let likeButton = () => {
        setLikes(likes + 1)
    }

    return (
        <>
            <div className='grid grid-cols-1 gap-y-6 bg-[#f0f0f0]'>
                {
                    hidden.map((post, index) => (

                        <div>
                            <div className='flex items-center justify-between p-4 bg-white rounded-lg'>
                                <div className='flex items-center gap-2'>
                                    <img className='rounded-full w-full h-auto' src={userProfile} alt="Profile" />
                                    <div>
                                        <h2>{post.UserName}</h2>
                                        <span>{post.postedTime}</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <i class=" fa-solid fa-ellipsis text-[#65686c] text-2xl"></i>
                                    <button onClick={() => disappear(post.id)}><i className='fa fa-xmark text-[#65686c] text-2xl'></i></button>
                                </div>
                            </div>

                            <div className=' py-0'>
                                <img src={userPost} alt="" />
                            </div>
                            <div className='flex items-center justify-between bg-white w-full px-3 py-2'>
                                <div className='flex gap-1 px-1'>
                                    <div className='border rounded-full px-1 flex items-center justify-center bg-blue-700'><i class={` fa-solid fa-thumbs-up text-white text-[12px] `}></i></div>
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
                                    <button onClick={likeButton}><i class={`fa-regular fa-heart ${likes ? ' text-red-700' : ''}`}></i></button>
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
