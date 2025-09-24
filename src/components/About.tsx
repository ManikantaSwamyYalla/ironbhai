// import React from 'react';

// const About: React.FC = () => {
//   return (
//     <div className="py-16 bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">About Iron Bhai</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Your trusted partner for professional laundry and dry cleaning services
//           </p>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
//           <p className="text-gray-600 mb-6">
//             Iron Bhai was founded with a simple mission: to provide exceptional laundry and dry cleaning services 
//             that save our customers time and give them confidence in their appearance. With over 10 years of experience 
//             in the industry, we've perfected our techniques and built a reputation for quality and reliability.
//           </p>
          
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h2>
//           <p className="text-gray-600 mb-6">
//             We understand that your clothes are an investment. That's why we use only the finest eco-friendly cleaning 
//             products and state-of-the-art equipment to ensure your garments receive the best possible care. Our team 
//             of skilled professionals is trained to handle everything from delicate silks to heavy winter coats.
//           </p>
          
//           <div className="grid md:grid-cols-2 gap-8 mt-12">
//             <div className="bg-blue-50 p-6 rounded-lg">
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Guarantee</h3>
//               <p className="text-gray-600">
//                 We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy with 
//                 our service, we'll re-do it or refund your money.
//               </p>
//             </div>
            
//             <div className="bg-blue-50 p-6 rounded-lg">
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Eco-Friendly</h3>
//               <p className="text-gray-600">
//                 We're committed to protecting the environment by using biodegradable detergents and energy-efficient 
//                 equipment in all our processes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



import React from 'react';
import { Shield, Sparkles, Heart, Clock, Award, Users, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee or we'll re-do it for free"
    },
    {
      icon: Sparkles,
      title: "Eco-Friendly",
      description: "Biodegradable detergents and energy-efficient processes"
    },
    {
      icon: Heart,
      title: "Fabric Care",
      description: "Specialized care for all fabric types and delicate items"
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Same-day service available with express options"
    }
  ];

  const stats = [
    // { number: "10+", label: "Years Experience" },
    { number: "50K+", label: "Happy Customers" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About Iron Bhai
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Your trusted partner for premium laundry and dry cleaning services
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
                ✨ Premium Quality
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
                🚀 Fast Service
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
                🌱 Eco-Friendly
              </div>
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
            <path
              d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Story Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 transform hover:scale-[1.02] transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Cleaning Excellence Since 2014
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Iron Bhai was founded with a simple yet powerful mission: to provide exceptional laundry and dry cleaning services 
                that save our customers time and give them confidence in their appearance. With over 10 years of experience 
                in the industry, we've perfected our techniques and built a reputation for quality and reliability.
              </p>
              <div className="space-y-4">
                {[
                  "Professional expert team with 10+ years experience",
                  "State-of-the-art equipment and eco-friendly products", 
                  "Specialized care for all fabric types and delicate items"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl p-8 text-white">
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">50,000+ Happy Customers</h3>
                <p className="opacity-90">
                  "Iron Bhai has been our family's trusted laundry partner for years. Their attention to detail 
                  and care for our clothes is unmatched!"
                </p>
                <div className="mt-6 flex items-center gap-1">
                  {[1,2,3,4,5].map(star => (
                    <div key={star} className="w-5 h-5 text-yellow-300">★</div>
                  ))}
                  <span className="ml-2 text-sm opacity-90">5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Iron Bhai?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality service with attention to every detail
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              We understand that your clothes are an investment. That's why we use only the finest eco-friendly cleaning 
              products and state-of-the-art equipment to ensure your garments receive the best possible care.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">100% Guarantee</h3>
                <p className="opacity-90">Complete satisfaction or full refund</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Sparkles className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
                <p className="opacity-90">Safe for you and the environment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quick Service</h3>
                <p className="opacity-90">Fast turnaround without compromising quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;