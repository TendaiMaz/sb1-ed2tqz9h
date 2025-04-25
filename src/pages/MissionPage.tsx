import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { Target, Compass, Building, Users, Award, TrendingUp } from 'lucide-react';

const MissionPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Our Mission"
        subtitle="To be a firm of qualified professionals dedicated to the health and welfare of all animals under various management conditions."
        backgroundImage="https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center px-4 py-2 bg-primary-50 text-primary-600 rounded-full">
                <Target size={20} className="mr-2" />
                <span className="font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dedicated to Excellence in Animal Health
              </h2>
              <div className="text-gray-700 mb-6 text-lg space-y-4">
                <p>
                  To be a firm of qualified professionals dedicated to improving our client's success, providing fulfilling opportunities to our staff, and making a positive contribution to the economic and social well-being of our various communities.
                </p>
                <p>
                  At Animal Health Spa, we understand the critical role that animal health plays in agriculture, food security, and the well-being of companion animals. Our mission drives us to provide the highest quality products and services that support the health, productivity and welfare of all animals under our clients' care.
                </p>
                <p>
                  We are committed to continuous research and development and staying at the forefront of advancements in animal health.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Our Mission" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Our Strategic Goals</h2>
            <p className="section-subtitle">
              We have established clear strategic goals to guide our operations and ensure we fulfill our mission of providing exceptional animal health care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Market Leadership</h3>
              <p className="text-gray-600">
                To establish and maintain our position as the leading provider of comprehensive animal health solutions in Zimbabwe, serving both agricultural and companion animal sectors.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Service Excellence</h3>
              <p className="text-gray-600">
                To provide exceptional veterinary services, wellness programs, and healthcare products that meet the highest standards of quality and effectiveness.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Client Partnership</h3>
              <p className="text-gray-600">
                To build strong, lasting relationships with our clients by understanding their needs and providing personalized solutions for their animal health challenges.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Building size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Facility Excellence</h3>
              <p className="text-gray-600">
                To maintain state-of-the-art facilities equipped with the latest technology and staffed by highly trained professionals to provide the best possible care.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation and Research</h3>
              <p className="text-gray-600">
                To continuously explore and implement new approaches in animal health care, staying at the forefront of veterinary medicine and wellness practices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Education</h3>
              <p className="text-gray-600">
                To actively promote animal health awareness and education in our community, helping pet owners and farmers make informed decisions about animal care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section 
        className="py-16 md:py-24 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
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
                Partner With Us for Better Animal Health
              </h2>
              <p className="text-gray-200 text-lg mb-8">
                Whether you're a farmer looking to improve livestock health, a pet owner seeking the best care for your companion, or a veterinary professional interested in collaboration, we invite you to join us in our mission to provide exceptional animal health care. Together, we can create a healthier future for all animals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionPage;