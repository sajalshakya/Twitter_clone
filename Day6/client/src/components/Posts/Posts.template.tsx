import React, {PropsWithChildren} from "react";
import {Avatar} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";
import { TPost } from "twitter/type";
import { useTheme } from "../../context/ThemeProvider_new";

import './Posts.style.css'

type Props = {posts : TPost}

const Posts: React.FC<Props> = (props) => {
    const {darkMode} = useTheme();
    return (
        <>
            <Link to={`/posts/${props.posts.id}`} style={{textDecoration :"none"}}>
                <div className="postsContainer">
                    <Avatar sx={{ width: 50, height: 50 }} alt="Redstark" src="https://pbs.twimg.com/profile_images/1426069073771700224/XAVq9DHv_400x400.jpg" />
                    <div className="posts">
                        <h3 className={darkMode ? 'postsUser' : 'postsUser-light'}>{props.posts.title}</h3>
                        <p className={darkMode ? 'postsBody' : 'postsBody-light'}>{props.posts.body}</p>
                        <div className="postsAction">
                            <div className="postsComment">
                                <ChatBubbleOutlineIcon/>
                                <p className="count">100</p>
                            </div>
                            <div className="postsLike">
                                <FavoriteBorderIcon/>
                                <p className="count">100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Posts