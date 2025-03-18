import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post, onLikeToggle }) => {
  return (
    <div className="post-card border rounded-lg p-4 m-2 bg-white shadow">
      <img src={post.profileImage} alt={`${post.username}'s profile`} className="w-12 h-12 rounded-full" />
      <h3 className="font-bold">{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton isLiked={post.isLiked} onToggle={onLikeToggle} />
    </div>
  );
};

export default PostCard;
