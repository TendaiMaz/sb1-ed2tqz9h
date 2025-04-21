import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="bg-red-50 p-3 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <AlertCircle size={36} className="text-red-500" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          
          <p className="text-gray-600 text-lg mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link to="/" className="btn-primary inline-flex items-center">
            <Home size={18} className="mr-2" />
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;