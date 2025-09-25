import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Privacy Policy</h1>
      
      <p className="mb-6 text-gray-700">
        IronBhai is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Personal details:</strong> Name, phone number, email, address.</li>
            <li><strong>Order details:</strong> Service type, pickup/delivery location, payment information.</li>
            <li><strong>Device & usage data:</strong> IP address, device type, app usage patterns, cookies.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Process and deliver your orders.</li>
            <li>Communicate updates, offers, and support.</li>
            <li>Improve our services and app functionality.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">3. Data Sharing</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>We do not sell your personal data.</li>
            <li>We may share information with service partners for pickup, delivery, and payment processing.</li>
            <li>We may share with legal authorities if required by law or to protect our rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">4. Data Security</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>We use encryption, secure servers, and access controls to protect your data.</li>
            <li>While we take reasonable steps to safeguard information, no system is 100% secure.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">5. Cookies & Tracking</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>We may use cookies and analytics tools to enhance your experience.</li>
            <li>You can disable cookies through your browser/app settings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Access, update, or delete your personal data.</li>
            <li>Opt out of marketing communications anytime.</li>
            <li>Request details of the data we hold about you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">7. Data Retention</h2>
          <p className="text-gray-700">
            We retain your data only as long as necessary for providing services and complying with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">8. Third-Party Links</h2>
          <p className="text-gray-700">
            Our app/website may contain links to other sites. We are not responsible for their privacy practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">9. Policy Updates</h2>
          <p className="text-gray-700">
            We may update this policy from time to time. The updated version will be posted on our app/website with a revised date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">10. Contact Us</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>📧 Email: support@ironbhai.com</li>
            <li>📞 Phone: +91 8688206969</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;