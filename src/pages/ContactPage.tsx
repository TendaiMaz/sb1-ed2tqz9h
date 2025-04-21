import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, orders, or support"
        backgroundImage="https://images.pexels.com/photos/6740637/pexels-photo-6740637.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                We'd Love to Hear From You
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-600">123 Health Road, Harare, Zimbabwe</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                    <p className="text-gray-600">+263 123 456 789</p>
                    <p className="text-gray-600">+263 987 654 321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                    <p className="text-gray-600">info@animalhealthspa.com</p>
                    <p className="text-gray-600">orders@animalhealthspa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Clock size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
                <p className="text-gray-600 mb-2">
                  For urgent animal health emergencies outside of business hours:
                </p>
                <p className="text-gray-900 font-medium">+263 123 789 456</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Find Us On The Map</h2>
            <p className="section-subtitle">
              Our central location makes it easy to reach us from anywhere in Harare
            </p>
          </div>
          
          <div className="mt-12 rounded-lg overflow-hidden shadow-md h-[400px] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600 text-center p-4">
              Interactive map would be embedded here using Google Maps or similar service.
              <br />
              <span className="text-sm block mt-2">
                For privacy and performance reasons in this demo, we've used a placeholder.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our products and services
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3">Do you offer delivery services?</h3>
              <p className="text-gray-600">
                Yes, we provide delivery services throughout Zimbabwe. Delivery times and fees vary depending on your location. For large orders, we may offer free delivery within certain areas.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept various payment methods including bank transfers, mobile money payments, and cash payments for in-store purchases. For regular clients, we also offer credit terms subject to approval.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3">Do you provide technical support or advice?</h3>
              <p className="text-gray-600">
                Yes, our team of professionals is available to provide expert advice on animal health products and their applications. We offer consultations both in-store and via phone or email.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3">Can you source specific products not in your catalog?</h3>
              <p className="text-gray-600">
                Yes, we can source specific animal health products that may not be in our regular catalog. Please contact us with your requirements, and our team will work to procure the items you need.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;