import React, { useState } from 'react';

import { useTheme } from '../../../context/ThemeProvider_new.tsx';
import DeleteCommentButton from './DeleteButton/DeleteCommentButton.template.tsx';

import './CommentDropDown.style.css'


const CommentDropdown = () => {
  
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
          <li>Edit</li>
          <li><DeleteCommentButton/></li>
        </ul>
      )}
    </div>
  );
};

export default CommentDropdown;