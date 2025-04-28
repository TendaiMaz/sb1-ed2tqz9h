import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';

const CoreBusinessPage: React.FC = () => {
  const productCategories = [
    {
      id: 'medicines',
      title: 'Animal Medicines',
      products: [
        {
          title: 'Antibiotics',
          description: 'Broad-spectrum antibiotics for treating bacterial infections in various animals.',
          image: 'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Antiparasitics',
          description: 'Effective treatments for internal and external parasites affecting livestock and pets.',
          image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Vaccines',
          description: 'Preventative vaccines to protect animals against common and serious diseases.',
          image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Anti-inflammatory Medications',
          description: 'Medications to reduce inflammation and alleviate pain in animals.',
          image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
      ]
    },
    {
      id: 'equipment',
      title: 'Farm Equipment',
      products: [
        {
          title: 'Feeding Equipment',
          description: 'Specialized equipment for efficient and controlled feeding of livestock.',
          image: 'https://images.pexels.com/photos/275638/pexels-photo-275638.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Watering Systems',
          description: 'Advanced watering systems to ensure consistent access to clean water for animals.',
          image: 'https://images.pexels.com/photos/7640897/pexels-photo-7640897.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Handling Equipment',
          description: 'Safe and efficient equipment for handling and managing livestock.',
          image: 'https://images.pexels.com/photos/5431979/pexels-photo-5431979.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Monitoring Devices',
          description: 'Technology for monitoring animal health, behavior, and environmental conditions.',
          image: 'https://images.pexels.com/photos/3912982/pexels-photo-3912982.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
      ]
    },
    {
      id: 'feed',
      title: 'Animal Feed',
      products: [
        {
          title: 'Livestock Feed',
          description: 'Nutritionally balanced feed formulations for cattle, sheep, goats, and other livestock.',
          image: 'https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Poultry Feed',
          description: 'Specialized feed for optimal growth and egg production in chickens and other poultry.',
          image: 'https://images.pexels.com/photos/2255454/pexels-photo-2255454.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Pet Food',
          description: 'Premium quality food for cats, dogs, and other domestic pets.',
          image: 'https://images.pexels.com/photos/6568310/pexels-photo-6568310.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Supplements',
          description: 'Nutritional supplements to address specific dietary needs and health concerns.',
          image: 'https://images.pexels.com/photos/4210341/pexels-photo-4210341.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
      ]
    },
    {
      id: 'accessories',
      title: 'Accessories & Supplies',
      products: [
        {
          title: 'Veterinary Tools',
          description: 'Essential tools and instruments for veterinary procedures and examinations.',
          image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Grooming Supplies',
          description: 'Professional grooming tools and products for maintaining animal health and appearance.',
          image: 'https://images.pexels.com/photos/6568078/pexels-photo-6568078.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Identification Systems',
          description: 'Tags, microchips, and other identification solutions for livestock and pets.',
          image: 'https://images.pexels.com/photos/7210266/pexels-photo-7210266.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'First Aid Kits',
          description: 'Comprehensive first aid kits designed specifically for animal emergencies.',
          image: 'https://images.pexels.com/photos/6749848/pexels-photo-6749848.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
      ]
    },
    {
      id: 'pesticides',
      title: 'Animal Health Pesticides',
      products: [
        {
          title: 'Ectoparasiticides',
          description: 'Effective treatments for external parasites like ticks, fleas, and mites affecting livestock and pets.',
          image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Insecticides',
          description: 'Specialized insecticides for controlling flies, mosquitoes, and other insects that affect animal health.',
          image: 'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Fumigants',
          description: 'Safe and effective fumigants for controlling pests in animal housing and storage facilities.',
          image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          title: 'Repellents',
          description: 'Animal-safe repellents to protect livestock from pests and disease-carrying insects.',
          image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Core Business"
        subtitle="Animal Health Spa aspires to supply a wide range of animal health products in support of the farmer."
        backgroundImage="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
              Comprehensive Animal Health Solutions
            </h2>
            <p className="text-gray-700 text-lg">
              Animal Health SPA is committed to providing a complete range of products and services to meet all your animal health needs. Our extensive product lineup ensures that farmers, veterinarians, and pet owners have access to the best tools and supplies for maintaining animal health and welfare.
            </p>
          </motion.div>

          {productCategories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-20 last:mb-0" id={category.id}>
              <div className="mb-10 border-b border-gray-200 pb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.products.map((product, productIndex) => (
                  <ProductCard
                    key={`${category.id}-${productIndex}`}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    delay={0.1 * productIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quality Assurance & Standards
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                At Animal Health SPA, we are committed to providing only the highest quality products that meet international standards and local regulatory requirements. All our animal medicines and health products undergo rigorous quality checks.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                We carefully select our suppliers and partners to ensure that the products we offer are effective, safe, and reliable. Our quality assurance process includes verification of product authenticity, proper storage, and handling throughout the supply chain.
              </p>
              <p className="text-gray-700 text-lg">
                By choosing Animal Health SPA, you can be confident that you are receiving products that will effectively support the health and well-being of your animals.
              </p>
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
                  src="https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Quality Assurance" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreBusinessPage;