import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="bg-primary-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ValueCard;