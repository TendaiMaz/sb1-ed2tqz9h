import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import TeamMember from '../components/TeamMember';

const DirectorsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to the previous page
    navigate(-1);
  }, [navigate]);

  const directors = [
    {
      name: 'Dr. Sarah Moyo',
      position: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'Dr. Moyo brings over 15 years of experience in veterinary medicine and pharmaceutical management. She holds a Doctor of Veterinary Medicine degree and an MBA, combining clinical expertise with business acumen to lead Animal Health SPA.',
      linkedin: '#',
      twitter: '#',
      email: 'sarah.moyo@animalhealthspa.com'
    },
    {
      name: 'Dr. Michael Ndlovu',
      position: 'Chief Operations Officer',
      image: 'https://images.pexels.com/photos/6551151/pexels-photo-6551151.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'With extensive experience in supply chain management and operations, Dr. Ndlovu oversees the efficient distribution of animal health products across Zimbabwe and neighboring countries. He holds a Ph.D. in Agricultural Economics.',
      linkedin: '#',
      twitter: '#',
      email: 'michael.ndlovu@animalhealthspa.com'
    },
    {
      name: 'Dr. Emily Chikwanda',
      position: 'Technical Director',
      image: 'https://images.pexels.com/photos/5328961/pexels-photo-5328961.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'Dr. Chikwanda leads our technical team, providing expert guidance on animal health products and their applications. She specializes in livestock health and has published numerous research papers on emerging veterinary medicines.',
      linkedin: '#',
      twitter: '#',
      email: 'emily.chikwanda@animalhealthspa.com'
    },
    {
      name: 'Robert Mutasa',
      position: 'Chief Financial Officer',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'With a strong background in financial management within the agricultural sector, Robert oversees all financial operations and strategic planning at Animal Health SPA. He holds a Master\'s degree in Finance and is a certified accountant.',
      linkedin: '#',
      twitter: '#',
      email: 'robert.mutasa@animalhealthspa.com'
    },
    {
      name: 'Grace Makoni',
      position: 'Director of Business Development',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'Grace leads our business expansion efforts, developing new market opportunities and strategic partnerships. With a background in international business and agricultural trade, she has been instrumental in growing our presence beyond Zimbabwe.',
      linkedin: '#',
      twitter: '#',
      email: 'grace.makoni@animalhealthspa.com'
    },
    {
      name: 'Dr. Tendai Gumbo',
      position: 'Research and Development Director',
      image: 'https://images.pexels.com/photos/5408191/pexels-photo-5408191.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'Dr. Gumbo oversees our product research and development initiatives, ensuring that Animal Health SPA stays at the forefront of advances in animal health care. He holds a Ph.D. in Veterinary Science and has led several research projects.',
      linkedin: '#',
      twitter: '#',
      email: 'tendai.gumbo@animalhealthspa.com'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Leadership Team"
        subtitle="Meet the experienced professionals guiding Animal Health SPA"
        backgroundImage="https://images.pexels.com/photos/7516589/pexels-photo-7516589.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
              Board of Directors
            </h2>
            <p className="text-gray-700 text-lg">
              Our company is led by a diverse team of experienced professionals with expertise in veterinary science, business management, and agricultural development. Together, they provide the vision and strategic direction that drives Animal Health SPA's growth and success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <TeamMember
                key={index}
                name={director.name}
                position={director.position}
                image={director.image}
                bio={director.bio}
                delay={0.1 * index}
                linkedin={director.linkedin}
                twitter={director.twitter}
                email={director.email}
              />
            ))}
          </div>
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
                Our Leadership Philosophy
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                At Animal Health Spa, our leadership team is guided by a philosophy centered on ethical business practices, innovation, and a deep commitment to animal welfare and agricultural development.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                We believe in leading by example, fostering a culture of excellence, and empowering our team members to contribute their best. Our directors maintain an open-door policy, encouraging communication and collaboration at all levels of the organization
              </p>
              <p className="text-gray-700 text-lg">
                This leadership approach enables us to build a resilient, adaptable company that can effectively respond to the dynamic needs of the animal health sector while staying true to our core values and mission.
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
                  src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Leadership Meeting" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section 
        className="py-16 md:py-24 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1600)',
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
                Join Our Journey
              </h2>
              <p className="text-gray-200 text-lg mb-8">
                We are always looking for talented individuals who share our passion for animal health and agricultural development. If you are interested in joining our team, please visit our careers page or contact us directly.
              </p>
              <a href="#" className="btn-primary">
                View Career Opportunities
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectorsPage;