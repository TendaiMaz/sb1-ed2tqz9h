import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Pill, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    isActive ? 'nav-link nav-link-active' : 'nav-link';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <HeartPulse size={32} className="text-primary-600 mr-2" />
            <div>
              <span className="text-xl font-display font-bold text-gray-900">Animal Health</span>
              <span className="text-xl font-display font-bold text-primary-600 ml-1">SPA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
            <NavLink to="/core-business" className={navLinkClasses}>Core Business</NavLink>
            <NavLink to="/mission" className={navLinkClasses}>Mission</NavLink>
            <NavLink to="/core-values" className={navLinkClasses}>Core Values</NavLink>
            <NavLink to="/directors" className={navLinkClasses}>Directors</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed top-[60px] left-0 right-0 bottom-0 bg-white md:hidden overflow-y-auto z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container-custom py-6 flex flex-col h-full">
              <nav className="flex flex-col space-y-2">
                <NavLink 
                  to="/" 
                  className={navLinkClasses} 
                  onClick={() => setIsMenuOpen(false)}
                  end
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/core-business" 
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Core Business
                </NavLink>
                <NavLink 
                  to="/mission" 
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mission
                </NavLink>
                <NavLink 
                  to="/core-values" 
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Core Values
                </NavLink>
                <NavLink 
                  to="/directors" 
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Directors
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </nav>
              <div className="mt-auto pt-6">
                <Link 
                  to="/contact" 
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;