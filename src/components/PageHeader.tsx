import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  backgroundImage = 'https://images.pexels.com/photos/2892013/pexels-photo-2892013.jpeg?auto=compress&cs=tinysrgb&w=1600'
}) => {
  return (
    <div 
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-gray-200 text-lg md:text-xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;