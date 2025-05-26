
export const mockStories = [
  {
    id: '1',
    username: 'your_story',
    avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face',
    isLive: false,
  },
  {
    id: '2',
    username: 'alex_dev',
    avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=face',
    isLive: true,
  },
  {
    id: '3',
    username: 'sarah_creates',
    avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face',
    isLive: false,
  },
  {
    id: '4',
    username: 'mike_photos',
    avatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop&crop=face',
    isLive: false,
  },
  {
    id: '5',
    username: 'emma_travels',
    avatar: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop&crop=face',
    isLive: false,
  },
  {
    id: '6',
    username: 'nature_lover',
    avatar: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop&crop=face',
    isLive: false,
  },
];

export const mockPosts = [
  {
    id: '1',
    username: 'alex_dev',
    avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    caption: 'Working on something amazing! 💻✨ #coding #developer #tech',
    likes: 142,
    isLiked: false,
    timestamp: '2 hours ago',
    comments: [
      {
        id: '1',
        username: 'sarah_creates',
        text: 'This looks incredible! 🔥',
        timestamp: '1h'
      },
      {
        id: '2',
        username: 'mike_photos',
        text: 'Keep up the great work!',
        timestamp: '45m'
      }
    ]
  },
  {
    id: '2',
    username: 'sarah_creates',
    avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    caption: 'Creative session in full swing! What do you think of this design? 🎨',
    likes: 89,
    isLiked: true,
    timestamp: '4 hours ago',
    comments: [
      {
        id: '3',
        username: 'emma_travels',
        text: 'Love the color palette! 😍',
        timestamp: '2h'
      }
    ]
  },
  {
    id: '3',
    username: 'mike_photos',
    avatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    caption: 'Matrix vibes today 🕶️ Sometimes you need that green glow in your life #matrix #coding #vibes',
    likes: 234,
    isLiked: false,
    timestamp: '6 hours ago',
    comments: [
      {
        id: '4',
        username: 'alex_dev',
        text: 'Red pill or blue pill? 💊',
        timestamp: '4h'
      },
      {
        id: '5',
        username: 'nature_lover',
        text: 'The code is calling! 📞',
        timestamp: '3h'
      }
    ]
  },
  {
    id: '4',
    username: 'emma_travels',
    avatar: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
    caption: 'Golden hour magic ✨ There\'s something special about this light between the trees',
    likes: 156,
    isLiked: true,
    timestamp: '8 hours ago',
    comments: [
      {
        id: '6',
        username: 'nature_lover',
        text: 'Absolutely stunning! 🌅',
        timestamp: '6h'
      }
    ]
  },
  {
    id: '5',
    username: 'nature_lover',
    avatar: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
    caption: 'Found my peaceful place 🌲💚 Nature always has the best therapy sessions',
    likes: 198,
    isLiked: false,
    timestamp: '10 hours ago',
    comments: [
      {
        id: '7',
        username: 'emma_travels',
        text: 'So serene! Where is this? 📍',
        timestamp: '8h'
      },
      {
        id: '8',
        username: 'sarah_creates',
        text: 'Need to find a spot like this! 🌿',
        timestamp: '7h'
      }
    ]
  },
  {
    id: '6',
    username: 'cat_lover_42',
    avatar: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop',
    caption: 'This is Whiskers and he owns this house 🐱👑 I just live here and serve treats',
    likes: 267,
    isLiked: true,
    timestamp: '12 hours ago',
    comments: [
      {
        id: '9',
        username: 'alex_dev',
        text: 'Living the dream! 😸',
        timestamp: '10h'
      },
      {
        id: '10',
        username: 'mike_photos',
        text: 'Whiskers knows what\'s up! 🐾',
        timestamp: '9h'
      }
    ]
  },
  {
    id: '7',
    username: 'home_designer',
    avatar: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
    caption: 'Cozy living room vibes ✨ Sometimes simple is better 🏠',
    likes: 178,
    isLiked: false,
    timestamp: '14 hours ago',
    comments: [
      {
        id: '11',
        username: 'sarah_creates',
        text: 'Love the minimalist approach! 🤍',
        timestamp: '12h'
      }
    ]
  },
  {
    id: '8',
    username: 'alex_dev',
    avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    caption: 'Late night coding session 🌙 The bugs don\'t stand a chance tonight!',
    likes: 95,
    isLiked: true,
    timestamp: '16 hours ago',
    isVideo: true,
    comments: []
  }
];
