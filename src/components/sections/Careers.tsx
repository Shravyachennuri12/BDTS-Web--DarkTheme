// src/pages/Careers.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import JobCard from '../ui/JobCard';
import ApplicationModal from '../ui/ApplicationModal';

const categories = ['All', 'Engineering', 'Design', 'Marketing', 'Operations'];

const jobs = [
  {
    title: 'Senior Full Stack Developer',
    location: 'Bangalore, India',
    type: 'Full-time',
    category: 'Engineering',
    description: 'We are looking for an experienced Full Stack Developer to join our engineering team and help build innovative solutions for our clients.'
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    category: 'Design',
    description: 'Join our design team to create intuitive and engaging user experiences for our products and client projects.'
  },
  {
    title: 'DevOps Engineer',
    location: 'Bangalore, India',
    type: 'Full-time',
    category: 'Engineering',
    description: 'Help us optimize our cloud infrastructure and build robust CI/CD pipelines for our growing portfolio of applications.'
  },
  {
    title: 'Digital Marketing Manager',
    location: 'Mumbai, India',
    type: 'Full-time',
    category: 'Marketing',
    description: 'Lead our digital marketing efforts to increase brand awareness and drive growth through various online channels.'
  },
  {
    title: 'Product Manager',
    location: 'Bangalore, India',
    type: 'Full-time',
    category: 'Operations',
    description: 'Define product vision and strategy, and work closely with engineering and design teams to deliver exceptional products.'
  }
];

const Careers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string | undefined>(undefined);

  const filteredJobs = activeCategory === 'All'
    ? jobs
    : jobs.filter(job => job.category === activeCategory);

  const openModal = (jobTitle?: string) => {
    setSelectedJobTitle(jobTitle);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJobTitle(undefined);
  };

  return (
    <section id="careers" className="section bg-darkSecondary">
      <div className="container">
        <AnimatedSection className="section-heading">
          <h2 className="section-title">
            Join Our <span className="text-primary-500">Team</span>
          </h2>
          <p className="section-subtitle">
            Explore opportunities to work with us and be part of our innovative journey
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-12 mb-8">
          <div className="bg-dark p-6 md:p-10 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Collaborative and innovative work environment',
                    'Opportunities for professional growth and learning',
                    'Competitive compensation and benefits package',
                    'Work on cutting-edge technologies and projects',
                    'Flexible work arrangements',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div
                  className="h-full rounded-lg overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-darkTertiary text-gray-300 hover:bg-primary-500/20'
                }`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        <div className="space-y-6 mt-8">
          {filteredJobs.map((job, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <JobCard
                title={job.title}
                location={job.location}
                type={job.type}
                description={job.description}
                onApplyClick={() => openModal(job.title)}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Don't see a position that matches your skills? We're always looking for exceptional talent!
          </p>
          <button className="btn btn-primary" onClick={() => openModal()}>
            Send Open Application
          </button>
        </AnimatedSection>
      </div>

      {/* Application Form Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        jobTitle={selectedJobTitle}
      />
    </section>
  );
};

export default Careers;
