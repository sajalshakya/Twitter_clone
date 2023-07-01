import React from 'react';
import {useParams} from 'react-router-dom'
import { useQuery } from 'react-query';

import { TComment } from 'twitter/type';
import CommentBox from '../CommentBox/commentBox.template';
import Comments from '../Comments/comments.template';
import SkeletonLoader from '../Skeleton-Loader/Skeleton-Loader.template';

const CommentsContainer: React.FC= () => {
    const { id } = useParams()
    const{data,isLoading,error} = useQuery('comments', async() => {
        const response = await fetch(`http://localhost:8000/api/posts/${id}/comments`);
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
            <CommentBox/>
            {data.data.map((comment: TComment) => <Comments key={comment.id}  comments = {comment}/>)}
        </>
    )
}

export default CommentsContainer