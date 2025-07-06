import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  'How cookies are used on X',
  'What are cookies, pixels, and local storage?',
  'Why do our services use these technologies?',
  'Where are these technologies used?',
  'What are my privacy options?',
  'Cookie chart',
];

const CookiesPolicy = () => (
  <div className="min-h-screen bg-[#fafbfc] text-black flex flex-col">
    {/* Header */}
    <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black mr-2">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span className="text-2xl font-bold">Cookies Policy</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-black font-medium px-4 py-2 rounded-full border border-gray-200">Cookie Settings</button>
        <button className="text-gray-600 hover:text-black font-medium px-4 py-2 rounded-full border border-gray-200">Download PDF</button>
      </div>
    </header>
    <main className="flex flex-1 w-full max-w-7xl mx-auto py-8 px-4 md:px-12">
      {/* Left Nav */}
      <nav className="hidden md:block w-64 pr-8 border-r border-gray-200">
        <ul className="space-y-4 mt-8">
          {sections.map((section, idx) => (
            <li key={section}>
              <a href={`#section${idx + 1}`} className="text-lg font-medium text-gray-700 hover:text-black block">
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Main Content */}
      <div className="flex-1 max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Cookies Policy</h1>
          <div className="text-gray-500 mb-2">Effective: July 28, 2025</div>
        </div>
        <section id="section1" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How cookies are used on X</h2>
          <p className="text-base leading-relaxed">Cookies and similar technologies like pixels and local storage provide you with a better, faster, and safer experience on X. Cookies are also used to operate our services, which include our websites, applications, APIs, pixels, embeds, and email communications. Specifically, X uses these technologies to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Keep you logged in to X.</li>
            <li>Deliver features and functionality of X services.</li>
            <li>Save and honor your preferences.</li>
            <li>Personalize the content you see.</li>
            <li>Protect you against spam and abuse.</li>
            <li>Show you more relevant ads.</li>
            <li>Provide subscription features and distribute certain content.</li>
            <li>Understand how you interact with our services and where we can improve.</li>
            <li>Measure the effectiveness of our advertising and marketing.</li>
            <li>Rate how our services perform and identify bugs and other quality issues.</li>
            <li>Gather data used to operate our business — from measuring our audience size to enforcing the X Rules.</li>
          </ul>
        </section>
        <section id="section2" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What are cookies, pixels, and local storage?</h2>
          <p className="text-base leading-relaxed">Cookies are small files placed on your computer as you browse the web or use a web-enabled app. We use cookies to operate our services, discover how people use our services, understand how to make them work better and more. Pixels are small amounts of code placed on a web page, in a web-enabled app, or an email. We use pixels, some of which we provide to advertisers to place on their web properties, to learn whether you've interacted with specific web or email content. We use local storage to save data on your computer or mobile device. We use data from local storage to turn on web navigation, maintain video player preferences, customize what we show you based on your past interactions with our services, remember your preferences, and measure ad effectiveness.</p>
        </section>
        <section id="section3" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Why do our services use these technologies?</h2>
          <p className="text-base leading-relaxed">Cookies, pixels, and local storage work to operate and support our business, and to help provide you with an improved experience. They're used across the following categories:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Authentication and security</li>
            <li>Functionality</li>
            <li>User preferences</li>
            <li>Analytics</li>
            <li>Research and development</li>
            <li>Personalized content</li>
            <li>Advertising</li>
            <li>Marketing</li>
            <li>Personalization across devices</li>
          </ul>
          <p className="text-base leading-relaxed mt-4">Within each of these categories, cookies, pixels, and local storage help us authenticate your X access, protect your security, deliver error messages, remember your preferences, improve and understand how people use our services, personalize content and ads, and more.</p>
        </section>
        <section id="section4" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Where are these technologies used?</h2>
          <p className="text-base leading-relaxed">We (along with third parties) use these technologies on X services, which includes our websites, applications, and services and on other websites, applications, and services that have integrated X services, including third-party properties that incorporate our advertising technology. This includes our ad partners’ websites and sites that use our embeds, including embedded timelines. Third parties may also use these technologies, for example, when you click on links from X services, view or interact with third-party content in X services, or visit third-party websites that incorporate our advertising technology.</p>
        </section>
        <section id="section5" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What are my privacy options?</h2>
          <p className="text-base leading-relaxed">We're committed to giving you meaningful privacy options to control or limit how we, our partners, and other third-parties use cookies and cookie-related data. You can adjust your settings in X, use browser tools, or opt out of interest-based advertising through industry tools. Note that disabling cookies may affect your experience on X.</p>
        </section>
        <section id="section6" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Cookie chart</h2>
          <p className="text-base leading-relaxed mb-2">The cookies you encounter depend on the features and functionality you use. The most commonly used cookies on X services are described in this chart, which we update from time to time. Cookie lifespans are capped at 13 months in certain areas.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-gray-200 bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Name</th>
                  <th className="px-4 py-2 border-b">Description</th>
                  <th className="px-4 py-2 border-b">Controller</th>
                  <th className="px-4 py-2 border-b">Learn More</th>
                  <th className="px-4 py-2 border-b">Web Domain</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">_ga</td>
                  <td className="px-4 py-2 border-b">Google Analytics</td>
                  <td className="px-4 py-2 border-b">Google</td>
                  <td className="px-4 py-2 border-b"><a href="https://policies.google.com/technologies/cookies" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Google Policy</a></td>
                  <td className="px-4 py-2 border-b">.x.com</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">csrftoken</td>
                  <td className="px-4 py-2 border-b">MoPub authentication</td>
                  <td className="px-4 py-2 border-b">Mopub</td>
                  <td className="px-4 py-2 border-b"><a href="https://www.applovin.com/privacy" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">MoPub Policy</a></td>
                  <td className="px-4 py-2 border-b">app.mopub.com</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">guest_id</td>
                  <td className="px-4 py-2 border-b">Authentication</td>
                  <td className="px-4 py-2 border-b">Twitter Inc.</td>
                  <td className="px-4 py-2 border-b"><a href="https://twitter.com/privacy" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Twitter Policy</a></td>
                  <td className="px-4 py-2 border-b">.x.com</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">test_cookie</td>
                  <td className="px-4 py-2 border-b">DoubleClick integration</td>
                  <td className="px-4 py-2 border-b">Google</td>
                  <td className="px-4 py-2 border-b"><a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Google Policy</a></td>
                  <td className="px-4 py-2 border-b">doubleclick.net</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">night_mode</td>
                  <td className="px-4 py-2 border-b">Night mode functionality</td>
                  <td className="px-4 py-2 border-b">Twitter Inc.</td>
                  <td className="px-4 py-2 border-b"><a href="https://twitter.com/privacy" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Twitter Policy</a></td>
                  <td className="px-4 py-2 border-b">.x.com</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
    <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-200 bg-white">© 2025 X Corp.</footer>
  </div>
);

export default CookiesPolicy;
