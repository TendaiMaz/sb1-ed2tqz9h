import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ValueCard from '../components/ValueCard';
import { Heart, Clock, CheckCircle, Star } from 'lucide-react';

const CoreValuesPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Our Core Values"
        subtitle="The principles that guide our operations and relationships with our clients, partners, and communities."
        backgroundImage="https://images.pexels.com/photos/169524/pexels-photo-169524.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Values That Define Us
            </h2>
            <p className="text-gray-700 text-lg">
              At Animal Health SPA, our core values are not just words on a page – they are the principles that guide our daily operations and shape our relationships with clients, suppliers, and the community. These values spur our commitment to excellence in the business of supplying animal health products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-50 rounded-lg p-8 md:p-10 border-l-4 border-primary-600"
            >
              <div className="flex items-center mb-6">
                <Heart size={32} className="text-primary-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Commitment</h3>
              </div>
              <p className="text-gray-700 text-lg">
                We are dedicated to meeting the needs of our clients with unwavering dedication and integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary-50 rounded-lg p-8 md:p-10 border-l-4 border-secondary-600"
            >
              <div className="flex items-center mb-6">
                <Clock size={32} className="text-secondary-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Reliability</h3>
              </div>
              <p className="text-gray-700 text-lg">
                Ensuring dependable and timely delivery of animal health products is fundamental to our operation.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-accent-50 rounded-lg p-8 md:p-10 border-l-4 border-accent-600"
            >
              <div className="flex items-center mb-6">
                <CheckCircle size={32} className="text-accent-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Consistency</h3>
              </div>
              <p className="text-gray-700 text-lg">
                Maintaining high standards and quality across all our operations is a core principle at Animal Health Spa. We believe in consistency in delivering quality products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-8 md:p-10 border-l-4 border-gray-800"
            >
              <div className="flex items-center mb-6">
                <Star size={32} className="text-gray-800 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Excellence</h3>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                Striving for excellence in every aspect of our business, from procurement to delivery, is what sets Animal Health SPA apart. We are never satisfied with the status quo and continuously seek ways to improve our products, services, and operations.
              </p>
              <p className="text-gray-700 text-lg">
                This pursuit of excellence drives innovation, efficiency, and ultimately delivers superior value to our clients. We believe that by excelling in what we do, we contribute to the success of our clients and the advancement of animal health care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Our Values in Action</h2>
            <p className="section-subtitle">
              See how our core values translate into tangible benefits for our clients and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ValueCard
              title="Client-Focused Solutions"
              description="We tailor our services and product recommendations to address the specific needs and challenges of each client."
              icon={<Users size={24} />}
              delay={0.1}
            />
            <ValueCard
              title="Quality Assurance"
              description="We implement rigorous quality control measures to ensure that all products meet the highest standards of efficacy and safety."
              icon={<Shield size={24} />}
              delay={0.2}
            />
            <ValueCard
              title="Timely Delivery"
              description="Our logistics network is designed to provide prompt and reliable delivery of essential animal health products when and where they are needed."
              icon={<Truck size={24} />}
              delay={0.3}
            />
            <ValueCard
              title="Transparent Communication"
              description="We maintain open and honest communication with clients, providing clear information about products, availability, and pricing."
              icon={<MessageSquare size={24} />}
              delay={0.4}
            />
            <ValueCard
              title="Continuous Improvement"
              description="We regularly review and refine our processes, services, and product offerings to better serve our clients and communities."
              icon={<RefreshCw size={24} />}
              delay={0.5}
            />
            <ValueCard
              title="Community Support"
              description="We actively engage with and support the communities in which we operate, recognizing our role in contributing to social and economic well-being."
              icon={<Home size={24} />}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      <section 
        className="py-16 md:py-24 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.pexels.com/photos/354006/pexels-photo-354006.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Commitment to Zimbabwe
              </h2>
              <p className="text-gray-200 text-lg mb-6">
                As a company established in Zimbabwe, we are deeply committed to contributing to the nation's agricultural development and food security. We understand the unique challenges faced by farmers and animal health practitioners in our country.
              </p>
              <p className="text-gray-200 text-lg">
                Through our reliable supply of quality animal health products, we aim to support the growth and sustainability of Zimbabwe's livestock sector and improve the livelihoods of those who depend on it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreValuesPage;

import { Users, Shield, Truck, MessageSquare, RefreshCw, Home } from 'lucide-react';