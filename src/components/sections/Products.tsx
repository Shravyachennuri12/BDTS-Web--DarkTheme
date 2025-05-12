import React from 'react';
import { Database, Cloud, Smartphone, PieChart } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import ProductCard from '../ui/ProductCard';

const products = [
  {
    title: 'BaselDB Enterprise',
    description: 'Our flagship enterprise-grade database solution offering unparalleled performance, security, and scalability for mission-critical applications.',
    icon: Database,
    imageSrc: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'CloudSync Platform',
    description: 'A comprehensive cloud management solution that simplifies deployment, scaling, and monitoring of your cloud infrastructure.',
    icon: Cloud,
    imageSrc: 'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'MobileForge SDK',
    description: 'A powerful cross-platform mobile development kit that enables rapid app creation with native performance across iOS and Android.',
    icon: Smartphone,
    imageSrc: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'InsightAnalytics',
    description: 'Advanced data analytics and visualization tools that transform raw data into actionable business intelligence.',
    icon: PieChart,
    imageSrc: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="section bg-dark">
      <div className="container">
        <AnimatedSection className="section-heading">
          <h2 className="section-title">
            Our <span className="text-primary-500">Products</span>
          </h2>
          <p className="section-subtitle">
            Cutting-edge solutions designed to drive innovation and transform your business
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <ProductCard
                icon={product.icon}
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;