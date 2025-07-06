import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  '1. Who May Use the Services',
  '2. Privacy',
  '3. Content on the Services',
  '4. Using the Services',
  '5. Disclaimers and Limitations of Liability',
  '6. General',
];

const TermsOfService = () => (
  <div className="min-h-screen bg-[#fafbfc] text-black flex flex-col">
    {/* Header */}
    <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black mr-2">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span className="text-2xl font-bold">Terms of Service</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-black font-medium px-4 py-2 rounded-full border border-gray-200">Terms of Service Archive</button>
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
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <div className="text-gray-500 mb-2">Effective: November 15, 2024</div>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Summary of our Terms</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>These Terms of Service (“Terms”) are part of the User Agreement – a legally binding contract governing your use of X. You should read these Terms of Service (“Terms”) in full, but here are a few key things you should take away:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You will see advertising on the platform: In exchange for accessing the Services, X and our third-party providers and partners may display advertising to you.</li>
              <li>When posting Content and otherwise using the Services, you must comply with this User Agreement and Applicable Law: You are responsible for your use of the Services and your Content. You must comply with this User Agreement, its incorporated policies, and all applicable laws.</li>
              <li>You must abide by the Services' acceptable use terms: You may not access the Services in any way other than through the currently available, published interfaces that we provide. For example, this means that you cannot scrape the Services without X's express written permission, try to work around any technical limitations we impose, or otherwise attempt to disrupt the operation of the Services.</li>
              <li>We have broad enforcement rights: X reserves the right to take enforcement actions against you if you do violate these terms, such as, for example, removing your Content, limiting visibility, discontinuing your access to X, or taking legal action. We may also suspend or terminate your account for other reasons, such as prolonged inactivity, risk of legal exposure, or commercial inviability.</li>
              <li>There are Intellectual Property Licenses in these Terms: You retain ownership and rights to any of your Content you post or share, and you provide us with a broad, royalty-free license to make your Content available to the rest of the world and to let others do the same. Conversely, we provide you a license to use the software we provide as part of the Services, such as the X mobile application, solely for the purpose of enabling you to use and enjoy the benefit of the Services.</li>
              <li>Your use of the Services is at your own risk: We provide the Services on an "AS IS" and "AS AVAILABLE" basis, and we disclaim all warranties, responsibility, and liability to you or others to the extent permitted by law. You may be exposed to offensive or harmful content posted by other users. The Services may change from time to time, and we may limit or terminate availability of the Services or particular features to you or other users at any time.</li>
              <li>You have remedies and redress mechanisms, but our liability is limited: You have a right to terminate this agreement at any time by deactivating your account and discontinuing use of the Services. Note that we will not be liable for certain types of damages as described in the agreement, and in any event, our aggregate liability shall not exceed the greater of $100 USD or the amount you paid us, if any, in the past six months for the Services giving rise to the claim. Further, if you believe that your Content has been copied in a way that constitutes copyright infringement, the reporting process is detailed in these Terms. If you are a recipient of the X Service in the European Union, you may challenge certain decisions we make under the Digital Services Act (Regulation (EU) 2022/2065) via our internal process or via out-of-court dispute settlement as described here.</li>
              <li>Please also note that these Terms incorporate our <a href="https://x.com/privacy" className="text-blue-500 hover:underline">Privacy Policy</a> as well as other terms applicable to your use of the Services and your Content. Finally, these Terms may vary depending on where you live, but in any case, you must be at least 13 years old to use X.</li>
            </ul>
            <p>If you live outside the European Union, EFTA States, or the United Kingdom, including if you live in the United States, the X User Agreement comprises these Terms of Service, our Privacy Policy, our Rules and Policies, and all incorporated policies.</p>
            <p>If you live in the European Union, EFTA States, or the United Kingdom, the X User Agreement comprises these Terms of Service, our Privacy Policy, our Rules and Policies, and all incorporated policies.</p>
          </div>
        </section>
        {/* The rest of the sections can be added here, each with an id for anchor navigation */}
        <section id="section1" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Who May Use the Services</h2>
          <p className="text-base leading-relaxed">You may use the Services only if you agree to form a binding contract with us and are not a person barred from receiving services under the laws of the applicable jurisdiction. In any case, you must be at least 13 years old to use the Services. If you are (i) accepting these Terms and/or using the Services, which constitutes acceptance of these Terms, or (ii) accepting these Terms in order to authorize the use of the Services on behalf of a minor (being any person under the age of majority in any given country), company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so or, as the case may be, have the authority to bind such minor and/or entity to these Terms. The words "you" and "your" as used in these Terms shall refer either to the person accepting these Terms or such minor (as defined in (i)) and/or the entity referenced in (ii), as applicable.</p>
        </section>
        <section id="section2" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Privacy</h2>
          <p className="text-base leading-relaxed">Our <a href="https://x.com/privacy" className="text-blue-500 hover:underline">Privacy Policy</a> describes how we handle the information you provide to us when you use the Services. You understand that through your use of the Services you consent to the collection and use (as set forth in the Privacy Policy) of this information, including the transfer of this information to the United States, Ireland, and/or other countries for storage, processing and use by us and our affiliates.</p>
        </section>
        <section id="section3" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Content on the Services</h2>
          <p className="text-base leading-relaxed">You are responsible for your use of the Services and for any Content you provide, including compliance with applicable laws, rules, and regulations. You should only provide Content that you are comfortable sharing with others.</p>
          <p className="text-base leading-relaxed">Any use or reliance on any Content or materials posted via the Services or obtained by you through the Services is at your own risk. We do not endorse, support, represent or guarantee the completeness, truthfulness, accuracy, or reliability of any Content or communications posted via the Services or endorse any alleged facts or opinions expressed via the Services. You understand that by using the Services, you may be exposed to Content that might be offensive, harmful, inaccurate or otherwise inappropriate, or in some cases, postings that have been mislabeled or are otherwise deceptive. All Content is the sole responsibility of the person who originated such Content. We may not monitor or control the Content posted via the Services and, we cannot take responsibility for such Content.</p>
          <p className="text-base leading-relaxed">We reserve the right to remove Content that violates the User Agreement, including for example, copyright or trademark violations or other intellectual property misappropriation, impersonation, unlawful conduct, or harassment. Information regarding specific policies and the process for reporting or appealing violations can be found in our Help Center.</p>
          <p className="text-base leading-relaxed">If you believe that your Content has been copied in a way that constitutes copyright infringement, please report this by visiting our Copyright reporting form or contacting our designated copyright agent at:</p>
          <div className="bg-gray-100 rounded-lg p-4 my-4 text-sm">
            <div>X Corp.<br/>Attn: Copyright Agent<br/>865 FM 1209, Building 2<br/>Bastrop, TX 78602<br/>Reports: <a href="https://help.x.com/forms/dmca" className="text-blue-500 hover:underline">https://help.x.com/forms/dmca</a><br/>Email: <a href="mailto:copyright@x.com" className="text-blue-500 hover:underline">copyright@x.com</a></div>
          </div>
        </section>
        <section id="section4" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Using the Services</h2>
          <p className="text-base leading-relaxed">Please review our Rules and Policies, which are part of the User Agreement and outline conduct that is prohibited on the Services. You may use the Services only in compliance with these Terms and all applicable laws, rules and regulations. X takes enforcement actions when Content or user behavior is in violation of our Rules and Policies or in relation to sensitive media. You can review X's enforcement options and how you can appeal our enforcement decision here.</p>
          <p className="text-base leading-relaxed">The Services evolve constantly. As such, the Services may change from time to time, at our discretion. We may stop (permanently or temporarily) providing the Services or any features within the Services to you or to users generally. We also retain the right to create limits on use and storage at our sole discretion at any time. We may also remove or refuse to distribute any Content on the Services, limit distribution or visibility of any Content on the service, suspend or terminate users, and reclaim usernames without liability to you.</p>
          <p className="text-base leading-relaxed">In consideration for our granting you access to and use of the Services, you agree that we and our third-party providers and partners may place advertising on the Services or in connection with the display of Content or information from the Services whether submitted by you or others. We also reserve the right to access, read, preserve, and disclose any information as we reasonably believe is necessary to (i) satisfy any applicable law, regulation, legal process or governmental request; (ii) enforce the Terms, including investigation of potential violations hereof; (iii) detect, prevent, or otherwise address fraud, security or technical issues; (iv) respond to user support requests; or (v) protect the rights, property or safety of X, its users and the public. We do not disclose personally-identifying information to third parties except in accordance with our Privacy Policy.</p>
        </section>
        <section id="section5" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Disclaimers and Limitations of Liability</h2>
          <p className="text-base leading-relaxed">Your access to and use of the Services or any Content are at your own risk. You understand and agree that the Services are provided to you on an "AS IS" and "AS AVAILABLE" basis. The "X Entities" refers to X Corp., its parents, affiliates, related companies, officers, directors, employees, agents, representatives, partners, and licensors. Without limiting the foregoing, to the maximum extent permitted under applicable law, THE X ENTITIES DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. The X Entities make no warranty or representation and disclaim all responsibility and liability for: (i) the completeness, accuracy, availability, timeliness, security or reliability of the Services or any Content; (ii) any harm to your computer system, loss of data, or other harm that results from your access to or use of the Services or any Content; (iii) the deletion of, or the failure to store or to transmit, any Content and other communications maintained by the Services; and (iv) whether the Services will meet your requirements or be available on an uninterrupted, secure, or error-free basis. No advice or information, whether oral or written, obtained from the X Entities or through the Services, will create any warranty or representation not expressly made herein.</p>
          <p className="text-base leading-relaxed">NOTWITHSTANDING ANY OTHER TERMS TO THE CONTRARY, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE X ENTITIES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, RELIANCE OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (i) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (ii) ANY CONDUCT OR CONTENT OF ANY USER OR THIRD PARTY ON THE SERVICES, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; (iii) ANY CONTENT OBTAINED FROM THE SERVICES; OR (iv) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT. IN NO EVENT SHALL THE AGGREGATE LIABILITY OF THE X ENTITIES EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS (U.S. $100.00) OR THE AMOUNT YOU PAID US, IF ANY, IN THE PAST SIX MONTHS FOR THE SERVICES GIVING RISE TO THE CLAIM. THE LIMITATIONS OF THIS SUBSECTION SHALL APPLY TO ANY THEORY OF LIABILITY, WHETHER BASED ON WARRANTY, CONTRACT, STATUTE, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, AND WHETHER OR NOT THE X ENTITIES HAVE BEEN INFORMED OF THE POSSIBILITY OF ANY SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.</p>
        </section>
        <section id="section6" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. General</h2>
          <p className="text-base leading-relaxed">We may revise these Terms from time to time. The changes will not be retroactive, and the most current version of the Terms, which will always be at https://x.com/tos, will govern our relationship with you. We will try to notify you of material revisions, for example via a service notification or an email to the email associated with your account. By continuing to access or use the Services after those revisions become effective, you agree to be bound by the revised Terms.</p>
          <p className="text-base leading-relaxed">The laws of the State of Texas, excluding its choice of law provisions, will govern these Terms and any dispute that arises between you and us, notwithstanding any other agreement between you and us to the contrary. All disputes related to these Terms or the Services, including without limitation disputes related to or arising from other users' and third parties' use of the Services and any Content made available by other users and third parties on the Services, will be brought exclusively in the U.S. District Court for the Northern District of Texas or state courts located in Tarrant County, Texas, United States, and you consent to personal jurisdiction in those forums and waive any objection as to inconvenient forum. Without prejudice to the foregoing, you agree that, in its sole discretion, X may bring any claim, cause of action, or dispute we have against you in any competent court in the country in which you reside that has jurisdiction and venue over the claim. To the extent permitted by law, you also waive the right to participate as a plaintiff or class member in any purported class action, collective action or representative action proceeding.</p>
        </section>
      </div>
    </main>
    <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-200 bg-white">© 2025 X Corp.</footer>
  </div>
);

export default TermsOfService; 