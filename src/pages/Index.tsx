
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Stories from '../components/Stories';
import Post from '../components/Post';
import { mockPosts } from '../data/mockData';

const Index = () => {
  const [posts, setPosts] = useState(mockPosts.slice(0, 5));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Infinite scroll functionality
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000 &&
        !loading &&
        hasMore
      ) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  const loadMorePosts = () => {
    if (loading) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const currentLength = posts.length;
      const newPosts = mockPosts.slice(currentLength, currentLength + 3);
      
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts(prev => [...prev, ...newPosts]);
      }
      
      setLoading(false);
    }, 1000);
  };

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleComment = (postId: string, comment: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            comments: [...post.comments, {
              id: Date.now().toString(),
              username: 'you',
              text: comment,
              timestamp: 'now'
            }]
          }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-2xl mx-auto pt-20 pb-8 px-4">
        <Stories />
        
        <div className="space-y-6 mt-8">
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onLike={() => handleLike(post.id)}
              onComment={(comment) => handleComment(post.id, comment)}
            />
          ))}
          
          {loading && (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}
          
          {!hasMore && (
            <div className="text-center py-8 text-gray-500">
              You've reached the end!
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
