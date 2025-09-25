// import React from 'react';
// import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// // Define the type for our configuration data
// interface ContactInfo {
//   email: string;
//   address: string | null;
//   phone: string;
// }

// interface Links {
//   faq: string | null;
//   terms_condition: string | null;
//   privacy_policy: string | null;
//   refund_policy: string | null;
//   about_us: string | null;
// }

// interface AppLinks {
//   play_store: string;
//   app_store: string;
// }

// interface SocialLinks {
//   facebook: string | null;
//   twitter: string | null;
//   youtube: string | null;
//   instagram: string | null;
// }

// interface ConfigData {
//   id: number;
//   name: string;
//   full_name: string;
//   website_url: string;
//   logo_image: string;
//   logo_dark_image: string | null;
//   favicon: string | null;
//   copyright: string;
//   sales_tax: number;
//   sales_tax_title: string;
//   service_charges: number;
//   service_charges_title: string;
//   delivery_partner_fee: number;
//   delivery_partner_fee_title: string;
//   platform_fee: number;
//   platform_fee_title: string;
//   handling_fee: string;
//   handling_fee_title: string;
//   min_cart_value: number;
//   show_delete_account: boolean;
//   contact_us: ContactInfo;
//   links: Links;
//   app_links: AppLinks;
//   social_links: SocialLinks;
// }

// const Footer: React.FC = () => {
//   // Static data
//   const config: ConfigData = {
//     id: 1,
//     name: "Iron Bhai",
//     full_name: "Iron Bhai",
//     website_url: "https://www.ironbhai.com",
//     logo_image: "https://img.ironbhai.com/static/Iron-Bhai.png",
//     logo_dark_image: null,
//     favicon: null,
//     copyright: "IronBhai © 2025. All rights reserved.",
//     sales_tax: 0,
//     sales_tax_title: "GST",
//     service_charges: 0,
//     service_charges_title: "Service Charges",
//     delivery_partner_fee: 20,
//     delivery_partner_fee_title: "Delivery Partner Fee",
//     platform_fee: 0,
//     platform_fee_title: "Platform Fee",
//     handling_fee: "0",
//     handling_fee_title: "Handling Charges",
//     min_cart_value: 100,
//     show_delete_account: true,
//     contact_us: {
//       email: "support@ironbhai.com",
//       address: null,
//       phone: "+91 8688206969"
//     },
//     links: {
//       faq: null,
//       terms_condition: null,
//       privacy_policy: null,
//       refund_policy: null,
//       about_us: null
//     },
//     app_links: {
//       play_store: "https://play.google.com/store/apps/details?id=com.ironbhaiuser",
//       app_store: "https://apps.apple.com/in/app/iron-bhai/id6751038071"
//     },
//     social_links: {
//       facebook: null,
//       twitter: null,
//       youtube: null,
//       instagram: null
//     }
//   };

//   return (
//     <footer className="bg-blue-950 text-white">
//       {/* Main Footer */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div>
//             <div className="flex items-center space-x-2 mb-6">
//               <div className="text-white rounded-lg">
//                 <div className="w-16 h-16 flex items-center justify-center font-bold text-xl">
//                   <img 
//                     src={config.logo_image} 
//                     alt={`${config.name} Logo`} 
//                     className="footer-logo w-full h-full object-contain" 
//                   />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">{config.name}</h3>
//                 <p className="text-sm text-gray-200">Smooth Clothes * Sharp Looks</p>
//               </div>
//             </div>
//             <p className="text-gray-300 mb-4">
//               Your trusted partner for premium laundry and dry cleaning services. 
//               We bring professional care directly to your doorstep.
//             </p>
//             <div className="flex space-x-4">
//               {config.social_links.facebook && (
//                 <a href={config.social_links.facebook} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
//                   <Facebook size={20} />
//                 </a>
//               )}
//               {config.social_links.twitter && (
//                 <a href={config.social_links.twitter} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
//                   <Twitter size={20} />
//                 </a>
//               )}
//               {config.social_links.instagram && (
//                 <a href={config.social_links.instagram} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
//                   <Instagram size={20} />
//                 </a>
//               )}
//               {config.social_links.youtube && (
//                 <a href={config.social_links.youtube} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
//                   <Linkedin size={20} />
//                 </a>
//               )}
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-xl font-bold mb-6">Our Services</h4>
//             <ul className="space-y-3">
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Dry Cleaning</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Wash & Fold</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Steam Press</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Stain Removal</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Alterations</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Wedding Dress Care</a></li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-xl font-bold mb-6">Quick Links</h4>
//             <ul className="space-y-3">
//               <li><a href={config.links.about_us || '#'} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About Us</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Pricing</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Schedule Pickup</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Track Order</a></li>
//               <li><a href={config.links.faq || '#'} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">FAQ</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-xl font-bold mb-6">Contact Us</h4>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <Phone size={18} className="text-blue-400" />
//                 <span className="text-gray-300">{config.contact_us.phone}</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail size={18} className="text-blue-400" />
//                 <span className="text-gray-300">{config.contact_us.email}</span>
//               </div>
//               {config.contact_us.address && (
//                 <div className="flex items-start space-x-3">
//                   <MapPin size={18} className="text-blue-400 mt-1" />
//                   <span className="text-gray-300">
//                     {config.contact_us.address}
//                   </span>
//                 </div>
//               )}
//               <div className="flex items-start space-x-3">
//                 <Clock size={18} className="text-blue-400 mt-1" />
//                 <div className="text-gray-300">
//                   <div>Mon-Fri: 7AM-9PM</div>
//                   <div>Sat-Sun: 8AM-6PM</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Newsletter Signup */}
//       <div className="border-t border-gray-700">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="mb-4 md:mb-0">
//               <h5 className="text-xl font-bold mb-2">Stay Updated</h5>
//               <p className="text-gray-400">Get special offers and updates delivered to your inbox</p>
//             </div>
//             <div className="flex w-full md:w-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 md:w-64 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-l-lg focus:outline-none focus:border-blue-400"
//               />
//               <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-700 bg-gray-900">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
//             <p>{config.copyright}</p>
//             <div className="flex space-x-6 mt-2 md:mt-0">
//               <a href={config.links.privacy_policy || '#'} className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
//               <a href={config.links.terms_condition || '#'} className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
//               <a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { fetchConfig, ConfigResponse } from "../services/footerService";

const Footer: React.FC = () => {
  const [config, setConfig] = useState<ConfigResponse["data"] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConfig()
      .then((res) => {
        setConfig(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Footer config error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <footer className="bg-blue-950 text-white p-6 text-center">
        <p>Loading footer...</p>
      </footer>
    );
  }

  if (!config) {
    return (
      <footer className="bg-blue-950 text-white p-6 text-center">
        <p>Failed to load footer</p>
      </footer>
    );
  }

  return (
    <footer className="bg-blue-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-16 h-16">
                <img
                  src={config.logo_image}
                  alt={`${config.name} Logo`}
                  className="footer-logo w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{config.name}</h3>
                <p className="text-sm text-gray-200">Smooth Clothes * Sharp Looks</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium laundry and dry cleaning services.
              We bring professional care directly to your doorstep.
            </p>
            <div className="flex space-x-4">
              {config.social_links.facebook && (
                <a href={config.social_links.facebook} className="text-gray-400 hover:text-blue-400">
                  <Facebook size={20} />
                </a>
              )}
              {config.social_links.twitter && (
                <a href={config.social_links.twitter} className="text-gray-400 hover:text-blue-400">
                  <Twitter size={20} />
                </a>
              )}
              {config.social_links.instagram && (
                <a href={config.social_links.instagram} className="text-gray-400 hover:text-blue-400">
                  <Instagram size={20} />
                </a>
              )}
              {config.social_links.youtube && (
                <a href={config.social_links.youtube} className="text-gray-400 hover:text-blue-400">
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Dry Cleaning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Wash & Fold</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Steam Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Stain Removal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Alterations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Wedding Dress Care</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href={config.links.about_us || "#"} className="text-gray-300 hover:text-blue-400">About Us</a></li>
              <li><a href={config.links.faq || "#"} className="text-gray-300 hover:text-blue-400">FAQ</a></li>
              <li><a href={config.links.terms_condition || "#"} className="text-gray-300 hover:text-blue-400">Terms</a></li>
              <li><a href={config.links.privacy_policy || "#"} className="text-gray-300 hover:text-blue-400">Privacy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300">{config.contact_us.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300">{config.contact_us.email}</span>
              </div>
              {config.contact_us.address && (
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-blue-400 mt-1" />
                  <span className="text-gray-300">{config.contact_us.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* App Links */}
<div>
  <h4 className="text-xl font-bold mb-6">Download Our App</h4>
  <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-4">
    {config.app_links.play_store && (
      <a
        href={config.app_links.play_store}
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          className="h-10"
        />
      </a>
    )}
    {config.app_links.app_store && (
      <a
        href={config.app_links.app_store}
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          className="h-10"
        />
      </a>
    )}
  </div>
</div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>{config.copyright}</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a>
             <a href="/refund-policy" className="hover:text-blue-400">Refund Policy</a>
            <a href="/terms-conditions" className="hover:text-blue-400">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
