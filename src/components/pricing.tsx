import React from 'react';
import { CheckCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic Wash",
      price: "$2.99/lb",
      description: "Perfect for everyday clothes",
      features: [
        "Wash & Dry",
        "Folded Service",
        "Standard Detergent",
        "24-Hour Turnaround"
      ]
    },
    {
      name: "Premium Care",
      price: "$5.99/lb",
      description: "For special garments and fabrics",
      features: [
        "Wash & Dry",
        "Professional Pressing",
        "Premium Detergent",
        "12-Hour Turnaround",
        "Stain Protection"
      ],
      popular: true
    },
    {
      name: "Deluxe Package",
      price: "$8.99/lb",
      description: "Full-service premium treatment",
      features: [
        "Dry Cleaning",
        "Professional Pressing",
        "Eco-Friendly Products",
        "6-Hour Turnaround",
        "Stain Removal",
        "Free Pickup & Delivery"
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees. No surprises. Just quality laundry service at fair prices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h2>
              <div className="text-4xl font-bold text-blue-600 mb-4">{plan.price}</div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transform hover:scale-105' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Specialty Items</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Comforter (Twin)</span>
                  <span className="font-medium">$25.99</span>
                </li>
                <li className="flex justify-between">
                  <span>Comforter (Queen)</span>
                  <span className="font-medium">$35.99</span>
                </li>
                <li className="flex justify-between">
                  <span>Comforter (King)</span>
                  <span className="font-medium">$45.99</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Add-On Services</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Stain Removal</span>
                  <span className="font-medium">$5.99+</span>
                </li>
                <li className="flex justify-between">
                  <span>Fabric Protection</span>
                  <span className="font-medium">$3.99</span>
                </li>
                <li className="flex justify-between">
                  <span>Express Service</span>
                  <span className="font-medium">$9.99</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;