import React from 'react';

const LikeButton = ({ isLiked, onToggle }) => {
  return (
    <button 
      onClick={onToggle} 
      style={{ color: isLiked ? 'red' : 'gray' }}
      className="like-button"
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
