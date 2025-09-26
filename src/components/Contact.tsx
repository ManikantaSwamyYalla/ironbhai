// import React, { useState } from 'react';
// import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real app, you would send this data to your backend
//     alert('Thank you for your message! We will contact you soon.');
//     setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//   };

//   return (
//     <div className="py-16 bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Have questions or ready to schedule a pickup? Get in touch with us today.
//           </p>
//         </div>
        
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div>
//             <div className="bg-white rounded-xl shadow-lg p-8 h-full">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-100 text-blue-600 p-3 rounded-lg flex-shrink-0">
//                     <Phone className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
//                     <p className="text-gray-600">(555) 123-4567</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-100 text-blue-600 p-3 rounded-lg flex-shrink-0">
//                     <Mail className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">Email</h3>
//                     <p className="text-gray-600">info@ironbhai.com</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-100 text-blue-600 p-3 rounded-lg flex-shrink-0">
//                     <MapPin className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">Address</h3>
//                     <p className="text-gray-600">123 Clean Street, Fresh City</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-100 text-blue-600 p-3 rounded-lg flex-shrink-0">
//                     <Clock className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
//                     <p className="text-gray-600">Monday - Saturday: 7AM - 9PM</p>
//                     <p className="text-gray-600">Sunday: 9AM - 6PM</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-8">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
//                   width="100%"
//                   height="250"
//                   style={{ border: 0, borderRadius: '0.5rem' }}
//                   allowFullScreen
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           <div>
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Your name"
//                   />
//                 </div>
                
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="your@email.com"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="(555) 123-4567"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
//                   <select
//                     id="service"
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="">Select a service</option>
//                     <option value="dry-cleaning">Dry Cleaning</option>
//                     <option value="wash-fold">Wash & Fold</option>
//                     <option value="steam-press">Steam Press</option>
//                     <option value="pickup">Pickup & Delivery</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={4}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="How can we help you?"
//                   ></textarea>
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 8688206969",
      description: "Mon-Sat 7AM-9PM, Sun 9AM-6PM",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Us", 
      content: "support@ironbhai.com",
      description: "We'll respond within 2 hours",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Branch Location",
      content: " Ameerpet | Manikonda | Kukatpally",
      description: "Pickup & Delivery Available",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "7 Days a Week",
      description: "Extended hours for your convenience",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Ready to experience premium laundry care? Get in touch today!
            </p>
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

      <div className="container mx-auto px-4 py-16">
        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
              <p className="text-lg font-semibold text-gray-900 mb-1">{info.content}</p>
              <p className="text-gray-600 text-sm">{info.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 transform hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="dry-cleaning">Dry Cleaning</option>
                      <option value="wash-fold">Wash & Fold</option>
                      <option value="steam-press">Steam Press</option>
                      <option value="saree-rolling">Saree Rolling</option>
                      <option value="pickup">Pickup & Delivery</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your laundry needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Enhanced Contact Information & Map */}
          <div className="space-y-8">
            {/* Business Hours Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Business Hours</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "7:00 AM - 9:00 PM", isToday: true },
                  { day: "Saturday", hours: "7:00 AM - 9:00 PM", isToday: false },
                  { day: "Sunday", hours: "9:00 AM - 6:00 PM", isToday: false }
                ].map((schedule, index) => (
                  <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${schedule.isToday ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'}`}>
                    <span className="font-semibold text-gray-800">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                    {schedule.isToday && <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Open Now</span>}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border border-green-200">
                <p className="text-green-800 font-medium text-center">
                  🚚 Pickup & Delivery Available
                </p>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Find Us</h3>
              </div>
              
              <div className="mb-4 p-4 bg-gray-50 rounded-xl">
                <p className="font-semibold text-gray-800 mb-1">Iron Bhai Laundry Services</p>
                <p className="text-gray-600">123 Clean Street, Fresh City, State 12345</p>
                <p className="text-sm text-gray-500 mt-2">Near City Mall, opposite Blue Park</p>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="filter hover:saturate-150 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your first pickup today and experience the Iron Bhai difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now: +91 8688206969
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors">
              Book Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;