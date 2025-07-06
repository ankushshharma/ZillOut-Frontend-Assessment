import { trendingTopics, whoToFollow } from '../utils/mockData';

const SidebarRight = () => {
  return (
    <div className="w-80 min-h-screen p-4 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search Twitter"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Trending Section */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Trends for you</h2>
        <div className="space-y-4">
          {trendingTopics.map((topic) => (
            <div key={topic.id} className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <div className="text-xs text-gray-500">{topic.category}</div>
              <div className="font-semibold text-gray-900">{topic.topic}</div>
              <div className="text-sm text-gray-500">{topic.tweets} Tweets</div>
            </div>
          ))}
        </div>
        <button className="text-blue-500 hover:text-blue-600 text-sm mt-2">
          Show more
        </button>
      </div>

      {/* Who to Follow */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Who to follow</h2>
        <div className="space-y-3">
          {whoToFollow.map((user) => (
            <div key={user.id} className="flex items-center justify-between hover:bg-gray-100 p-2 rounded-lg">
              <div className="flex items-center space-x-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-500">{user.handle}</div>
                </div>
              </div>
              <button className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-800">
                Follow
              </button>
            </div>
          ))}
        </div>
        <button className="text-blue-500 hover:text-blue-600 text-sm mt-2">
          Show more
        </button>
      </div>
    </div>
  );
};

export default SidebarRight; 