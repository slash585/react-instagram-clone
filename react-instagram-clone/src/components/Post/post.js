import React from 'react'
import { Avatar } from '@material-ui/core'
import './post.css'


function Post({userName,imageUrl,caption}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                className="post__avatar"
                alt="Mehmet Ali Özdemir"          
                src='https://pbs.twimg.com/profile_images/885290179245862912/9o1nzmDE_400x400.jpg'/>
                <h3>{userName}</h3>
            </div>

            {/* HEADER - AVATAR - USERNAME  */}

            <img className="post__image" src={imageUrl} alt=""/>
            {/* IMAGE */}

            <h4 className="post__text">
                <strong>{userName}  </strong> 
                {caption}
            </h4>
            {/* USERNAME + CAPTİON */}
        </div>
    )
}



export default Post
