import MenuItem from './MenuItem'
import { BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, NOTIFICATIONS_SVG, PROFILE_SVG, TWITTERBLUE_SVG, VERIFIED_ORGANIZATION_SVG, MORE_SVG } from './images'
import './styles.css'

export default function SideMenu () {
    const menu = [
        {
            icon: HOME_SVG,
            name: 'Home'
        },
        {
            icon: EXPLORE_SVG,
            name: 'Explore'
        },
        {
            icon: NOTIFICATIONS_SVG,
            name: 'Notifications'
        },
        {
            icon: MESSAGES_SVG,
            name: 'Messages'
        },
        {
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks'
        },
        {
            icon: TWITTERBLUE_SVG,
            name: 'Twitter Blue'
        },
        {
            icon: VERIFIED_ORGANIZATION_SVG,
            name: 'Verified Organiza...'
        },
        {
            icon: PROFILE_SVG,
            name: 'Profile'
        },
        {
            icon: MORE_SVG,
            name: 'More'
        }
    ]
    return (
        <div className="w-25 mt-3 mx-5">
            <img src={require('./images/twitter.png')} className='logo-icon mb-2'/>
            
            {menu.map((item, index)=> <MenuItem item={item} key={index}/>)}
            
            
        </div>
    )
}