/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, jobTitle }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      {/* ✅ Centered Success Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 p-6 rounded-xl text-center shadow-lg animate-fadeIn scale-100">
            <div className="text-green-400 text-4xl mb-2">✔</div>
            <p className="text-white text-lg font-semibold">Mail Sent Successfully!</p>
          </div>
        </div>
      )}

      <div className="bg-dark p-6 rounded-lg max-w-lg w-full shadow-lg max-h-[90vh] overflow-y-auto relative">
        <h3 className="text-xl font-bold mb-4 text-white">
          Apply for {jobTitle || 'an Open Position'}
        </h3>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-4"
        >
          <input type="hidden" name="access_key" value="d0d94472-2e95-4310-897b-ff2f6bafe883" />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 rounded bg-darkSecondary text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-2 rounded bg-darkSecondary text-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            className="w-full p-2 rounded bg-darkSecondary text-white"
            required
          />
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn Profile URL"
            className="w-full p-2 rounded bg-darkSecondary text-white"
          />
          <input
            type="url"
            name="portfolio"
            placeholder="Portfolio Website URL"
            className="w-full p-2 rounded bg-darkSecondary text-white"
          />
          <textarea
            name="message"
            placeholder="Why should we hire you?"
            className="w-full p-2 rounded bg-darkSecondary text-white"
            rows={4}
          />
          <textarea
            name="cover_letter"
            placeholder="Write your Cover Letter here..."
            className="w-full p-2 rounded bg-darkSecondary text-white"
            rows={5}
          />

<div className="relative bg-white/10 backdrop-blur-md border border-yellow-500 p-5 rounded-xl shadow-xl text-center text-white">
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full shadow-md">
    NOTE
  </div>
  <p className="text-sm leading-relaxed">
    Kindly send your updated resume to <br />
    <span className="text-yellow-300 font-semibold text-base tracking-wide">
      <a href="mailto:info@baseldtsolutions.com">info@baseldtsolutions.com</a>
    </span>
  </p>
</div>


          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;
