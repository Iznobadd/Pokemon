import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const AdminModal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    isOpen && (
      <div
        className="fixed top-0 left-0 w-full h-full overflow-hidden bg-white/50 z-50"
        onClick={onClose}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[500px] my-8 mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-gray-200 w-full mx-auto p-12 rounded">
            {children}
          </div>
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-black text-3xl"
          >
            &times;
          </button>
        </div>
      </div>
    )
  );
};

export default AdminModal;
