import React from 'react';

import {Avatar} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useTheme } from '../../context/ThemeProvider_new';
import {TPost} from "twitter/type";
import PostDropdown from '../DropDown/Post/PostDropDown.template';

import './SinglePost.style.css'

type Props = {post : TPost}



const SinglePost: React.FC<Props> = (props) => {
    
    const {darkMode} = useTheme();
    return (
        <>
            <div className="wrapper">
                <div className="Container">
                    <Avatar sx={{ width: 50, height: 50 }} alt="Redstark" src="https://pbs.twimg.com/profile_images/1426069073771700224/XAVq9DHv_400x400.jpg" />
                    <div className="postContent">
                        <div className="post">
                            <h3 className={darkMode ? 'postUser' : 'postUser-light'}>{props.post.title}</h3>
                            <p className={darkMode ? 'postBodys' : 'postBody-light'}>{props.post.body}</p>
                        </div>
                        <div className="post-action">
                            <PostDropdown/>
                        </div>
                    </div>
                    
                </div>
                <div className={darkMode ? 'postInfo' : 'postInfo-light'}>
                    <div className="infoComment">
                        <p><b>100</b> Comments</p>
                    </div>
                    <div className="infoLike">
                        <p><b>100</b> Likes</p>
                    </div>
                </div>
                <div className="postAction">
                    <div className="postComment">
                        <ChatBubbleOutlineIcon/>
                    </div>
                    <div className="postLike">
                        <FavoriteBorderIcon/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePost