import { useState } from 'react';

const TweetCard = ({ tweet }) => {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
      <div className="flex space-x-3">
        {/* User Avatar */}
        <div className="flex-shrink-0">
          <img
            src={tweet.user.avatar}
            alt={tweet.user.name}
            className="w-12 h-12 rounded-full"
          />
        </div>

        {/* Tweet Content */}
        <div className="flex-1 min-w-0">
          {/* User Info */}
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-bold text-gray-900">{tweet.user.name}</span>
            <span className="text-gray-500">{tweet.user.handle}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{tweet.timestamp}</span>
          </div>

          {/* Tweet Text */}
          <p className="text-gray-900 mb-3 leading-relaxed">{tweet.content}</p>

          {/* Interaction Buttons */}
          <div className="flex justify-between max-w-md">
            {/* Comment */}
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <span className="text-sm">{formatNumber(tweet.comments)}</span>
            </button>

            {/* Retweet */}
            <button 
              className={`flex items-center space-x-2 transition-colors ${
                retweeted ? 'text-green-500' : 'text-gray-500 hover:text-green-500'
              }`}
              onClick={() => setRetweeted(!retweeted)}
            >
              <span className="text-sm">{formatNumber(tweet.retweets)}</span>
            </button>

            {/* Like */}
            <button 
              className={`flex items-center space-x-2 transition-colors ${
                liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              }`}
              onClick={() => setLiked(!liked)}
            >
              <span className="text-sm">{formatNumber(tweet.likes)}</span>
            </button>

            {/* Share */}
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <span className="text-sm">{formatNumber(tweet.shares)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard; 