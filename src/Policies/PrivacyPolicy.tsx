import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.165-2.052-.48-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Privacy Policy</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <p className="mb-8 text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          IronBhai is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
        </p>

        <div className="space-y-8">
          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">1. Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Personal details:</strong> Name, phone number, email, address.</li>
                  <li><strong>Order details:</strong> Service type, pickup/delivery location, payment information.</li>
                  <li><strong>Device & usage data:</strong> IP address, device type, app usage patterns, cookies.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Process and deliver your orders.</li>
                  <li>Communicate updates, offers, and support.</li>
                  <li>Improve our services and app functionality.</li>
                  <li>Comply with legal and regulatory requirements.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">3. Data Sharing</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We do not sell your personal data.</li>
                  <li>We may share information with service partners for pickup, delivery, and payment processing.</li>
                  <li>We may share with legal authorities if required by law or to protect our rights.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">4. Data Security</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We use encryption, secure servers, and access controls to protect your data.</li>
                  <li>While we take reasonable steps to safeguard information, no system is 100% secure.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">5. Cookies & Tracking</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We may use cookies and analytics tools to enhance your experience.</li>
                  <li>You can disable cookies through your browser/app settings.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                6
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">6. Your Rights</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access, update, or delete your personal data.</li>
                  <li>Opt out of marketing communications anytime.</li>
                  <li>Request details of the data we hold about you.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                7
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">7. Data Retention</h2>
                <p className="text-gray-700">
                  We retain your data only as long as necessary for providing services and complying with legal obligations.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                8
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">8. Third-Party Links</h2>
                <p className="text-gray-700">
                  Our app/website may contain links to other sites. We are not responsible for their privacy practices.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                9
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">9. Policy Updates</h2>
                <p className="text-gray-700">
                  We may update this policy from time to time. The updated version will be posted on our app/website with a revised date.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                10
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">10. Contact Us</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>📧 Email: support@ironbhai.com</li>
                  <li>📞 Phone: +91 8688206969</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;