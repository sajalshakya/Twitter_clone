import React from 'react';

import './Skeleton-Loader.style.css'

const SkeletonLoader: React.FC = () => {

    return (
      <>  
        <div className="wrapper">
            <div className="skeleton-container">
                <div className="skeleton-avatar">
                </div>
                <div className="skeleton-post">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-body"></div> 
                </div>
            </div> 
        </div> 
      </>
    )
  }
  
export default SkeletonLoader