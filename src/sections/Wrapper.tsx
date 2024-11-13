import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="min-h-dvh bg-content flex justify-center relative overflow-hidden py-20">
      {children}
    </div>
  );
};

export default Wrapper;
