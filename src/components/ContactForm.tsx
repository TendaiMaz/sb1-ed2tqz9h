import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isHuman: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormState((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.isHuman) {
      setSubmitError('Please verify that you are human by checking the box.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate the email sending
      const emailData = {
        to: 'enquiries@animalhealthspa.com',
        from: formState.email,
        subject: `Contact Form: ${formState.subject}`,
        text: `
          Name: ${formState.name}
          Email: ${formState.email}
          Phone: ${formState.phone}
          Subject: ${formState.subject}
          Message: ${formState.message}
        `
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      // Reset form
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        isHuman: false
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6"
        >
          <p className="font-medium">Thank you for your message!</p>
          <p>We'll get back to you as soon as possible.</p>
        </motion.div>
      ) : null}

      {submitError ? (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
          <p className="font-medium">Error sending message:</p>
          <p>{submitError}</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            >
              <option value="">Select a subject</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Pricing">Pricing</option>
              <option value="Delivery">Delivery</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="isHuman"
                  name="isHuman"
                  type="checkbox"
                  checked={formState.isHuman}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="isHuman" className="font-medium text-gray-700">
                  I confirm that I am a human
                </label>
                <p className="text-gray-500">Please check this box to verify you are not a robot.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <span className="inline-flex items-center">
                <Send size={18} className="mr-2" />
                Send Message
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;