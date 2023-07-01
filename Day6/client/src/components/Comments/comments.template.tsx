import React from 'react';
import {Avatar} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { TComment } from 'twitter/type';
import CommentDropdown from '../DropDown/Comment/CommentDropDown.template';
import { useTheme } from '../../context/ThemeProvider_new';

import './Comments.style.css'
type Props = {comments : TComment}

const Comments: React.FC<Props>= (props) => {

    const {darkMode} = useTheme();
    return (
        <>
            <div className="commentsContainer">
                <Avatar sx={{ width: 50, height: 50 }} alt="Redstark" src="https://pbs.twimg.com/profile_images/1426069073771700224/XAVq9DHv_400x400.jpg" />
                <div className="comments">
                    <div className="commentContent">
                        <p className={darkMode ? 'commentsBody' : 'commentsBody-light'}>{props.comments.body}</p>
                        <div className="post-action">
                            <CommentDropdown/>
                        </div>
                    </div>
                    <div className="commentsAction">
                        <div className="commentsLike">
                            <FavoriteBorderIcon/>
                            <p className="count">100</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comments