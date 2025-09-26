import React from 'react';
import { Truck, Smartphone, Leaf, Clock, Users, Award } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Pickup & Delivery",
      description: "Convenient door-to-door service within 5 miles"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile App Tracking",
      description: "Track your order status in real-time through our app"
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Eco-Friendly Process",
      description: "Environmentally safe cleaning solutions and practices"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose IRON BHAI?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We combine traditional laundry expertise with modern convenience to deliver 
              an exceptional cleaning experience that fits your lifestyle.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                Start Your First Order
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">24hrs</div>
              <div className="text-blue-100">Average Turnaround</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-teal-100">Happy Customers</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Good</div>
              <div className="text-purple-100">Experience</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <Leaf className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-orange-100">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;