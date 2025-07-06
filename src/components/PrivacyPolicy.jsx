import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  '1. Information We Collect',
  '2. How We Use Information',
  '3. Sharing Information',
  '4. How Long We Keep Information',
  '5. Take Control',
  '6. Your Rights and Ours',
  "7. X's Audience",
  '8. Changes To This Privacy Policy',
  '9. General',
  '10. How To Contact X',
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-[#fafbfc] text-black flex flex-col">
    {/* Header */}
    <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black mr-2">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span className="text-2xl font-bold">Privacy Policy</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-black font-medium px-4 py-2 rounded-full border border-gray-200">Privacy Settings</button>
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
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <div className="text-gray-500 mb-2">Effective: July 28, 2025</div>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Before you scroll, read this</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>It's really hard to make everyone happy with a Privacy Policy. Most people who use X want something short and easy to understand. While we wish we could fit everything you need to know into a post, our regulators ask us to meet our legal obligations by describing them all in a lot of detail.</p>
            <p>With that in mind, we've written our Privacy Policy as simply as possible to empower you to make informed decisions when you use X by making sure you understand and have control over the information we collect, how it's used, and when it's shared.</p>
            <p>So if you skip reading every word of the Privacy Policy, at least know this:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>X is a public platform</b> – Learn what's viewable & searchable</li>
              <li><b>We collect some data about you</b> – Learn what we collect & how</li>
              <li><b>Affiliate services may have their own policies</b> – Learn about affiliates</li>
              <li><b>We use your data to make X better</b> – Learn how we make your info work</li>
              <li><b>You can control your experience</b> – Learn how to update your settings</li>
              <li><b>If you have questions about how we use data, just ask</b> – Learn how to contact us</li>
            </ul>
          </div>
        </section>
        {/* The rest of the sections can be added here, each with an id for anchor navigation */}
        <section id="section1" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-base leading-relaxed">The information we collect when you use X falls into three categories. (See full policy for details.)</p>
        </section>
        <section id="section2" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
          <p className="text-base leading-relaxed">We use the information we collect to operate, improve, and personalize our services, foster safety and security, measure and analyze our services, communicate with you, and conduct research. (See full policy for details.)</p>
        </section>
        <section id="section3" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Sharing Information</h2>
          <p className="text-base leading-relaxed">We share your information in several ways, including when you post and share, with third parties and integrations, when required by law, with our affiliates, and as a result of a change in ownership. (See full policy for details.)</p>
        </section>
        <section id="section4" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. How Long We Keep Information</h2>
          <p className="text-base leading-relaxed">We keep different types of information for different periods of time, depending on how long we need to retain it in order to provide you with our products and services, to comply with our legal requirements and for safety and security reasons. (See full policy for details.)</p>
        </section>
        <section id="section5" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Take Control</h2>
          <p className="text-base leading-relaxed">You can access, correct, or modify the information you provided to us by editing your profile and adjusting your account settings. (See full policy for details.)</p>
        </section>
        <section id="section6" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Your Rights and Ours</h2>
          <p className="text-base leading-relaxed">We provide X to people all over the world and provide many of the same privacy tools and controls to all of our users regardless of where they live. (See full policy for details.)</p>
        </section>
        <section id="section7" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. X's Audience</h2>
          <p className="text-base leading-relaxed">Our services are not directed to children, and you may not use our services if you are under the age of 13. (See full policy for details.)</p>
        </section>
        <section id="section8" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Changes To This Privacy Policy</h2>
          <p className="text-base leading-relaxed">The most current version of this Privacy Policy governs our processing of your personal data and we may revise this Privacy Policy from time to time as needed. (See full policy for details.)</p>
        </section>
        <section id="section9" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. General</h2>
          <p className="text-base leading-relaxed">The X Privacy Policy is written in English but is made available in multiple languages through translations. (See full policy for details.)</p>
        </section>
        <section id="section10" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. How To Contact X</h2>
          <p className="text-base leading-relaxed">We want to hear from you if you have thoughts or questions about this Privacy Policy. You can contact us via our Privacy Policy Inquiries page or by writing to us at the appropriate address. (See full policy for details.)</p>
        </section>
      </div>
    </main>
    <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-200 bg-white">© 2025 X Corp.</footer>
  </div>
);

export default PrivacyPolicy; 