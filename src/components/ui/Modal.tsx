// import React from 'react';
// import { X } from 'lucide-react';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   description: string;
//   imageSrc: string;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, imageSrc }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
//       <div className="relative bg-white rounded-2xl shadow-lg max-w-3xl w-full overflow-hidden animate-fade-in">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
//         >
//           <X size={24} />
//         </button>
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 h-64 md:h-auto">
//             <img
//               src={imageSrc}
//               alt={title}
//               className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
//             />
//           </div>
//           <div className="p-6 md:w-1/2">
//             <h3 className="text-2xl font-semibold mb-2">{title}</h3>
//             <p className="text-gray-600 mb-4">{description}</p>

//             {/* Customize below this line to add more content */}
//             <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1 text-sm">
//               <li>High performance & reliability</li>
//               <li>Seamless integration with cloud systems</li>
//               <li>24/7 customer support</li>
//               <li>Enterprise-grade security features</li>
//             </ul>

//             <div className="text-sm text-gray-500">
//               Need a custom solution?{' '}
//               <a href="#contact" className="text-blue-600 hover:underline">
//                 Contact our team
//               </a>
//               .
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden animate-fade-in-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-64 md:h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-700 mb-6 text-base leading-relaxed">{description}</p>

              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-sm">
                <li>High performance & reliability</li>
                <li>Seamless integration with cloud systems</li>
                <li>24/7 customer support</li>
                <li>Enterprise-grade security features</li>
              </ul>
            </div>

            <div className="text-sm text-gray-500 mt-4">
              Need a custom solution?{' '}
              <a href="#contact" className="text-blue-600 hover:underline font-medium">
                Contact our team
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
