
import React, { useState } from 'react';
import { MessageSquare, Users, Play } from 'lucide-react';

interface Comment {
  id: string;
  username: string;
  text: string;
  timestamp: string;
}

interface PostData {
  id: string;
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  isLiked: boolean;
  comments: Comment[];
  timestamp: string;
  isVideo?: boolean;
}

interface PostProps {
  post: PostData;
  onLike: () => void;
  onComment: (comment: string) => void;
}

const Post: React.FC<PostProps> = ({ post, onLike, onComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [isLikeAnimating, setIsLikeAnimating] = useState(false);

  const handleLike = () => {
    setIsLikeAnimating(true);
    onLike();
    setTimeout(() => setIsLikeAnimating(false), 300);
  };

  const handleDoubleClick = () => {
    if (!post.isLiked) {
      handleLike();
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onComment(newComment.trim());
      setNewComment('');
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={post.avatar}
              alt={post.username}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{post.username}</h3>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <div className="w-1 h-1 bg-current rounded-full"></div>
          <div className="w-1 h-1 bg-current rounded-full mt-1"></div>
          <div className="w-1 h-1 bg-current rounded-full mt-1"></div>
        </button>
      </div>

      {/* Post Image/Video */}
      <div className="relative overflow-hidden">
        <div
          className="cursor-pointer relative"
          onDoubleClick={handleDoubleClick}
        >
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-96 object-cover"
          />
          {post.isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 transition-all duration-200">
                <Play size={32} className="text-white" fill="white" />
              </div>
            </div>
          )}
          {isLikeAnimating && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="animate-ping">
                ❤️
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`transition-all duration-200 hover:scale-110 ${
                post.isLiked ? 'text-red-500' : 'text-gray-700'
              }`}
            >
              {post.isLiked ? '❤️' : '🤍'}
            </button>
            <button 
              onClick={() => setShowComments(!showComments)}
              className="text-gray-700 hover:text-black transition-colors duration-200 hover:scale-110"
            >
              <MessageSquare size={24} />
            </button>
            <button className="text-gray-700 hover:text-black transition-colors duration-200 hover:scale-110">
              <Users size={24} />
            </button>
          </div>
        </div>

        {/* Likes Count */}
        <div className="font-semibold text-gray-900 mb-2">
          {post.likes} {post.likes === 1 ? 'like' : 'likes'}
        </div>

        {/* Caption */}
        <div className="text-gray-900 mb-3">
          <span className="font-semibold mr-2">{post.username}</span>
          {post.caption}
        </div>

        {/* Comments */}
        {post.comments.length > 0 && (
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-gray-500 mb-3 hover:text-gray-700 transition-colors duration-200"
          >
            {showComments ? 'Hide' : 'View'} all {post.comments.length} comments
          </button>
        )}

        {showComments && (
          <div className="space-y-2 mb-3 max-h-32 overflow-y-auto">
            {post.comments.map((comment) => (
              <div key={comment.id} className="text-sm">
                <span className="font-semibold mr-2">{comment.username}</span>
                <span className="text-gray-900">{comment.text}</span>
                <span className="text-gray-500 ml-2 text-xs">{comment.timestamp}</span>
              </div>
            ))}
          </div>
        )}

        {/* Add Comment */}
        <form onSubmit={handleCommentSubmit} className="flex items-center space-x-3">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 text-sm border-none outline-none bg-transparent placeholder-gray-500"
          />
          {newComment.trim() && (
            <button
              type="submit"
              className="text-blue-500 font-semibold text-sm hover:text-blue-600 transition-colors duration-200"
            >
              Post
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Post;
