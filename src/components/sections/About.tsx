// import React from 'react';
// import { motion } from 'framer-motion';
// import AnimatedSection from '../ui/AnimatedSection';

// const timelineItems = [
//   {
//     year: '2010',
//     title: 'Company Founded',
//     description: 'Basel Dynamics was established with a vision to transform the IT landscape through innovative solutions.'
//   },
//   {
//     year: '2013',
//     title: 'First Major Product Launch',
//     description: 'Released our flagship database solution, BaselDB, which quickly gained recognition for its performance.'
//   },
//   {
//     year: '2015',
//     title: 'International Expansion',
//     description: 'Expanded operations to Europe and Southeast Asia, establishing global presence with offices in London and Singapore.'
//   },
//   {
//     year: '2018',
//     title: 'Cloud Services Division',
//     description: 'Launched our cloud services division, offering comprehensive solutions for businesses of all sizes.'
//   },
//   {
//     year: '2021',
//     title: 'AI Innovation Center',
//     description: 'Established our AI Research & Innovation Center to develop cutting-edge machine learning solutions.'
//   },
//   {
//     year: '2023',
//     title: 'Strategic Partnerships',
//     description: 'Formed strategic partnerships with leading global tech companies to expand our service offerings.'
//   }
// ];

// const About: React.FC = () => {
//   return (
//     <section id="about" className="section bg-darkSecondary relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/5 rounded-bl-full"></div>
//       <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary-500/5 rounded-tr-full"></div>
      
//       <div className="container relative z-10">
//         <AnimatedSection className="section-heading">
//           <h2 className="section-title">
//             About <span className="text-primary-500">Us</span>
//           </h2>
//           <p className="section-subtitle">
//             We are a team of passionate technologists committed to delivering excellence
//           </p>
//         </AnimatedSection>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
//           <AnimatedSection direction="left">
//             <h3 className="text-2xl font-bold mb-4">Our Story</h3>
//             <p className="text-gray-300">
//               Founded in 2010, Basel Dynamics emerged from a vision to create technology solutions that truly empower businesses. What began as a small team of innovative engineers has grown into a global technology leader serving clients across industries.
//             </p>
//             <p className="text-gray-300 mt-4">
//               Our journey has been defined by continuous innovation, unwavering commitment to quality, and a deep understanding of evolving business needs in the digital age.
//             </p>
            
//             <div className="mt-8 grid grid-cols-2 gap-6">
//               <div className="bg-darkTertiary p-6 rounded-lg text-center">
//                 <h4 className="text-3xl font-bold text-primary-500 mb-2">250+</h4>
//                 <p className="text-gray-300">Clients Worldwide</p>
//               </div>
//               <div className="bg-darkTertiary p-6 rounded-lg text-center">
//                 <h4 className="text-3xl font-bold text-primary-500 mb-2">500+</h4>
//                 <p className="text-gray-300">Projects Completed</p>
//               </div>
//             </div>
//           </AnimatedSection>
          
//           <AnimatedSection direction="right">
//             <h3 className="text-2xl font-bold mb-4">Our Values</h3>
//             <div className="space-y-4">
//               {[
//                 { title: 'Innovation', description: 'We constantly push boundaries to deliver cutting-edge solutions.' },
//                 { title: 'Excellence', description: 'We are committed to the highest standards in everything we do.' },
//                 { title: 'Integrity', description: 'We operate with transparency and honesty in all our interactions.' },
//                 { title: 'Collaboration', description: 'We believe in the power of teamwork to achieve exceptional results.' },
//               ].map((value, index) => (
//                 <motion.div 
//                   key={index}
//                   className="bg-darkTertiary p-4 rounded-lg"
//                   whileHover={{ x: 5 }}
//                 >
//                   <h4 className="text-lg font-bold text-primary-400">{value.title}</h4>
//                   <p className="text-gray-300">{value.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </AnimatedSection>
//         </div>

//         <AnimatedSection className="mt-20">
//           <h3 className="text-2xl font-bold text-center mb-12">Our Journey</h3>
          
