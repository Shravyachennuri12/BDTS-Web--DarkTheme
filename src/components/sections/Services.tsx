import React from 'react';
import { Code, Globe, Smartphone, Cloud, Database, Settings } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import ServiceCard from '../ui/ServiceCard';
import { Link } from 'react-scroll';


const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your unique business challenges and streamline operations.',
    moreInfo: 'We work closely with clients to understand specific requirements and deliver scalable, secure, and efficient software. Our solutions cover everything from ERP systems to custom APIs, ensuring complete alignment with your business goals.',
    icon: Code
  },
  {
    title: 'Web Application Development',
    description: 'Responsive, scalable web applications with intuitive interfaces and robust backend functionality.',
    moreInfo: 'Our web development team builds secure, high-performance web applications using modern frameworks like React, Angular, and Node.js. We ensure SEO-friendly architecture, accessibility, and seamless user experiences.',
    icon: Globe
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across devices.',
    moreInfo: 'We design and develop mobile apps for iOS and Android using technologies like React Native, Flutter, and Swift. Whether it’s an e-commerce platform or a social networking app, we ensure smooth functionality and responsive design.',
    icon: Smartphone
  },
  {
    title: 'Cloud Services',
    description: 'Comprehensive cloud solutions including migration, optimization, and managed services for major platforms.',
    moreInfo: 'We help businesses transition to the cloud with AWS, Azure, and Google Cloud. Our services include infrastructure setup, data migration, performance tuning, and continuous monitoring to keep your systems resilient and cost-effective.',
    icon: Cloud
  },
  {
    title: 'Database Management',
    description: 'Expert database design, implementation, and optimization services to ensure data integrity and performance.',
    moreInfo: 'Our DBAs specialize in SQL and NoSQL solutions such as MySQL, PostgreSQL, MongoDB, and Redis. We offer schema design, replication, backup solutions, and query optimization for robust data management.',
    icon: Database
  },
  {
    title: 'DevOps & IT Infrastructure',
    description: 'Streamlined development operations and infrastructure management for improved efficiency and reliability.',
    moreInfo: 'We automate and optimize CI/CD pipelines using tools like Jenkins, GitLab, and Docker. Our team ensures smooth deployments, monitoring, and infrastructure-as-code practices using Terraform, Kubernetes, and more.',
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
                moreInfo={service.moreInfo}
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
          
          <Link
  to="contact"
  spy={true}
  smooth={true}
  offset={-70}
  duration={700}
>
  <button className="btn btn-primary">
    Schedule a Consultation
  </button>
</Link>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
