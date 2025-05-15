import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

const DropzoneField = ({
  label,
  required = false,
  name,
}: {
  label: string;
  required?: boolean;
  name: string;
}) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ name });

  return (
    <div className="mb-4">
      <label className="block text-white mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        {...getRootProps()}
        className="border-dashed border-2 border-gray-400 rounded-md p-6 text-center text-white cursor-pointer hover:border-blue-400"
      >
        <input {...getInputProps({ name })} />
        <div className="flex flex-col items-center justify-center">
          <svg
            className="w-10 h-10 text-gray-300 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v6m0 0l-3-3m3 3l3-3M12 2a9.003 9.003 0 018.938 7.6"
            />
          </svg>
          <p className="font-semibold">Upload a File</p>
          <p className="text-sm text-gray-400">Drag and drop files here</p>
        </div>
      </div>
      {acceptedFiles.length > 0 && (
        <ul className="mt-2 text-sm text-gray-200">
          {acceptedFiles.map((file) => (
            <li key={file.name}>✅ {file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, jobTitle }) => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-dark p-6 rounded-lg max-w-lg w-full shadow-lg max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4 text-white">
          Apply for {jobTitle || 'an Open Position'}
        </h3>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          encType="multipart/form-data"
          className="space-y-4"
        >
          {/* Hidden Access Key */}
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

          <DropzoneField label="Upload Resume" required name="resume" />
          <DropzoneField label="Any Other Documents to Upload" name="other_docs" />

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
