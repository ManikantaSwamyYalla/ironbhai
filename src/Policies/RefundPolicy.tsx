import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Refund Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">1. Eligibility for Refund</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>An order is cancelled before pickup for prepaid bookings.</li>
            <li>The service is not delivered due to operational reasons from our side.</li>
            <li>There is proven loss or damage to garments caused solely by IronBhai's negligence.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">2. Non-Refundable Cases</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>The garments have already been processed.</li>
            <li>There is damage due to pre-existing defects, color bleeding, or poor fabric quality.</li>
            <li>The order was placed under a non-refundable promotional offer.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">3. Refund Process</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Refunds (if approved) will be issued to the original payment method only.</li>
            <li>Processing time: 7-10 business days from approval date.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">4. Partial Refunds</h2>
          <p className="text-gray-700">
            In case of partial service issues, refunds will be calculated proportionately based on the affected item's service charges.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">5. Contact for Refund Requests</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>📧 Email: support@ironbhai.com</li>
            <li>📞 Phone: +91 8688206969</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;