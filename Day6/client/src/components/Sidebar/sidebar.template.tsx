import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

import './sidebar.style.css'

const Sidebar: React.FC = () => {

    return (
      <>  
        <div className="sidebar">
            <Link to = "/"><TwitterIcon fontSize='large' style={{ color: "#1D9BF0"}}/>  </Link>
        </div>
      </>
    )
  }
  
export default Sidebar