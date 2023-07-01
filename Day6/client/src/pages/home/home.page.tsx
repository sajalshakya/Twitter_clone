import React from 'react';
import { useQuery } from 'react-query'; 

import { useTheme } from '../../context/ThemeProvider_new';
import Sidebar from '../../components/Sidebar/sidebar.template';
import Trends from '../../components/Trends/trends.template';
import PostBox from '../../components/PostBox/PostBox.template';
import Posts from '../../components/Posts/Posts.template';
import SkeletonLoader from '../../components/Skeleton-Loader/Skeleton-Loader.template';

import "./Home.style.css"
import { TPost } from 'twitter/type';

const Home: React.FC = () => {
  const {darkMode} = useTheme();

    const{data,isLoading,error} = useQuery('posts', async() => {
        const response = await fetch(`http://localhost:8000/api/posts`);
        const data = await response.json();
        console.log(data.data);
        
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
          <div className="feedContainer">
            <div className="feed">
              <h2 className={darkMode ? 'home' : 'home-light'}>Home</h2>
              <PostBox/>
              {data.data.map((posts: TPost) => <Posts key={posts.id}  posts = {posts}/>)}
            </div>
          </div>
          <Trends/>
        </div>
    </>
  )
}

export default Home;