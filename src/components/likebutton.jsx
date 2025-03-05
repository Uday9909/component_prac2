import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleLikeToggle}
      className={`px-4 py-2 rounded-full ${liked ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition-colors`}
    >
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
