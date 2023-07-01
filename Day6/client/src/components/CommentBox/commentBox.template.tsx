import React, {useState} from "react";
import {useParams} from 'react-router-dom'
import { useMutation } from 'react-query';
import {Avatar, Button} from '@mui/material';

import SkeletonLoader from "../Skeleton-Loader/Skeleton-Loader.template";

import './commentBox.style.css'
import { TComment } from "twitter/type";

const createComment =  async(newComment: TComment,id:string) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment)
    };
    
    const res = await fetch(`http://localhost:8000/api/posts/${id}/comments`, requestOptions)
    if(!res.ok) {
        throw new Error('An Error Occured')
    }
    return res.json
}


const CommentBox : React.FC = () => {
    const { id } = useParams()
    const [body, setBody] = useState('');
    const {mutate, isLoading, error} = useMutation({mutationFn: ([comment,id]:[TComment, string]) => createComment(comment,id)});
    const handleSubmit = async (event :React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const comment:TComment = { body, id:id?Number(id) : 0  }
        if(id)
        mutate([comment,id]);
      };
    
      if (isLoading) {
        return <SkeletonLoader/>
      }
    
      if (error) {
        return <p>Error: {(error as Error).message}</p>;
      }
    return(
        <>
            <div className="commentBox">
                <form action="" className="commentForm" onSubmit={handleSubmit}>
                    <div className="commentBoxInput">
                        <Avatar sx={{ width: 50, height: 50 }} alt="Redstark" src="https://pbs.twimg.com/profile_images/1426069073771700224/XAVq9DHv_400x400.jpg" />
                        
                        <input className="commentInpt" placeholder="Tweet your reply" type="text" onChange={e=>setBody(e.target.value)} />
                        <Button type="submit" className="commentBtn">Reply</Button>
                    </div>
                </form> 
            </div>
        </>
    )
}

export default CommentBox;