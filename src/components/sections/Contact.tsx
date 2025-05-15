import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const Contact: React.FC = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "d0d94472-2e95-4310-897b-ff2f6bafe883");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Message sent successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section bg-dark">
      <div className="container">
        <AnimatedSection className="section-heading">
          <h2 className="section-title">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have questions or want to discuss your project? We'd love to hear from you!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedSection direction="left">
            <div className="bg-darkSecondary p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-500/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="text-gray-300">
                      10th Floor, Suit.No:10, Gamma Block Sigma Soft Tech Park, Ramagondanahalli, Whitefield<br />
                      Bengaluru, Karnataka 560066
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-500/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-300">
                      info@baseldynamics.com<br />
                      support@baseldynamics.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-500/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-300">
                      +91 (88) 85525531<br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="bg-darkTertiary p-3 rounded-full text-gray-300 hover:text-primary-500 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-darkSecondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-darkTertiary border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="BDTS"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-darkTertiary border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="bdts@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-darkTertiary border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-darkTertiary border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-12">
          <div className="bg-darkSecondary p-2 rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.250404109279!2d77.73834127460367!3d12.95582231522498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1302aa8f3afd%3A0x12e5e8f11df20e45!2sBASEL%20DYNAMICS%20TECH%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1746770166636!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
