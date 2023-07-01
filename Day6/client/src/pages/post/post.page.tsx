import React, {useEffect, useState} from 'react';
import { useQuery } from 'react-query';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate, useParams} from 'react-router-dom'

import { useTheme } from '../../context/ThemeProvider_new';
import Sidebar from '../../components/Sidebar/sidebar.template';
import SinglePost from '../../components/Post/SinglePost.template';
import Trends from '../../components/Trends/trends.template';
import SkeletonLoader from '../../components/Skeleton-Loader/Skeleton-Loader.template';
import CommentsContainer from '../../components/CommentContainer/CommentContainer.template';

import "./Post.style.css"

const Post: React.FC = () => {
    const {darkMode} = useTheme();
    
    const { id } = useParams()
    console.log(id);
    
    const navigate = useNavigate();
    const{data,isLoading,error} = useQuery('post', async() => {
        const response = await fetch(`http://localhost:8000/api/posts/${id}`);
        const data = await response.json();
        console.log(data);
        
        return data;
    })
    if(isLoading){
        return <SkeletonLoader/>
    }
    if (error) {
        return <p>Error: {(error as Error).message}</p>;
    }
    return (
    <>  
      <div className="container">
      <Sidebar/>
      <div className="postContainer">
          <div className="postHeader">
              <ArrowBackIcon className={darkMode ? 'arrow' : 'arrow-light'} onClick={()=>navigate(-1)}/>
              <h2 className={darkMode ? 'posts' : 'posts-light'}>Post</h2>
          </div>
          <SinglePost post = {data.data}/>
          <CommentsContainer/>
      </div>
      <Trends/>
      </div>
    </>
    )
}

export default Post;