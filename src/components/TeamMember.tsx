import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  delay?: number;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  image,
  bio,
  delay = 0,
  linkedin,
  twitter,
  email
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card group h-full"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-center space-x-3">
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-gray-800 hover:text-primary-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
            {twitter && (
              <a 
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-gray-800 hover:text-primary-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
            {email && (
              <a 
                href={`mailto:${email}`}
                className="bg-white p-2 rounded-full text-gray-800 hover:text-primary-600 transition-colors"
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-gray-900">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;