import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Refund Policy</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">1. Eligibility for Refund</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>An order is cancelled before pickup for prepaid bookings.</li>
                  <li>The service is not delivered due to operational reasons from our side.</li>
                  <li>There is proven loss or damage to garments caused solely by IronBhai's negligence.</li>
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
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">2. Non-Refundable Cases</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>The garments have already been processed.</li>
                  <li>There is damage due to pre-existing defects, color bleeding, or poor fabric quality.</li>
                  <li>The order was placed under a non-refundable promotional offer.</li>
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
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">3. Refund Process</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Refunds (if approved) will be issued to the original payment method only.</li>
                  <li>Processing time: 7-10 business days from approval date.</li>
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
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">4. Partial Refunds</h2>
                <p className="text-gray-700">
                  In case of partial service issues, refunds will be calculated proportionately based on the affected item's service charges.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3 text-blue-800">5. Contact for Refund Requests</h2>
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

export default RefundPolicy;