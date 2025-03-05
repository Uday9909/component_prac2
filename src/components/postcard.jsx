import React from 'react';
import LikeButton from './likebutton'; // Import the LikeButton component

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80 m-4">
      <div className="flex items-center mb-4">
        <img src={post.profilePic} alt={post.username} className="w-12 h-12 rounded-full mr-4" />
        <span className="font-semibold">{post.username}</span>
      </div>
      <div className="mb-4">
        <p>{post.content}</p>
      </div>
      <div className="flex justify-between items-center">
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;
