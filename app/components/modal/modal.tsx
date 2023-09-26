import React from 'react';

interface ModalProps {
  imageUrl: string;
  alt_description:string;
  closeModal: () => void;
  
}

const Modal: React.FC<ModalProps> = ({ imageUrl, closeModal,alt_description}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div   className="absolute inset-0 z-30 cursor-default bg-gray-100 backdrop-blur-2xl ">
      <button
          className="rounded-full bg-black/50 p-2 ml-10 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
          onClick={closeModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          strokeWidth="1.5" stroke="currentColor"
           className="w-6 h-6">
   <path strokeLinecap="round" strokeLinejoin="round" 
   d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>

        </button>
        <img src={imageUrl}  alt="Selected Image" className=" pb-11 ml-10 rounded-md   object-cover  pointer-events-none h-[602px] w-[1200px] mb-12 mr-10" />
        <p>{alt_description}</p>
      </div>
    </div>
  );
};

export default Modal;
