import { useState } from 'react';

const TweetComposer = () => {
  const [tweetText, setTweetText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxChars = 280;

  const handleTextChange = (e) => {
    const text = e.target.value;
    setTweetText(text);
    setCharCount(text.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweetText.trim() && charCount <= maxChars) {
      // In a real app, this would send the tweet to the backend
      console.log('Tweet posted:', tweetText);
      setTweetText('');
      setCharCount(0);
      alert('Tweet posted! (This is a demo)');
    }
  };

  const canTweet = tweetText.trim() && charCount <= maxChars;

  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex space-x-3">
        {/* User Avatar */}
        <div className="flex-shrink-0">
          <img
            src="https://picsum.photos/40/40?random=user"
            alt="Your avatar"
            className="w-12 h-12 rounded-full"
          />
        </div>

        {/* Tweet Input */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <textarea
              value={tweetText}
              onChange={handleTextChange}
              placeholder="What's happening?"
              className="w-full border-none resize-none focus:ring-0 focus:outline-none text-xl placeholder-gray-500 min-h-[120px]"
              maxLength={maxChars}
            />
            
            {/* Action Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              {/* Character Count */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{charCount}/{maxChars}</span>
              </div>
              
              <button
                type="submit"
                disabled={!canTweet}
                className={`px-6 py-2 rounded-full font-bold transition-colors ${
                  canTweet
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TweetComposer; 