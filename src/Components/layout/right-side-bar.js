import Images from '../../assets/index.js'
import Friends from '../../assets/images/friends.png'
import Dashboard from '../../assets/images/dashboard.png'
import userProfile from '../../assets/images/467398309_1048881053657276_2908647129857456136_n.jpg'
export  const Side_bar = [
    {
        id: 1,
        icon: userProfile, className:'rounded-full',
        text: 'Allah Ditta',
    },
    {
        id: 2,
        icon: Friends,
        text: 'Mustaqeem',
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
        text: 'Abdul Rehman',
    },
    {
        id: 5,
        icon: Images.Groups,
        text: 'Ali Raza Hashmi',
    },
    {
        id: 6,
        icon: Images.Market,
        text: 'Nazar Fareed Chakoka',
    },
    {
        id: 7,
        icon: Images.Video,
        text: 'Ali Khan',
    },
    {
        id: 8,
        icon: Images.Memories,
        text: 'Daniel John',
    },
    {
        id: 9,
        icon: Images.Chevron,
        text: 'See More',
    },
    
]
