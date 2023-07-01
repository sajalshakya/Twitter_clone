import { useMutation } from 'react-query';
import { Avatar } from '@mui/material';
import { TPost } from 'twitter/type';
import { useState } from 'react';
import { useParams } from 'react-router-dom';





const UpdatePost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  async function updatePost(data: TPost) {
    const response = await fetch(`http://localhost:8000/api/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to update data');
    }

    return response.json();
  }

  const mutation = useMutation(updatePost);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedPost: TPost = {
      title,
      body,
      id: Number(id),
    };
    mutation.mutate(updatedPost);
  };


  return (
    <>
      <div className="postBox">
        <form action="" className="postForm" onSubmit={handleSubmit}>
          <div className="postBoxInput">
            <Avatar
              sx={{ width: 50, height: 50 }}
              alt="Redstark"
              src="https://pbs.twimg.com/profile_images/1426069073771700224/XAVq9DHv_400x400.jpg"
            />
            <div className="postInput">
              <input
                className="postTitle"
                placeholder="Title"
                type="text"
                name="title"
                onChange={e=>setTitle(e.target.value)} 
                value={title}
              />
              <input
                className="postBody"
                placeholder="What's happening?"
                type="text"
                name="body"
                onChange={e=>setBody(e.target.value)} 
                value={body}
              />
            </div>
          </div>
          <button className="postBtn" type='submit'>Update</button>
        </form>
      </div>
    </>
  );
};

export default UpdatePost;