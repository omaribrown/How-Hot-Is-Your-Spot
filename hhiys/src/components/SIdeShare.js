import React from 'react'
import facebook from './Styles/Assets/facebook.png'
import twitter from './Styles/Assets/twitter.png'
import gmail from './Styles/Assets/gmail.png'
import './Styles/SideShare.css'

function SideShare() {


    return (
        <div className='sidenav'>
            <a href={facebook}>link</a>
            <a href={twitter}>link</a>
            <a href={gmail}>link</a>
        </div>
    )
}

export default SideShare
