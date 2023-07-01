import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useTheme } from '../../../context/ThemeProvider_new.tsx';
import DeletePostButton from './DeleteButton/DeletePostButton.template.tsx';

import './PostDropDown.style.css'

const PostDropdown = () => {
  const { id } = useParams() 
  const [isOpen, setIsOpen] = useState(false); 
  const {darkMode} = useTheme();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        <span className={darkMode ? 'dot' : 'dot-light'}></span>
        <span className={darkMode ? 'dot' : 'dot-light'}></span>
        <span className={darkMode ? 'dot' : 'dot-light'}></span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <Link to={`/posts/${id}/update`} style={{textDecoration :"none"}}>
            <li><button className='btn'>Update</button></li>
          </Link>
          <li><DeletePostButton/></li>
        </ul>
      )}
    </div>
  );
};

export default PostDropdown;