//           <div className="timeline-container py-8">
//             {timelineItems.map((item, index) => (
//               <div key={index} className="timeline-item mb-8">
//                 <div className="timeline-dot"></div>
//                 <AnimatedSection 
//                   direction={index % 2 === 0 ? 'left' : 'right'}
//                   delay={index * 0.1}
//                   className="bg-darkTertiary p-6 rounded-lg"
//                 >
//                   <span className="text-sm font-bold text-primary-400">{item.year}</span>
//                   <h4 className="text-xl font-bold mt-1 mb-2">{item.title}</h4>
//                   <p className="text-gray-300">{item.description}</p>
//                 </AnimatedSection>
//               </div>
//             ))}
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const timelineItems = [
  {
    year: '2021',
    title: 'Company Founded',
    description: 'Basel Dynamics was established with a vision to transform the IT landscape through innovative solutions.'
  },
  {
    year: '2022',
    title: 'First Major Product Launch',
    description: 'Released our flagship database solution, BaselDB, which quickly gained recognition for its performance.'
  },
  {
    year: '2023',
    title: 'International Expansion',
    description: 'Expanded operations to Europe and Southeast Asia, establishing global presence with offices in London and Singapore.'
  },
  {
    year: '2024',
    title: 'Cloud Services Division',
    description: 'Launched our cloud services division, offering comprehensive solutions for businesses of all sizes.'
  },
  {
    year: '2024',
    title: 'AI Innovation Center',
    description: 'Established our AI Research & Innovation Center to develop cutting-edge machine learning solutions.'
  },
  {
    year: '2025',
    title: 'Strategic Partnerships',
    description: 'Formed strategic partnerships with leading global tech companies to expand our service offerings.'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-darkSecondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary-500/5 rounded-tr-full"></div>
      
      <div className="container relative z-10">
        <AnimatedSection className="section-heading">
          <h2 className="section-title">
            About <span className="text-primary-500">Us</span>
          </h2>
          <p className="section-subtitle">
            Basel Dynamics Tech Solutions offers top-tier software development, IT staffing, and digital marketing solutions in the US, India, and globally.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <AnimatedSection direction="left">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-300 mb-4">
              Provide the Best Easy Solution for Your IT Problem. Our team is dedicated to understanding your challenges, diving deep into them, and using our expertise to craft tailored solutions.
            </p>
            <p className="text-gray-300">
              Founded in 2020, Basel Dynamics emerged from a vision to create technology solutions that truly empower businesses. What began as a small team of innovative engineers has grown into a global technology leader serving clients across industries.
            </p>
            <p className="text-gray-300 mt-4">
              Our journey has been defined by continuous innovation, unwavering commitment to quality, and a deep understanding of evolving business needs in the digital age.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-darkTertiary p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-primary-500 mb-2">250+</h4>
                <p className="text-gray-300">Clients Worldwide</p>
              </div>
              <div className="bg-darkTertiary p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-primary-500 mb-2">500+</h4>
                <p className="text-gray-300">Projects Completed</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <div className="space-y-4">
              {[
                { title: 'Innovation', description: 'We constantly push boundaries to deliver cutting-edge solutions.' },
                { title: 'Excellence', description: 'We are committed to the highest standards in everything we do.' },
                { title: 'Integrity', description: 'We operate with transparency and honesty in all our interactions.' },
                { title: 'Collaboration', description: 'We believe in the power of teamwork to achieve exceptional results.' },
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-darkTertiary p-4 rounded-lg"
                  whileHover={{ x: 5 }}
                >
                  <h4 className="text-lg font-bold text-primary-400">{value.title}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Our Journey</h3>
          
          <div className="timeline-container py-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item mb-8">
                <div className="timeline-dot"></div>
                <AnimatedSection 
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1}
                  className="bg-darkTertiary p-6 rounded-lg"
                >
                  <span className="text-sm font-bold text-primary-400">{item.year}</span>
                  <h4 className="text-xl font-bold mt-1 mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
