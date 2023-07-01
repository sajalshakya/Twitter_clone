import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './DeletePostButton.style.css'

const DeletePostButton = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const deleteResource = async (id:number) => {
    try {
      await fetch(`http://localhost:8000/api/posts/${id}`, {
        method: 'DELETE',
      });
      console.log('Resource deleted successfully');
    } catch (error) {
      console.error('Error deleting resource:', error);
    }
  };
  const handleClick = () => {
    if (id) {
      const numericId = parseInt(id, 10); // Convert id to a number
      deleteResource(numericId);
      navigate(-1)
      alert("Post Deleted")
    }
  };
  return (
    <button className='btn' onClick={handleClick}>Delete</button>
  );
};

export default DeletePostButton;