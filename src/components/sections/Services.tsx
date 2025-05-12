import React from 'react';
import { Code, Globe, Smartphone, Cloud, Database, Settings } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your unique business challenges and streamline operations.',
    icon: Code
  },
  {
    title: 'Web Application Development',
    description: 'Responsive, scalable web applications with intuitive interfaces and robust backend functionality.',
    icon: Globe
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across devices.',
    icon: Smartphone
  },
  {
    title: 'Cloud Services',
    description: 'Comprehensive cloud solutions including migration, optimization, and managed services for major platforms.',
    icon: Cloud
  },
  {
    title: 'Database Management',
    description: 'Expert database design, implementation, and optimization services to ensure data integrity and performance.',
    icon: Database
  },
  {
    title: 'DevOps & IT Infrastructure',
    description: 'Streamlined development operations and infrastructure management for improved efficiency and reliability.',
    icon: Settings
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section bg-dark relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      
      <div className="container relative">
        <AnimatedSection className="section-heading">
          <h2 className="section-title">
            Our <span className="text-primary-500">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive IT solutions tailored to meet your business needs
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Need a custom solution?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our team of experts is ready to develop tailored solutions to address your specific business challenges. Let's discuss how we can help you achieve your goals.
          </p>
          <button className="btn btn-primary">
            Schedule a Consultation
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;