import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const TwitterHome = () => {
  const [tweetText, setTweetText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [activeTab, setActiveTab] = useState('For you');
  const maxChars = 280;
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);

  // Updated mock tweets to match target
  const initialTweets = [
    {
      id: 1,
      user: {
        name: 'Reown',
        handle: '@reown',
        avatar: 'https://picsum.photos/40/40?random=reown',
        verified: true
      },
      content: 'Build smoother Solana UX, faster.\n\nWith Reown\'s AppKit SDK, you get:\n✅ 60+ wallet connections\n✅ Social and email login\n✅ Built-in onramp\n\nJust 20 lines of code to go live.\n\nBuilt for Solana, designed for scale.',
      timestamp: '2h',
      comments: 80,
      retweets: 149,
      likes: 1700,
      shares: 104,
      hasImage: true,
      imageUrl: 'https://picsum.photos/400/300?random=solana'
    },
    {
      id: 2,
      user: {
        name: 'Mukul Sharma',
        handle: '@stufflistings',
        avatar: 'https://picsum.photos/40/40?random=mukul',
        verified: true
      },
      content: 'Today, I\'m giving away the realme 15 Pro to the #stufflistingsarmy, ahead of launch 🤩\n\nTo win:\n1. Like this post\n2. Quote repost using #AIPartyPhone #realme15Pro5G #realme15Series5G\n3. Answer some questions\n\nHappy winning 🧡',
      timestamp: '9h',
      comments: 234,
      retweets: 690,
      likes: 3200,
      shares: 67,
      hasImage: true,
      imageUrl: 'https://picsum.photos/400/300?random=realme'
    }
  ];
  const [tweets, setTweets] = useState(initialTweets.map(t => ({ ...t, liked: false, retweeted: false })));

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    }
    if (profileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileDropdownOpen]);

  const handleTextChange = (e) => {
    const text = e.target.value;
    setTweetText(text);
    setCharCount(text.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweetText.trim() && charCount <= maxChars) {
      const newTweet = {
        id: Date.now(),
        user: {
          name: currentUser?.displayName || 'User',
          handle: currentUser?.email ? `@${currentUser.email.split('@')[0]}` : '@username',
          avatar: currentUser?.photoURL || 'https://picsum.photos/40/40?random=user',
          verified: false
        },
        content: tweetText,
        timestamp: 'now',
        comments: 0,
        retweets: 0,
        likes: 0,
        shares: 0,
        hasImage: false,
        imageUrl: ''
      };
      setTweets([newTweet, ...tweets]);
      setTweetText('');
      setCharCount(0);
      toast.success('Tweet posted!');
    }
  };

  const canTweet = tweetText.trim() && charCount <= maxChars;

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout failed.');
    }
  };

  // Updated trending topics to match target
  const trendingTopics = [
    { id: 1, category: 'Sports • Trending', topic: 'Real Madrid vs Borussia Dortmund', tweets: '18 minutes ago' },
    { id: 2, category: 'Trending in India', topic: '#bestmovieof2025', tweets: '4,603 posts' },
    { id: 3, category: 'Trending in India', topic: 'स्वामी विवेकानंद', tweets: '6,408 posts' },
    { id: 4, category: 'Sports • Trending', topic: 'Jamie Smith', tweets: '1,974 posts' },
    { id: 5, category: 'Sports • Trending', topic: 'Courtois', tweets: '14.4K posts' },
  ];

  // Updated who to follow to match target
  const whoToFollow = [
    { id: 1, name: 'Narendra Modi', handle: '@narendramodi', avatar: 'https://picsum.photos/40/40?random=1', verified: true },
    { id: 2, name: 'Sachin Tendulkar', handle: '@sachin_rt', avatar: 'https://picsum.photos/40/40?random=2', verified: true },
    { id: 3, name: "Men's Sexual Health", handle: '@Men.Sex.Health', avatar: 'https://picsum.photos/40/40?random=3', verified: true },
  ];

  const sidebarItems = [
    { label: 'Home', icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7"><g><path fill="currentColor" d="M22.46 10.96l-9-8.49a2.25 2.25 0 00-3.04 0l-9 8.49A1.75 1.75 0 002.25 14h.75v6.25A2.75 2.75 0 005.75 23h3.5a.75.75 0 00.75-.75V17a.75.75 0 01.75-.75h2a.75.75 0 01.75.75v5.25c0 .41.34.75.75.75h3.5A2.75 2.75 0 0021 20.25V14h.75a1.75 1.75 0 001.21-3.04z"></path></g></svg>
    ) },
    { label: 'Explore', icon: (
      <svg viewBox="0 0 256 256" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <g fill="#ffffff" fillRule="nonzero">
          <g transform="scale(5.12,5.12)">
            <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
          </g>
        </g>
      </svg>
    ) },
    { label: 'Notifications', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-7 h-7">
        <path fill="currentColor" d="M9.985 0c1.089 0 1.971.898 1.971 2.006l-.009.163c.868.352 1.707.936 2.451 1.71c.862.893 1.366 2.077 1.521 3.596v5.478l1.191 2.098c.4.666.528 1.224.216 1.707c-.286.441-.797.595-1.49.583h-2.67C12.854 18.86 11.532 20 9.95 20c-1.584 0-2.905-1.14-3.216-2.658H3.778l-.056-.003c-.627-.054-1.094-.357-1.199-.94c-.071-.397.023-.823.268-1.331l1.225-2.18l.003-5.473c.107-1.21.56-2.337 1.348-3.371c.667-.875 1.62-1.519 2.654-1.89a1.752 1.752 0 0 1-.006-.148C8.015.898 8.897 0 9.985 0Zm1.818 17.342H8.097c.275.77 1 1.32 1.853 1.32c.852 0 1.578-.55 1.853-1.32ZM10.082 3.124c-1.354 0-2.843.645-3.677 1.74c-.638.836-.994 1.722-1.075 2.61v5.59c0 .117-.03.232-.087.333l-1.291 2.296a1.71 1.71 0 0 0-.12.311h12.014c.121.002.213-.003.276-.005a2.615 2.615 0 0 0-.141-.265l-1.287-2.267a.678.678 0 0 1-.088-.335l.003-5.586c-.121-1.162-.506-2.064-1.149-2.732c-1.04-1.08-2.262-1.69-3.378-1.69Zm-.097-1.787a.66.66 0 0 0-.635.497c.246-.031.49-.047.732-.047c.177 0 .356.01.535.032a.66.66 0 0 0-.632-.482Z"/>
      </svg>
    ), badge: '20+' },
    { label: 'Messages', icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7"><g><path fill="currentColor" d="M1.998 4.5A2.5 2.5 0 014.5 2h15a2.5 2.5 0 012.5 2.5v15a2.5 2.5 0 01-2.5 2.5h-15a2.5 2.5 0 01-2.5-2.5v-15zm2.5-.5a.5.5 0 00-.5.5v.637l8 5.333 8-5.333V4.5a.5.5 0 00-.5-.5h-15zm15 17a.5.5 0 00.5-.5v-9.637l-8 5.333-8-5.333V20.5a.5.5 0 00.5.5h15z"></path></g></svg>
    ) },
    { label: 'Grok', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="4" d="M12 2C6.485 2 2 6.485 2 12s4.485 10 10 10s10-4.485 10-10S17.515 2 12 2Z"/></svg>  
    ) },
    { label: 'Communities', icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7"><g><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g></svg>
    ) },
    { label: 'Premium', icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7"><g><path fill="currentColor" d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.01z"></path></g></svg>
    ) },
    { label: 'Verified Orgs', icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7"><g><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></g></svg>
    ) },
    { label: 'Profile', icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7"><g><circle cx="12" cy="8" r="4" fill="currentColor"/><path fill="currentColor" d="M12 14c-4.41 0-8 1.79-8 4v2h16v-2c0-2.21-3.59-4-8-4z"/></g></svg>
    ) },
    { label: 'More', icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7"><g><circle cx="5" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="19" cy="12" r="2" fill="currentColor"/></g></svg>
    ) },
  ];

  // Find the index of the 'More' item
  const moreIndex = sidebarItems.findIndex(item => item.label === 'More');

  // Tweet skeleton component
  const TweetSkeleton = () => (
    <div className="border-b border-gray-800 p-4 animate-pulse">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gray-700" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-24 h-4 bg-gray-700 rounded" />
            <div className="w-16 h-3 bg-gray-700 rounded" />
          </div>
          <div className="w-full h-4 bg-gray-700 rounded mb-2" />
          <div className="w-3/4 h-4 bg-gray-700 rounded mb-2" />
          <div className="w-1/2 h-4 bg-gray-700 rounded" />
          <div className="flex justify-between max-w-md mt-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-10 h-4 bg-gray-700 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Handle like
  const handleLike = (id) => {
    setTweets(tweets => tweets.map(tweet =>
      tweet.id === id
        ? {
            ...tweet,
            liked: !tweet.liked,
            likes: tweet.liked ? tweet.likes - 1 : tweet.likes + 1
          }
        : tweet
    ));
  };

  // Handle retweet
  const handleRetweet = (id) => {
    setTweets(tweets => tweets.map(tweet =>
      tweet.id === id
        ? {
            ...tweet,
            retweeted: !tweet.retweeted,
            retweets: tweet.retweeted ? tweet.retweets - 1 : tweet.retweets + 1
          }
        : tweet
    ));
  };

  // Handle comment (just increment for now)
  const handleComment = (id) => {
    setTweets(tweets => tweets.map(tweet =>
      tweet.id === id
        ? { ...tweet, comments: tweet.comments + 1 }
        : tweet
    ));
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="w-72 min-h-screen border-r border-gray-800 flex flex-col justify-between py-2 px-2 bg-black md:w-72 w-20">
        {/* Sidebar menu and Post button (scrollable area) */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="mb-8 px-2 py-2 flex items-center justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="32" height="32">
              <g fill="#fefbfb" fillRule="nonzero">
                <g transform="scale(5.12,5.12)">
                  <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                </g>
              </g>
            </svg>
          </div>
          <nav className="space-y-2 flex-1 overflow-auto min-h-0">
            {/* Render menu up to and including 'More' */}
            {sidebarItems.slice(0, moreIndex + 1).map((item) => (
              <Link
                key={item.label}
                to={item.label === 'Home' ? '/' : `/${item.label.toLowerCase().replace(/ /g, '')}`}
                aria-label={item.label}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-full text-left transition-colors font-semibold text-lg
                  ${location.pathname === (item.label === 'Home' ? '/' : `/${item.label.toLowerCase().replace(/ /g, '')}`)
                    ? 'bg-[#16181c] text-white' : 'hover:bg-[#16181c] text-gray-300'}
                  md:justify-between justify-center md:space-x-4 space-x-0`}
              >
                <div className="flex items-center md:space-x-4 space-x-0">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="hidden md:inline">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full md:inline hidden">{item.badge}</span>
                )}
              </Link>
            ))}
            {/* Post button directly after 'More' */}
            <button className="w-full bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors text-lg mt-2 hidden md:block">Post</button>
            {/* Render any remaining menu items (if any) */}
            {sidebarItems.slice(moreIndex + 1).map((item) => (
              <Link
                key={item.label}
                to={`/${item.label.toLowerCase().replace(/ /g, '')}`}
                aria-label={item.label}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-full text-left transition-colors font-semibold text-lg
                  ${location.pathname === `/${item.label.toLowerCase().replace(/ /g, '')}`
                    ? 'bg-[#16181c] text-white' : 'hover:bg-[#16181c] text-gray-300'}
                  md:justify-between justify-center md:space-x-4 space-x-0`}
              >
                <div className="flex items-center md:space-x-4 space-x-0">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="hidden md:inline">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full md:inline hidden">{item.badge}</span>
                )}
              </Link>
            ))}
            {/* Mobile Post button */}
            <button className="w-full bg-blue-500 text-white font-bold py-3 px-0 rounded-full hover:bg-blue-600 transition-colors text-lg mt-2 md:hidden block">Post</button>
          </nav>
        </div>
        {/* User Profile Section - sticky bottom */}
        <div className="sticky bottom-0 z-10 bg-black pt-2">
          {currentUser ? (
            <div ref={profileRef} className="relative mb-2">
              <div
                className="flex items-center space-x-3 p-3 rounded-full hover:bg-[#16181c] cursor-pointer"
                onClick={() => setProfileDropdownOpen((open) => !open)}
              >
                <img
                  src={currentUser?.photoURL || 'https://picsum.photos/40/40?random=user'}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white">{currentUser?.displayName || 'User'}</div>
                  <div className="text-gray-500 text-sm">{currentUser?.email || '@username'}</div>
                </div>
                <svg className={`w-5 h-5 text-gray-500 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {profileDropdownOpen && (
                <div className="absolute left-0 bottom-14 w-48 bg-[#16181c] border border-gray-700 rounded-xl shadow-lg py-2 z-50 animate-fade-in">
                  <Link to="/profile" className="block px-4 py-2 text-white hover:bg-gray-800 rounded-t-xl">Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-white hover:bg-gray-800">Settings</Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-800 rounded-b-xl"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => window.location.href = '/login'}
              className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-full mt-4 hover:bg-blue-600 transition-colors text-lg"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Main Feed */}
      <div className="flex-1 border-r border-gray-800 min-h-screen bg-black">
        {/* Header with tabs */}
        <div className="sticky top-0 bg-black border-b border-gray-800 z-10">
          <div className="flex">
            <button
              onClick={() => setActiveTab('For you')}
              className={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab === 'For you' 
                  ? 'text-white border-b-2 border-blue-500' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              For you
            </button>
            <button
              onClick={() => setActiveTab('Following')}
              className={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab === 'Following' 
                  ? 'text-white border-b-2 border-blue-500' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              Following
            </button>
          </div>
        </div>

        {/* Tweet Composer */}
        <div className="border-b border-gray-800 p-4 bg-black">
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <img
                src={currentUser?.photoURL || "https://picsum.photos/40/40?random=user"}
                alt="Your avatar"
                className="w-12 h-12 rounded-full"
              />
            </div>

            <div className="flex-1">
              <form onSubmit={handleSubmit}>
                <textarea
                  value={tweetText}
                  onChange={handleTextChange}
                  placeholder="What's happening?"
                  className="w-full border-none resize-none focus:ring-0 focus:outline-none text-xl placeholder-gray-500 min-h-[80px] bg-black text-white"
                  maxLength={maxChars}
                />
                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center space-x-4">
                    {/* Image */}
                    <button type="button" className="text-blue-500 hover:text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3z"/>
                      </svg>
                    </button>
                    {/* GIF */}
                    <button type="button" className="text-blue-500 hover:text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="6" width="20" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <text x="7" y="17" fontSize="8" fill="currentColor" fontFamily="Arial" fontWeight="bold">GIF</text>
                      </svg>
                    </button>
                    {/* Poll */}
                    <button type="button" className="text-blue-500 hover:text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="7" y="4" width="3" height="16" rx="1.5"/>
                        <rect x="14" y="9" width="3" height="11" rx="1.5"/>
                      </svg>
                    </button>
                    {/* Emoji */}
                    <button type="button" className="text-blue-500 hover:text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="9" cy="10" r="1"/>
                        <circle cx="15" cy="10" r="1"/>
                        <path d="M8 15c1.333 1 2.667 1 4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    {/* Schedule */}
                    <button type="button" className="text-blue-500 hover:text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    {/* Location */}
                    <button type="button" className="text-blue-500 hover:text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">{charCount}/{maxChars}</span>
                    <button
                      type="submit"
                      disabled={!canTweet}
                      className={`px-6 py-2 rounded-full font-bold transition-colors ${
                        canTweet
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Welcome Back Section */}
        <div className="border-b border-gray-800 p-6 bg-black">
          <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
          <p className="text-gray-500 mb-4">
            Select some topics you're interested in to help personalize your X experience, starting with finding people to follow.
          </p>
          <button className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors">
            Get started
          </button>
        </div>

        {/* Tweet Feed */}
        <div className="divide-y divide-gray-800 bg-black">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <TweetSkeleton key={i} />)
            : tweets.map((tweet) => (
                <div key={tweet.id} className="border-b border-gray-800 p-4 hover:bg-[#16181c] transition-colors">
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        src={tweet.user.avatar}
                        alt={tweet.user.name}
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-bold text-white">{tweet.user.name}</span>
                        {tweet.user.verified && (
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        )}
                        <span className="text-gray-500">{tweet.user.handle}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">{tweet.timestamp}</span>
                      </div>
                      <p className="text-white mb-3 leading-relaxed whitespace-pre-line">{tweet.content}</p>
                      {tweet.hasImage && (
                        <div className="mb-3 rounded-2xl overflow-hidden">
                          <img 
                            src={tweet.imageUrl} 
                            alt="Tweet image" 
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      )}
                      <div className="flex justify-between max-w-md">
                        <button onClick={() => handleComment(tweet.id)} className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                          </svg>
                          <span className="text-sm">{formatNumber(tweet.comments)}</span>
                        </button>
                        <button onClick={() => handleRetweet(tweet.id)} className={`flex items-center space-x-2 transition-colors ${tweet.retweeted ? 'text-green-500' : 'text-gray-500 hover:text-green-500'}`}> 
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                          </svg>
                          <span className="text-sm">{formatNumber(tweet.retweets)}</span>
                        </button>
                        <button onClick={() => handleLike(tweet.id)} className={`flex items-center space-x-2 transition-colors ${tweet.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}> 
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                          </svg>
                          <span className="text-sm">{formatNumber(tweet.likes)}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                          </svg>
                          <span className="text-sm">{formatNumber(tweet.shares)}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-96 min-h-screen p-4 space-y-6 bg-black">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="block w-full pl-10 pr-3 py-2 rounded-full bg-[#16181c] text-white placeholder-gray-500 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>

        {/* Subscribe to Premium */}
        <div className="bg-[#16181c] rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-2">Subscribe to Premium</h2>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to unlock new features and if eligible, receive a share of revenue.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition-colors">
            Subscribe
          </button>
        </div>

        {/* What's happening */}
        <div className="bg-[#16181c] rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4">What's happening</h2>
          <div className="space-y-4">
            {trendingTopics.map((topic) => (
              <div key={topic.id} className="hover:bg-[#222] p-2 rounded-lg cursor-pointer">
                <div className="text-xs text-gray-500">{topic.category}</div>
                <div className="font-semibold text-white">{topic.topic}</div>
                <div className="text-sm text-gray-500">{topic.tweets}</div>
              </div>
            ))}
          </div>
          <button className="text-blue-500 hover:text-blue-400 mt-4 text-sm">Show more</button>
        </div>

        {/* Who to follow */}
        <div className="bg-[#16181c] rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4">Who to follow</h2>
          <div className="space-y-3">
            {whoToFollow.map((user) => (
              <div key={user.id} className="flex items-center justify-between hover:bg-[#222] p-2 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-white">{user.name}</span>
                      {user.verified && (
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">{user.handle}</div>
                  </div>
                </div>
                <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-200">
                  Follow
                </button>
              </div>
            ))}
          </div>
          <button className="text-blue-500 hover:text-blue-400 mt-4 text-sm">Show more</button>
        </div>
      </div>
    </div>
  );
};

export default TwitterHome;