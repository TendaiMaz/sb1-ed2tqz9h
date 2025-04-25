import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Pill, Shield, Award, HeartPulse, Truck, Leaf, Phone } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(https://images.pexels.com/photos/7469118/pexels-photo-7469118.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-900/30 z-0"></div>
        <div className="container-custom relative z-10 text-center py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white mb-6">
              Leading Supplier of <br className="hidden md:block" />
              <span className="text-primary-400">Animal Health</span> Products
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Established in 2025, Animal Health SPA is committed to addressing all animal health product needs in Zimbabwe and beyond.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link to="/core-business" className="btn-primary">
                Explore Our Products
              </Link>
              <Link to="/contact" className="btn-outline text-white border-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent pb-6 pt-20 hidden md:block"
          >
            <div className="flex justify-center items-center space-x-8 lg:space-x-16">
              {['Quality Products', 'Expert Support', 'Nationwide Delivery', 'Trusted Partners'].map((item, index) => (
                <div key={index} className="text-white text-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Animal Health SPA
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Established in 2025, Animal Health Spa is a supplier of animal medicines for all species from terrestrial to aquatic animals. We also supply animal feed / feed ingredients, equipment and other accessories to farmers, institutions, game parks, reserves among others.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Animal Health Spa (Pvt) Ltd is committed to making impactful contribution in addressing animal health management in Zimbabwe through leveraging its extensive network, robust logistics while complying with regulatory requirements on distribution and use of animal health products.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                We work closely with our clients and suppliers build solid and enduring business relationships.
              </p>
              <Link to="/core-business" className="btn-primary">
                Learn More About Us
              </Link>
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
                  src="https://images.pexels.com/photos/133774/pexels-photo-133774.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Animal Health Care" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">Since 2025</p>
                <p>Trusted Partner in Animal Health</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Business Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Our Core Business</h2>
            <p className="section-subtitle">
              Animal Health Spa aspires to supply a wide range of animal health products in support of the farmer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ProductCard
              title="Animal Medicines"
              description="High-quality medicines for all types of animals, ensuring their health and wellbeing."
              image="https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.1}
            />
            <ProductCard
              title="Farm Equipment"
              description="Modern and efficient equipment for farm operations, designed to improve productivity."
              image="https://images.pexels.com/photos/5580800/pexels-photo-5580800.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.2}
            />
            <ProductCard
              title="Animal Feed"
              description="Nutritious feed options for various animals, formulated to meet their dietary needs."
              image="https://images.pexels.com/photos/583850/pexels-photo-583850.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.3}
            />
            <ProductCard
              title="Accessories"
              description="Essential accessories for animal care, including grooming tools and feeding equipment."
              image="https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.4}
            />
            <ProductCard
              title="Veterinary Supplies"
              description="Comprehensive range of veterinary supplies for professional animal healthcare."
              image="https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.5}
            />
            <ProductCard
              title="Health Consultations"
              description="Expert consultations on animal health matters from experienced professionals."
              image="https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.6}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/core-business" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Why Choose Animal Health SPA</h2>
            <p className="section-subtitle">
              We are committed to providing quality animal health products with expert support and reliable service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Pill size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
              <p className="text-gray-600">We source only the highest quality animal health products from trusted manufacturers and suppliers.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">All our products meet the regulatory standards and requirements for animal health care.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliable Distribution</h3>
              <p className="text-gray-600">Our robust logistics network ensures timely delivery of products to all parts of Zimbabwe and beyond.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">Our team of professionals provides expert advice and support for all your animal health needs.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Experience & Dedication</h3>
              <p className="text-gray-600">With our experience, we are dedicated to addressing all animal health challenges effectively.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Practices</h3>
              <p className="text-gray-600">We are committed to sustainable and responsible practices in animal health care.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.pexels.com/photos/3696663/pexels-photo-3696663.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Improve Your Animal Health Care?
            </h2>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-8">
              Contact us today to learn more about our products and services or to schedule a consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn-primary">
                <Phone size={18} className="mr-2" />
                Contact Us
              </Link>
              <Link to="/core-business" className="btn-outline text-white border-white hover:bg-white/10">
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;