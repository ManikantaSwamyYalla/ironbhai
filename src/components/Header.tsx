import React from 'react';
import { Phone, MapPin, Clock, Menu } from 'lucide-react';
// import logo from '../assets/logo-1.jpeg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>(555) 123-4567</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin size={14} />
                <span>123 Clean Street, Fresh City</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Clock size={14} />
                <span>Mon-Sat: 7AM-9PM</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Same Day Service Available!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-blue-950 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
              <div className="flex items-center space-x-2">
              <div className=" text-white p-2 rounded-lg">
                <div className="w-16 h-16 flex items-center justify-center font-bold text-xl">
                  <img src="https://img.ironbhai.com/static/Iron-Bhai.png" alt="Iron Bhai Logo" className="header-logo w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">IRON BHAI</h1>
                <p className="text-0.2xs text-white">Smooth Clothes * Sharp Looks</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
             <Link to="/" className="text-white hover:text-blue-600 transition-colors duration-300 text-2xl font-medium">Home</Link>
              <Link to="/services" className="text-white hover:text-blue-600 transition-colors duration-300 text-2xl font-medium">Services</Link>
              <Link to="/about" className="text-white hover:text-blue-600 transition-colors duration-300 text-2xl font-medium">About</Link>
              {/* <Link to="/pricing" className="text-white hover:text-blue-600 transition-colors duration-300 text-2xl font-medium">Pricing</Link> */}
              <Link to="/contact" className="text-white hover:text-blue-600 transition-colors duration-300 text-2xl font-medium">Contact</Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Pickup
              </button>
              <button className="lg:hidden p-2 text-gray-700 hover:text-blue-600">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;