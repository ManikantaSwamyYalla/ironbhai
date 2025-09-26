import React from 'react';

// const TermsConditions: React.FC = () => {

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <h1 className="text-3xl font-bold mb-6 text-blue-900">Terms & Conditions</h1>
      
//       <p className="mb-6 text-gray-700">
//         By using IronBhai's services (laundry, ironing, dry cleaning, saree rolling, and related offerings), you agree to the following Terms & Conditions:
//       </p>

//       <div className="space-y-6">
//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-blue-800">1. Service Scope</h2>
//           <ul className="list-disc pl-6 space-y-2 text-gray-700">
//             <li>Services are provided as per the options selected in the IronBhai app or via our authorized channels.</li>
//             <li>We reserve the right to refuse or cancel any order at our discretion.</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-blue-800">2. Orders & Pickup</h2>
//           <ul className="list-disc pl-6 space-y-2 text-gray-700">
//             <li>Orders must be placed through our official app, website, or customer service channels.</li>
//             <li>Pickup and delivery timings are based on slot availability and may be rescheduled in case of operational constraints.</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-blue-800">3. Pricing & Payment</h2>
//           <ul className="list-disc pl-6 space-y-2 text-gray-700">
//             <li>Prices are listed in the app and may vary by service, location, or promotions.</li>
//             <li>Payments must be completed via the app's supported methods before delivery, unless Cash on Delivery (COD) is chosen.</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-blue-800">4. Garment Handling & Liability</h2>
//           <ul className="list-disc pl-6 space-y-2 text-gray-700">
//             <li>We take utmost care of all items but are not responsible for pre-existing damage, color fading, or wear and tear.</li>
//             <li>Shrinkage or damage due to manufacturer's defect or poor fabric quality is not our liability.</li>
//             <li>In case of loss or damage solely due to our negligence, compensation will not exceed 5 times the service cost of the affected item.</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-blue-800">5. Uncollected Items</h2>
//           <p className="text-gray-700">
//             Items not collected/delivered within 30 days from the scheduled delivery date will be considered abandoned and may be donated/disposed without further notice.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-blue-800">6. Cancellations & Refunds</h2>
//           <ul className="list-disc pl-6 space-y-2 text-gray-700">
//             <li>Orders can be cancelled before pickup.</li>
//             <li>Refunds (if applicable) will be processed as per our refund policy within 7-10 business days.</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-blue-800">7. Customer Responsibilities</h2>
//           <ul className="list-disc pl-6 space-y-2 text-gray-700">
//             <li>Check all pockets for valuables before handing over garments.</li>
//             <li>Provide accurate contact details and delivery address.</li>
//             <li>Ensure someone is available at the delivery location during the scheduled time.</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-blue-800">8. Service Limitations</h2>
//           <ul className="list-disc pl-6 space-y-2 text-gray-700">
//             <li>We do not guarantee removal of all stains.</li>
//             <li>Certain delicate fabrics may be processed only after customer consent.</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-blue-800">9. Promotions & Discounts</h2>
//           <ul className="list-disc pl-6 space-y-2 text-gray-700">
//             <li>Offers and coupons are subject to change or withdrawal without prior notice.</li>
//             <li>Only one promotional offer can be used per order unless stated otherwise.</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-blue-800">10. Privacy & Data Use</h2>
//           <p className="text-gray-700">
//             Customer data will be used only for service delivery, communication, and marketing (if opted in), as per our Privacy Policy.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-blue-800">11. Dispute Resolution</h2>
//           <p className="text-gray-700">
//             Any disputes shall be resolved amicably. If unresolved, they will be subject to the jurisdiction of Hyderabad, Telangana courts.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default TermsConditions;



const TermsConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Terms & Conditions</h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <p className="mb-8 text-gray-700 text-lg leading-relaxed text-center">
          By using IronBhai's services (laundry, ironing, dry cleaning, saree rolling, and related offerings), you agree to the following Terms & Conditions:
        </p>

        <div className="space-y-8">
          <section className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">1</span>
              Service Scope
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 ml-2">
              <li>Services are provided as per the options selected in the IronBhai app or via our authorized channels.</li>
              <li>We reserve the right to refuse or cancel any order at our discretion.</li>
            </ul>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">2</span>
              Orders & Pickup
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 ml-2">
              <li>Orders must be placed through our official app, website, or customer service channels.</li>
              <li>Pickup and delivery timings are based on slot availability and may be rescheduled in case of operational constraints.</li>
            </ul>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">3</span>
              Pricing & Payment
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 ml-2">
              <li>Prices are listed in the app and may vary by service, location, or promotions.</li>
              <li>Payments must be completed via the app's supported methods before delivery, unless Cash on Delivery (COD) is chosen.</li>
            </ul>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">4</span>
              Garment Handling & Liability
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 ml-2">
              <li>We take utmost care of all items but are not responsible for pre-existing damage, color fading, or wear and tear.</li>
              <li>Shrinkage or damage due to manufacturer's defect or poor fabric quality is not our liability.</li>
              <li>In case of loss or damage solely due to our negligence, compensation will not exceed 5 times the service cost of the affected item.</li>
            </ul>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">5</span>
              Uncollected Items
            </h2>
            <p className="text-gray-700 ml-2">
              Items not collected/delivered within 30 days from the scheduled delivery date will be considered abandoned and may be donated/disposed without further notice.
            </p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">6</span>
              Cancellations & Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 ml-2">
              <li>Orders can be cancelled before pickup.</li>
              <li>Refunds (if applicable) will be processed as per our refund policy within 7-10 business days.</li>
            </ul>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">7</span>
              Customer Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 ml-2">
              <li>Check all pockets for valuables before handing over garments.</li>
              <li>Provide accurate contact details and delivery address.</li>
              <li>Ensure someone is available at the delivery location during the scheduled time.</li>
            </ul>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">8</span>
              Service Limitations
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 ml-2">
              <li>We do not guarantee removal of all stains.</li>
              <li>Certain delicate fabrics may be processed only after customer consent.</li>
            </ul>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">9</span>
              Promotions & Discounts
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 ml-2">
              <li>Offers and coupons are subject to change or withdrawal without prior notice.</li>
              <li>Only one promotional offer can be used per order unless stated otherwise.</li>
            </ul>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">10</span>
              Privacy & Data Use
            </h2>
            <p className="text-gray-700 ml-2">
              Customer data will be used only for service delivery, communication, and marketing (if opted in), as per our Privacy Policy.
            </p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">11</span>
              Dispute Resolution
            </h2>
            <p className="text-gray-700 ml-2">
              Any disputes shall be resolved amicably. If unresolved, they will be subject to the jurisdiction of Hyderabad, Telangana courts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;