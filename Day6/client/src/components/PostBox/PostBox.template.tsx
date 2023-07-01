import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";

import { TApiResponse, TPost } from "twitter/type";
import SkeletonLoader from "../Skeleton-Loader/Skeleton-Loader.template";

import "./PostBox.style.css";


const createPost = async (newPost : TPost, id: string,title:string, body:string) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
    };
    
    const res = await fetch(`http://localhost:8000/api/posts`, requestOptions)
    if(!res.ok) {
        throw new Error('An Error Occured')
    }
    return res.json
};

const PostBox = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const {mutate, isLoading, error} = useMutation({mutationFn: ([post,id,title,body]:[TPost,string, string,string]) => createPost(post,id,title,body)});
  const handleSubmit = async (event :React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const post:TPost = {id:id?Number(id) : 0,title,body }
    mutate([post,id,title,body]);
  };

  if (isLoading) {
    return <SkeletonLoader/>
  }

  if (error) {
    return <p>Error: {(error as Error).message}</p>;
  }
    return(
        <>
            <div className="postBox">
                <form action="" className="postForm" onSubmit={handleSubmit}>
                    <div className="postBoxInput">
                        <Avatar sx={{ width: 50, height: 50 }} alt="Redstark" src="https://pbs.twimg.com/profile_images/1426069073771700224/XAVq9DHv_400x400.jpg" />
                        <div className="postInput">
                            <input className="postTitle" onChange={e=>setTitle(e.target.value)} placeholder="Title" type="text" name="title"/>
                            <input className="postBody" onChange={e=>setBody(e.target.value)} placeholder="What's happening?" type="text" name="body"/>
                        </div>
                    </div>
                    <Button className="postBtn" type="submit">Post</Button>
                </form> 
            </div>
        </>
    )
}

export default PostBox;