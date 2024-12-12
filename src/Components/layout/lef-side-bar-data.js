import Images from '../../assets/index.js'
import Friends from '../../assets/images/friends.png'
import Dashboard from '../../assets/images/dashboard.png'
import userProfile from '../../assets/images/story.jpg'
export  const Side_bar = [
    {
        id: 1,
        icon: userProfile, className:'rounded-full',
        text: 'Muhammad NaeemUllah',
    },
    {
        id: 2,
        icon: Friends,
        text: 'Friends',
        path: '/friends'
    },
    {
        id: 3,
        icon: Dashboard,
        text: 'Professional Dashboard',
    },
    {
        id: 4,
        icon: Images.Feed,
        text: 'Feeds',
    },
    {
        id: 5,
        icon: Images.Groups,
        text: 'Groups',
    },
    {
        id: 6,
        icon: Images.Market,
        text: 'Marketplace',
    },
    {
        id: 7,
        icon: Images.Video,
        text: 'Video',
    },
    {
        id: 8,
        icon: Images.Memories,
        text: 'Memories',
    },
    {
        id: 9,
        icon: Images.Chevron,
        text: 'See More',
    },
]
