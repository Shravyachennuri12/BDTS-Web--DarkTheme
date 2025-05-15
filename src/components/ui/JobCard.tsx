// src/ui/JobCard.tsx

import React from 'react';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
  onApplyClick?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ title, location, type, description, onApplyClick }) => {
  return (
    <div className="bg-dark p-6 rounded-lg shadow-md text-white">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm mb-1">{location} | {type}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      {onApplyClick && (
        <button className="btn btn-primary" onClick={onApplyClick}>
          Apply Now
        </button>
      )}
    </div>
  );
};

export default JobCard;
