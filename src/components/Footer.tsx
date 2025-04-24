import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, HeartPulse } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <HeartPulse size={28} className="text-primary-400 mr-2" />
              <div>
                <span className="text-xl font-display font-bold text-white">Animal Health</span>
                <span className="text-xl font-display font-bold text-primary-400 ml-1">SPA</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Established in 2025, Animal Health SPA is a leading supplier of animal medicines, feed, equipment, and accessories in Zimbabwe and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/core-business" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Core Business
                </Link>
              </li>
              <li>
                <Link to="/mission" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/core-values" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Core Values
                </Link>
              </li>
              <li>
                <Link to="/directors" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Directors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Animal Medicines</li>
              <li className="text-gray-400">Farm Equipment</li>
              <li className="text-gray-400">Animal Feed</li>
              <li className="text-gray-400">Accessories</li>
              <li className="text-gray-400">Veterinary Supplies</li>
              <li className="text-gray-400">Health Consultations</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">19 Ceres Road, 10 Jules Court Avondale, Harare</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+263 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@animalhealthspa.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Animal Health SPA. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;