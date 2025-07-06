import TweetComposer from './TweetComposer';
import TweetCard from './TweetCard';
import { mockTweets } from '../utils/mockData';

const MainFeed = () => {
  return (
    <div className="flex-1 border-r border-gray-200 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 p-4 z-10">
        <h1 className="text-xl font-bold text-gray-900">Home</h1>
      </div>

      {/* Tweet Composer */}
      <TweetComposer />

      {/* Tweet Feed */}
      <div className="divide-y divide-gray-200">
        {mockTweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </div>

      {/* Load More */}
      <div className="p-4 text-center">
        <button className="text-blue-500 hover:text-blue-600 text-sm">
          Show more Tweets
        </button>
      </div>
    </div>
  );
};

export default MainFeed; 